import * as React from 'react';
import { useRef, useEffect, useState, FC } from 'react';
import * as d3 from 'd3';

type DataItem = {
  label: string;
  value: number;
};

type Props = {
  data: DataItem[];
  textPadding: number;
  barColor: string;
  fontSize: string; // 10px
  barHeight: number;
  rightTextPadding: number;
};

export const TopDownBarChart: FC<Props> = ({ data, textPadding, rightTextPadding, barColor, barHeight, fontSize }: Props) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // resize observer
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // chart draw
  useEffect(() => {
    if (!svgRef.current || containerWidth === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    const margin = { top: 20, right: 40, bottom: 20, left: 40 };
    const chartHeight = data.length * barHeight;

    svg
      .attr('width', containerWidth)
      .attr('height', chartHeight + margin.top + margin.bottom);

    const maxValue = d3.max(data, d => Math.max(d.value)) || 0;

    const xScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([0, (containerWidth - margin.left - margin.right) - rightTextPadding]);
    const shadowScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([(containerWidth - margin.left - margin.right) - rightTextPadding, 0]);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    data.forEach((d, i) => {
      const y = i * barHeight;
      const width = xScale(d.value);
      const shadowWidth = shadowScale(d.value);

      // 왼쪽 값
      g.append('text')
        .attr('x', 0)
        .attr('y', y + barHeight * 0.5)
        .attr('text-anchor', 'start')
        .attr('fill', '#fff')
        .attr('font-size', fontSize)
        .text(d.label);

      // 그림자 바
      g.append('rect')
        .attr('x', textPadding)
        .attr('y', y+ barHeight * 0.15)
        .attr('width', shadowWidth)
        .attr('height', 10)
        .attr('fill', '#2e1533');

      // 실제 막대
      g.append('rect')
        .attr('x', textPadding + shadowWidth)
        .attr('y', y+ barHeight * 0.15)
        .attr('width', width)
        .attr('height', 10)
        .attr('fill', barColor);

      // 왼쪽 값
      g.append('text')
        .attr('x', textPadding + width + shadowWidth + 20)
        .attr('y', y + barHeight * 0.5)
        .attr('text-anchor', 'end')
        .attr('fill', '#fff')
        .attr('font-size', fontSize)
        .text(d.value.toString().padStart(2, '0'));
    });
  }, [data, containerWidth]);

  return (
    <div ref={wrapperRef} style={{ width: '100%' }}>
      <svg
        ref={svgRef}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          backgroundColor: '#1e0d2f',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};