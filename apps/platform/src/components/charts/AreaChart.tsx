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
const getDate = (d: DataPoint) => d.date;
const getValue = (d: DataPoint) => d.usdt;
const bisectDate = bisector<DataPoint, Date>((d) => d.date).left;

const generateData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const now = new Date();

  for (let i = 90; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);

    const usdt = 10 + Math.random() * 40 + Math.sin(i / 5) * 10;
    const dot = 50 + Math.random() * 40 + Math.sin(i / 5) * 10;

    data.push({ date, usdt, dot });
  }

  return data;
};
interface Props {
  width?: number;
  height?: number;
}
const AreaChart = ({ height = 400, width = 800 }: Props) => {
  const data = useMemo(() => generateData(), []);
  const { spacing, palette } = useTheme();
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = useMemo(
    () =>
      scaleTime({
        range: [0, innerWidth],
        domain: [
          new Date(Math.min(...data.map((d) => getDate(d).getTime()))),
          new Date(Math.max(...data.map((d) => getDate(d).getTime()))),
        ],
      }),
    [innerWidth, data]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight, 0],
        domain: [0, Math.max(...data.map(getValue)) * 1.1],
        nice: true,
      }),
    [innerHeight, data]
  );

  const {
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
    showTooltip,
    hideTooltip,
  } = useTooltip<DataPoint>();

  const handleTooltip = (
    event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
  ) => {
    const { x } = localPoint(event) || { x: 0 };
    const x0 = xScale.invert(x - margin.left);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    if (!d0 || !d1) return;
    const d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(d.date),
      tooltipTop: yScale(d.usdt),
    });
  };

  const uniqueMonths = useMemo(() => {
    const months = data.map((d) => ({
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
  }, [data]);

  return (
    <div>
      <svg width={width} height={height}>
        <defs>
          <LinearGradient
            id="area-gradient"
            from={palette.primary.light}
            to={palette.primary.light}
            toOpacity={0.1}
          />
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
          <AreaClosed
            data={data}
            x={(d) => xScale(getDate(d))}
            y={(d) => yScale(getValue(d))}
            yScale={yScale}
            curve={curveMonotoneX}
            fill="url(#area-gradient)"
            stroke={palette.primary.light}
            strokeWidth={1}
          />

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
              <Box
                key={index}
                className="flex items-center"
                sx={{
                  gap: spacing("1"),
                }}
              >
                <Typography variant="bodySmall" color="textSecondary">
                  {item.label}
                </Typography>{" "}
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
