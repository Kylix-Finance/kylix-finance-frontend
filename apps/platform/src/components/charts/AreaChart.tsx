import React, { useMemo } from "react";
import { AreaClosed, Line, Bar } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { scaleTime, scaleLinear } from "@visx/scale";
import { AxisBottom } from "@visx/axis";
import { LinearGradient } from "@visx/gradient";
import { useTooltip, TooltipWithBounds, defaultStyles } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { bisector } from "d3-array";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { framerProps, fadeInOutAnimation } from "~/animations/variants";
import { getShortMonth } from "~/utils/date";

interface DataPoint {
  date: Date;
  usdt: number;
  dot: number;
}

interface Dataset {
  data: DataPoint[];
  color: string;
}

const getDate = (d: DataPoint) => d.date;
const getValue = (d: DataPoint) => d.usdt;
const bisectDateForData = bisector<DataPoint, Date>((d) => d.date).left;

interface Props {
  width?: number;
  height?: number;
  dataset: Dataset[];
}

const AreaChart = ({ height = 400, width = 800, dataset }: Props) => {
  const { spacing, palette } = useTheme();
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const allDataPoints = dataset.flatMap((d) => d.data || []);

  const xScale = useMemo(() => {
    const allDates = allDataPoints
      .map(getDate)
      .filter((date) => date instanceof Date && !isNaN(date.getTime()));

    if (allDates.length === 0) {
      return scaleTime({
        range: [0, innerWidth],
        domain: [new Date(), new Date()],
      });
    }

    const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
    const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));

    return scaleTime({
      range: [0, innerWidth],
      domain: [minDate, maxDate],
    });
  }, [innerWidth, allDataPoints]);

  const yScale = useMemo(() => {
    const allValues = allDataPoints
      .map(getValue)
      .filter((value) => typeof value === "number" && !isNaN(value));

    const maxValue = allValues.length > 0 ? Math.max(...allValues) * 1.1 : 1;

    return scaleLinear({
      range: [innerHeight, 0],
      domain: [0, maxValue],
      nice: true,
    });
  }, [innerHeight, allDataPoints]);

  const {
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
    showTooltip,
    hideTooltip,
  } = useTooltip<DataPoint>();

  const mainData = dataset.length > 0 ? dataset[0].data || [] : [];

  const handleTooltip = (
    event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
  ) => {
    const { x } = localPoint(event) || { x: 0 };
    const x0 = xScale.invert(x - margin.left);
    const index = bisectDateForData(mainData, x0, 1);
    const d0 = mainData[index - 1];
    const d1 = mainData[index];

    if (!d0 || !d1) return;
    const d =
      x0.getTime() - d0.date.getTime() > d1.date.getTime() - x0.getTime()
        ? d1
        : d0;

    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(d.date),
      tooltipTop: yScale(d.usdt),
    });
  };

  const uniqueMonths = useMemo(() => {
    const months = allDataPoints.map((d) => ({
      year: d.date.getFullYear(),
      month: d.date.getMonth(),
    }));

    const uniqueYearMonths = Array.from(
      new Set(months.map((m) => `${m.year}-${m.month}`))
    );

    return uniqueYearMonths.map((key) => {
      const [year, month] = key.split("-").map(Number);
      return new Date(year, month, 1);
    });
  }, [allDataPoints]);

  return (
    <div>
      <svg width={width} height={height}>
        <defs>
          {dataset.map((item, index) => (
            <LinearGradient
              key={`gradient-${index}`}
              id={`area-gradient-${index}`}
              from={item.color}
              to={item.color}
              fromOpacity={1}
              toOpacity={0}
            />
          ))}
          {tooltipData && (
            <clipPath id="clip-whitish">
              <rect
                x={tooltipLeft}
                y={0}
                width={innerWidth - tooltipLeft}
                height={innerHeight}
              />
            </clipPath>
          )}
        </defs>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {dataset.map((item, index) => (
            <AreaClosed
              key={index}
              data={item.data}
              x={(d: DataPoint) => xScale(getDate(d))}
              y={(d: DataPoint) => yScale(getValue(d))}
              yScale={yScale}
              curve={curveMonotoneX}
              fill={`url(#area-gradient-${index})`}
              stroke={item.color}
              strokeWidth={1}
            />
          ))}

          {tooltipData && (
            <g clipPath="url(#clip-whitish)">
              <rect
                x={tooltipLeft}
                y={0}
                width={innerWidth - tooltipLeft}
                height={innerHeight}
                fill="white"
                fillOpacity={0.2}
              />
            </g>
          )}
          <AxisBottom
            scale={xScale}
            top={innerHeight}
            stroke="#ddd"
            tickStroke="transparent"
            tickValues={uniqueMonths}
            tickFormat={(value) => {
              const dateValue =
                value instanceof Date
                  ? value
                  : new Date(value as number | string);
              return getShortMonth(dateValue);
            }}
            tickLabelProps={() => ({
              fill: "#666",
              fontSize: 10,
              textAnchor: "middle",
            })}
          />

          {tooltipData && (
            <g>
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={10}
                fill={palette.primary.light}
                fillOpacity={0.3}
                stroke="none"
                pointerEvents="none"
              />
              <Line
                from={{ x: tooltipLeft, y: 0 }}
                to={{ x: tooltipLeft, y: innerHeight }}
                stroke={palette.grey[400]}
                strokeWidth={1}
                strokeDasharray="4,4"
                pointerEvents="none"
              />
              <Line
                from={{ x: 0, y: tooltipTop }}
                to={{ x: innerWidth, y: tooltipTop }}
                stroke={palette.grey[400]}
                strokeWidth={1}
                strokeDasharray="4,4"
                pointerEvents="none"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={5}
                fill={palette.primary.light}
                stroke="white"
                strokeWidth={1}
                pointerEvents="none"
              />
            </g>
          )}

          <Bar
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={hideTooltip}
          />
        </g>
      </svg>
      {tooltipData && (
        <TooltipWithBounds
          {...framerProps}
          variants={fadeInOutAnimation}
          top={tooltipTop - 12 + margin.top}
          left={tooltipLeft + 12 + margin.left}
          style={{
            ...defaultStyles,
            border: "1px solid #F5F7FA",
            paddingInline: "10px",
            paddingBlock: "8px",
            borderRadius: "16px",
          }}
        >
          <Paper elevation={0}>
            {[
              { label: "USDT", value: tooltipData.usdt },
              { label: "DOT", value: tooltipData.dot },
            ].map((item, index) => (
              <Box key={index} sx={{ display: "flex", gap: spacing(1) }}>
                <Typography variant="bodySmall" color="textSecondary">
                  {item.label}
                </Typography>
                <Typography variant="bodySmall">
                  {item.value.toFixed(2)}
                </Typography>
              </Box>
            ))}
          </Paper>
        </TooltipWithBounds>
      )}
    </div>
  );
};

export default AreaChart;
