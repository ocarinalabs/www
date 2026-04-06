"use client";

import { useCallback, useEffect, useRef } from "react";

const ASCII_RAMP = " .,:;+*?%#@";

type CharCell = {
  b: number;
  baseOpacity: number;
  char: string;
  charIdx: number;
  g: number;
  r: number;
};

const EMPTY_CELL: CharCell = {
  char: " ",
  charIdx: 0,
  baseOpacity: 0,
  r: 0,
  g: 0,
  b: 0,
};

function sampleCell(
  data: Uint8ClampedArray,
  imgWidth: number,
  sampleX: number,
  sampleY: number
): CharCell {
  const idx = (sampleY * imgWidth + sampleX) * 4;
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];
  const a = data[idx + 3];

  if (a < 30) {
    return EMPTY_CELL;
  }

  const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
  const charIdx = Math.min(
    Math.floor((1 - brightness) * (ASCII_RAMP.length - 1)),
    ASCII_RAMP.length - 1
  );

  return { char: ASCII_RAMP[charIdx], charIdx, baseOpacity: 1, r, g, b };
}

export function DitheredOcarina() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<CharCell[][]>([]);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const dimensionsRef = useRef({ cols: 0, rows: 0, fontSize: 0, charWidth: 0 });

  const buildGrid = useCallback((img: HTMLImageElement) => {
    const offscreen = document.createElement("canvas");
    offscreen.width = img.width;
    offscreen.height = img.height;
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) {
      return;
    }

    offCtx.drawImage(img, 0, 0);
    const imageData = offCtx.getImageData(0, 0, img.width, img.height);
    const { data } = imageData;

    const vw = window.innerWidth;
    let cols = 120;
    if (vw < 768) {
      cols = 60;
    } else if (vw < 1200) {
      cols = 90;
    }
    const cellW = img.width / cols;
    const cellH = cellW * 2;
    const rows = Math.floor(img.height / cellH);

    const fontSize = vw < 768 ? 8 : 10;
    const charWidth = fontSize * 0.6;

    dimensionsRef.current = { cols, rows, fontSize, charWidth };

    const grid: CharCell[][] = [];
    for (let row = 0; row < rows; row++) {
      const line: CharCell[] = [];
      for (let col = 0; col < cols; col++) {
        const sampleX = Math.floor(col * cellW + cellW / 2);
        const sampleY = Math.floor(row * cellH + cellH / 2);

        if (sampleX >= img.width || sampleY >= img.height) {
          line.push(EMPTY_CELL);
          continue;
        }

        line.push(sampleCell(data, img.width, sampleX, sampleY));
      }
      grid.push(line);
    }

    gridRef.current = grid;
    return grid;
  }, []);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const grid = gridRef.current;
    if (grid.length === 0) {
      return;
    }

    const { cols, rows, fontSize, charWidth } = dimensionsRef.current;
    const dpr = window.devicePixelRatio || 1;

    const time = timeRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize * dpr}px "IBM Plex Mono", monospace`;
    ctx.textBaseline = "top";

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cell = grid[row][col];
        if (cell.char === " ") {
          continue;
        }

        const wave = Math.sin(time * 0.6 + row * 0.12 + col * 0.06) * 0.15;
        const wave2 = Math.sin(time * 0.25 + row * 0.2 - col * 0.08) * 0.1;
        const shimmer = Math.sin(time * 2.5 + row * 1.7 + col * 2.3) * 0.06;

        const opacity = Math.max(
          0.1,
          Math.min(1, cell.baseOpacity + wave + wave2 + shimmer)
        );

        ctx.fillStyle = `rgba(${cell.r}, ${cell.g}, ${cell.b}, ${opacity})`;
        ctx.fillText(cell.char, col * charWidth * dpr, row * fontSize * dpr);
      }
    }

    timeRef.current += 0.016;

    if (timeRef.current < 3) {
      animRef.current = requestAnimationFrame(render);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/ocarina.png";

    img.onload = () => {
      buildGrid(img);

      const { cols, rows, fontSize, charWidth } = dimensionsRef.current;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = cols * charWidth * dpr;
      canvas.height = rows * fontSize * dpr;
      canvas.style.width = `${cols * charWidth}px`;
      canvas.style.height = `${rows * fontSize}px`;

      animRef.current = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (img.complete && img.naturalWidth > 0) {
        buildGrid(img);
        const { cols, rows, fontSize, charWidth } = dimensionsRef.current;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = cols * charWidth * dpr;
        canvas.height = rows * fontSize * dpr;
        canvas.style.width = `${cols * charWidth}px`;
        canvas.style.height = `${rows * fontSize}px`;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [buildGrid, render]);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden">
      <div className="flex h-full w-[80%] translate-y-[4%] items-center justify-center opacity-30 sm:w-[60%] sm:opacity-100">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
