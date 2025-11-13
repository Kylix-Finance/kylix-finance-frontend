// import { Group } from "@visx/group";
// import { scaleBand, scaleLinear } from "@visx/scale";
// import { AxisBottom } from "@visx/axis";
// import { useTooltip, TooltipWithBounds, defaultStyles } from "@visx/tooltip";
// import { localPoint } from "@visx/event";
// import { Box, Paper, Typography, useTheme } from "@mui/material";
// import { getShortMonth } from "~/utils/date";
// import { useMemo, useState } from "react";
// import { chartColors } from "node_modules/@repo/ui/src/styles/theme/colors";

// export interface DataPoint {
//   date: Date;
//   borrow: number;
//   supply: number;
// }

// interface Props {
//   width: number;
//   height?: number;
//   dataset: DataPoint[];
// }

// const StackedBarChart = ({ width, height = 400, dataset }: Props) => {
//   const { spacing } = useTheme();
//   const margin = { top: 40, right: 40, bottom: 40, left: 40 };
//   const innerWidth = width - margin.left - margin.right;
//   const innerHeight = height - margin.top - margin.bottom;

//   const xScale = useMemo(() => {
//     const dates = dataset.map((d) => d.date);
//     return scaleBand<Date>({
//       domain: dates,
//       range: [0, innerWidth],
//       padding: 0.2,
//     });
//   }, [innerWidth, dataset]);

//   const yScale = useMemo(() => {
//     const totalValues = dataset.map((d) => d.borrow + d.supply);
//     const maxTotal =
//       totalValues.length > 0 ? Math.max(...totalValues) * 1.1 : 1;
//     return scaleLinear({
//       range: [innerHeight, 0],
//       domain: [0, maxTotal],
//       nice: true,
//     });
//   }, [innerHeight, dataset]);

//   const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

//   const { tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip } =
//     useTooltip<DataPoint>();

//   const handleMouseEnter = (
//     event: React.MouseEvent<SVGGElement>,
//     dataPoint: DataPoint
//   ) => {
//     const point = localPoint(event);
//     if (point) {
//       const totalValue = dataPoint.borrow + dataPoint.supply;
//       setHoveredDate(dataPoint.date);
//       showTooltip({
//         tooltipData: dataPoint,
//         tooltipLeft: margin.left + xScale(dataPoint.date)!,
//         tooltipTop: margin.top + yScale(totalValue) - 20,
//       });
//     }
//   };

//   const handleMouseLeave = () => {
//     setHoveredDate(null);
//     hideTooltip();
//   };

//   const borrowColor = chartColors.borrow;
//   const supplyColor = chartColors.supply;

//   return (
//     <div>
//       <svg width={width} height={height}>
//         <defs>
//           <linearGradient id="borrowGradient" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor={borrowColor} stopOpacity="0.8" />
//             <stop offset="100%" stopColor={borrowColor} stopOpacity="0.5" />
//           </linearGradient>

//           <linearGradient id="supplyGradient" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor={supplyColor} stopOpacity="0.8" />
//             <stop offset="100%" stopColor={supplyColor} stopOpacity="0.5" />
//           </linearGradient>
//         </defs>

//         <g transform={`translate(${margin.left}, ${margin.top})`}>
//           {dataset.map((dataPoint, index) => {
//             const borrowValue = dataPoint.borrow;
//             const supplyValue = dataPoint.supply;
//             const totalValue = borrowValue + supplyValue;
//             const yBorrow = yScale(borrowValue);

//             return (
//               <Group
//                 key={index}
//                 transform={`translate(${xScale(dataPoint.date)}, 0)`}
//                 opacity={
//                   !hoveredDate ? 1 : hoveredDate === dataPoint.date ? 1 : 0.8
//                 }
//                 style={{ transition: "opacity 0.3s ease" }}
//                 onMouseEnter={(event) => handleMouseEnter(event, dataPoint)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <rect
//                   x={0}
//                   y={yScale(totalValue)}
//                   width={xScale.bandwidth()}
//                   height={yScale(borrowValue) - yScale(totalValue)}
//                   fill="url(#supplyGradient)"
//                 />
//                 <rect
//                   id="supplyHeading"
//                   x={0}
//                   y={yScale(totalValue)}
//                   width={xScale.bandwidth()}
//                   height={2}
//                   fill={supplyColor}
//                 />
//                 <rect
//                   x={0}
//                   y={yBorrow}
//                   width={xScale.bandwidth()}
//                   fill="url(#borrowGradient)"
//                   height={yScale(supplyValue) - yScale(totalValue)}
//                 />
//                 <rect
//                   x={0}
//                   y={yBorrow}
//                   width={xScale.bandwidth()}
//                   height={2}
//                   fill={borrowColor}
//                 />
//               </Group>
//             );
//           })}

//           <AxisBottom
//             scale={xScale}
//             top={innerHeight}
//             stroke="#ddd"
//             tickStroke="transparent"
//             tickFormat={getShortMonth}
//             tickLabelProps={() => ({
//               fill: "#666",
//               fontSize: 10,
//               textAnchor: "middle",
//             })}
//           />
//         </g>
//       </svg>

//       {tooltipData && (
//         <TooltipWithBounds
//           top={tooltipTop}
//           left={tooltipLeft}
//           style={{
//             ...defaultStyles,
//             border: "1px solid #F5F7FA",
//             paddingInline: "10px",
//             paddingBlock: "8px",
//             borderRadius: "16px",
//           }}
//         >
//           <Paper elevation={0}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: spacing("1"),
//               }}
//             >
//               <Typography variant="bodySmall" color="textSecondary">
//                 Date: {tooltipData.date.toLocaleDateString()}
//               </Typography>
//               <Typography variant="bodySmall" color="textSecondary">
//                 Borrow: {tooltipData.borrow.toFixed(2)}
//               </Typography>
//               <Typography variant="bodySmall" color="textSecondary">
//                 Supply: {tooltipData.supply.toFixed(2)}
//               </Typography>
//             </Box>
//           </Paper>
//         </TooltipWithBounds>
//       )}
//     </div>
//   );
// };
// export default StackedBarChart;
