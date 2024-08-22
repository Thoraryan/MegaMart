$(document).ready(() => {
    const data = [
        { x: 0, y: 20 }, { x: 6.1, y: 18.8 }, { x: 25.2, y: 12 },
        { x: 37.8, y: 12.5 }, { x: 63.4, y: 25.3 }, { x: 75.7, y: 23.2 },
        { x: 100.9, y: 1 }, { x: 113.5, y: 0 }, { x: 138.8, y: 16.7 },
        { x: 151.3, y: 17.5 }, { x: 177.2, y: 7.8 }, { x: 189.2, y: 5 },
        { x: 220.8, y: 0.8 }, { x: 227, y: 0 }
    ];

    function createLineChart(containerId, lineColor, areaColor) {
        const $container = $(`#${containerId}`);
        const svgWidth = $container.width();
        const svgHeight = 28;
        const margin = { top: 5, right: 5, bottom: 5, left: 5 };
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;

        const svg = d3.select(`#${containerId}`)
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([height, 0]);

        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y));

        const area = d3.area()
            .x(d => xScale(d.x))
            .y0(height)
            .y1(d => yScale(d.y));

        svg.append("path")
            .datum(data)
            .attr("fill", `url(#gradient-${containerId})`)
            .attr("d", area);

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", lineColor)
            .attr("stroke-width", 3)
            .attr("d", line);

        svg.append("defs")
            .append("linearGradient")
            .attr("id", `gradient-${containerId}`)
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%")
            .selectAll("stop")
            .data([
                { offset: "0%", color: lineColor },
                { offset: "100%", color: areaColor }
            ])
            .enter()
            .append("stop")
            .attr("offset", d => d.offset)
            .attr("stop-color", d => d.color);
    }

    createLineChart("line-chart-1", "rgb(56 26 138)", "rgb(171 152 221 / 43%)");
    createLineChart("line-chart-2", "#ef00fc", "#cda5d1a6");
    createLineChart("line-chart-3", "#9503e8", "#9d46cf80");
    createLineChart("line-chart-4", "#1a83e3", "#1a83e36b");
    createLineChart("line-chart-5", "rgb(56 26 138)", "rgb(171 152 221 / 43%)");
    createLineChart("line-chart-6", "#ef00fc", "#cda5d1a6");
    createLineChart("line-chart-7", "#9503e8", "#9d46cf80");
    createLineChart("line-chart-8", "#1a83e3", "#1a83e36b");
});
