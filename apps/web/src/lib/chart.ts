// customVerticalCrosshairPlugin.ts
import { Chart, Plugin } from "chart.js";

type CrosshairPluginOptions = {
  lineColor?: string;
  lineWidth?: number;
  datasetIndex?: number;
  dataIndex?: number;
  text?: string; // New optional property for the text
  textColor?: string; // Optional property for text color
  fontSize?: number; // Optional property for font size
  fontFamily?: string; // Optional property for font family
};

export const crosshairPlugin: Plugin = {
  id: "crosshair",
  // Plugin state to store mouse coordinates and visibility
  afterInit: (chart: Chart, args, options: CrosshairPluginOptions) => {
    const canvas = chart.canvas as HTMLCanvasElement;
    const pluginState = ((chart as any).crosshair = {
      x: null,
      y: null,
      visible: false,
      onMouseMove: null,
      onMouseOut: null,
    });

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      //@ts-expect-error: type is not correct
      pluginState.x = event.clientX - rect.left;
      //@ts-expect-error: type is not correct
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

    // Store the handlers to remove them later
    //@ts-expect-error: type is not correct

    pluginState.onMouseMove = onMouseMove;
    //@ts-expect-error: type is not correct

    pluginState.onMouseOut = onMouseOut;
  },

  beforeDestroy: (chart: Chart) => {
    const canvas = chart.canvas as HTMLCanvasElement;
    const pluginState = (chart as any).crosshair;
    if (pluginState) {
      canvas.removeEventListener("mousemove", pluginState.onMouseMove);
      canvas.removeEventListener("mouseout", pluginState.onMouseOut);
      delete (chart as any).crosshair;
    }
  },

  afterDraw: (chart: Chart, args, options: CrosshairPluginOptions) => {
    const {
      ctx,
      chartArea: { top, bottom },
      height,
    } = chart;

    if (!ctx) return;

    const pluginState = (chart as any).crosshair;

    // Retrieve customization options with defaults
    const lineColor = options.lineColor ?? "rgba(0,0,0,0.5)";
    const lineWidth = options.lineWidth ?? 1;
    const textColor = options.textColor ?? "black";
    const fontSize = options.fontSize ?? 12;
    const fontFamily = options.fontFamily ?? "Arial";

    let x: number | null = null;
    let displayText: string = options.text ?? "";

    let dataIndex = 0;

    if (pluginState && pluginState.visible) {
      // **Hover State:** Use mouse position
      x = pluginState.x;

      const activeElements = chart.getActiveElements();

      if (activeElements.length > 0) {
        const activeElement = activeElements[0];
        //@ts-expect-error: type is not correct
        dataIndex = activeElement.index;

        displayText = `Utilization ${dataIndex}%`;
      }
    } else {
      // **Non-Hover State:** Use fixed dataset and data index
      const datasetIndex = options.datasetIndex ?? 0;
      dataIndex = options.dataIndex ?? 0;

      const meta = chart.getDatasetMeta(datasetIndex);
      const point = meta.data[dataIndex];

      displayText = `Utilization ${dataIndex}%`;

      if (point) {
        x = point.x;
      }
    }

    if (x !== null) {
      ctx.save();

      // Draw vertical line
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      if (displayText) {
        ctx.fillStyle = textColor;
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";

        let textX = x;
        if (dataIndex < 10) {
          textX += 45;
        } else if (dataIndex > 90) {
          textX -= 45;
        }

        const textY = bottom + 12;

        const canvasHeight = height;
        const adjustedTextY = Math.min(textY, canvasHeight - fontSize - 5);

        ctx.fillText(displayText, textX, adjustedTextY);
      }

      ctx.restore();
    }
  },
};
