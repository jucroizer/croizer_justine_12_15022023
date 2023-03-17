import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import "../styles/Graph.css";

function Performances(props) {
  const performance = props.performances;

  const data = [
    {
      name: "Intensité",
      value: performance.data[1].value,
      fullMark: 200,
    },
    {
      name: "Vitesse",
      value: performance.data[2].value,
      fullMark: 200,
    },
    {
      name: "Force",
      value: performance.data[3].value,
      fullMark: 200,
    },
    {
      name: "Endurance",
      value: performance.data[4].value,
      fullMark: 200,
    },
    {
      name: "Energie",
      value: performance.data[5].value,
      fullMark: 200,
    },
    {
      name: "Cardio",
      value: performance.data[0].value,
      fullMark: 200,
    },
  ];

  return (
    <div
      className="sportsee-perf-container"
      style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
    >
      <RadarChart
        className="sportsee-perf-radar"
        outerRadius={80}
        width={300}
        height={300}
        data={data}
        style={{ marginLeft: "-1.2em", marginBottom: "-1em" }}
      >
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="name"
          style={{ color: "#FFFFFF", fontSize: "0.8em" }}
        />
        <PolarRadiusAxis
          domain={[0, "fullMark"]}
          tick={false}
          axisLine={false}
          stroke="#FFFFFF"
        />
        <Radar
          name="false"
          dataKey="value"
          fill="rgba(255, 1, 1, 0.7)"
          fillOpacity={0.8}
        />
      </RadarChart>
    </div>
  );
}

export default Performances;
