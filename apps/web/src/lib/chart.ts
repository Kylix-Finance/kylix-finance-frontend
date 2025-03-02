import { Chart, Plugin, ChartArea, Point, BubbleDataPoint } from "chart.js";

interface CrosshairPluginOptions {
  lineColor?: string;
  lineWidth?: number;
  datasetIndex?: number;
  dataIndex?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontFamily?: string;
}

interface DataPoint {
  utilization_rate: number;
  [key: string]: any;
}

interface PluginState {
  x: number | null;
  y: number | null;
  visible: boolean;
  onMouseMove: ((event: MouseEvent) => void) | null;
  onMouseOut: (() => void) | null;
}

interface ChartWithCrosshair extends Chart {
  crosshair?: PluginState;
}

type ChartDataPoint =
  | number
  | Point
  | [number, number]
  | BubbleDataPoint
  | DataPoint;

export const crosshairPlugin: Plugin<"line", CrosshairPluginOptions> = {
  id: "crosshair",

  afterInit(chart: ChartWithCrosshair, args, options: CrosshairPluginOptions) {
    const canvas = chart.canvas;
    if (!canvas) return;

    const pluginState: PluginState = {
      x: null,
      y: null,
      visible: false,
      onMouseMove: null,
      onMouseOut: null,
    };

    chart.crosshair = pluginState;

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pluginState.x = event.clientX - rect.left;
      pluginState.y = event.clientY - rect.top;
      pluginState.visible = true;
      chart.draw();
    };

    const onMouseOut = () => {
      pluginState.visible = false;
      chart.draw();
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseout", onMouseOut);

    pluginState.onMouseMove = onMouseMove;
    pluginState.onMouseOut = onMouseOut;
  },

  beforeDestroy(chart: ChartWithCrosshair) {
    const canvas = chart.canvas;
    if (!canvas) return;

    const pluginState = chart.crosshair;
    if (pluginState?.onMouseMove && pluginState?.onMouseOut) {
      canvas.removeEventListener("mousemove", pluginState.onMouseMove);
      canvas.removeEventListener("mouseout", pluginState.onMouseOut);
      delete chart.crosshair;
    }
  },

  afterDraw(chart: ChartWithCrosshair, args, options: CrosshairPluginOptions) {
    const ctx = chart.ctx;
    if (!ctx) return;

    const chartArea: ChartArea = chart.chartArea;
    const { top, bottom } = chartArea;
    const { height } = chart;

    const pluginState = chart.crosshair;

    const lineColor = options.lineColor ?? "rgba(0,0,0,0.5)";
    const lineWidth = options.lineWidth ?? 1;
    const textColor = options.textColor ?? "black";
    const fontSize = options.fontSize ?? 12;
    const fontFamily = options.fontFamily ?? "Arial";

    let x: number | null = null;
    let displayText: string = options.text ?? "";
    let datasetIndex = options.datasetIndex ?? 0;
    let dataIndex = 0;
    let value: number | null = null;

    if (pluginState?.visible) {
      // Hover State: Use mouse position
      x = pluginState.x;

      const activeElements = chart.getActiveElements();
      if (activeElements.length > 0) {
        const activeElement = activeElements[0];
        datasetIndex = activeElement?.datasetIndex ?? datasetIndex;
        dataIndex = activeElement?.index ?? dataIndex;

        // Get the actual value from the dataset
        const dataset = chart.data.datasets[datasetIndex];
        const dataPoint = dataset?.data[dataIndex] as ChartDataPoint;
        if (
          typeof dataPoint === "object" &&
          dataPoint !== null &&
          "utilization_rate" in dataPoint
        ) {
          value = +dataPoint.utilization_rate;
        }
      }
    } else {
      // Non-Hover State: Use fixed dataset and data index
      dataIndex = options.dataIndex ?? 0;

      // Get the actual value from the dataset
      const dataset = chart.data.datasets[datasetIndex];
      const dataPoint = dataset?.data[dataIndex] as ChartDataPoint;
      if (
        typeof dataPoint === "object" &&
        dataPoint !== null &&
        "utilization_rate" in dataPoint
      ) {
        value = dataPoint.utilization_rate;
      }

      const meta = chart.getDatasetMeta(datasetIndex);
      const point = meta.data[dataIndex];

      if (point) {
        x = point.x;
      }
    }

    if (x !== null && value !== null) {
      ctx.save();

      // Draw vertical line
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      // Display the actual value with percentage
      displayText = `Utilization ${(value || 0).toFixed(2)}%`;

      ctx.fillStyle = textColor;
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      let textX = x;
      // Adjust text position based on value instead of dataIndex
      if (value < 10) {
        textX += 45;
      } else if (value > 90) {
        textX -= 45;
      }

      const textY = bottom + 12;
      const adjustedTextY = Math.min(textY, height - fontSize - 5);

      ctx.fillText(displayText, textX, adjustedTextY);

      ctx.restore();
    }
  },
};
