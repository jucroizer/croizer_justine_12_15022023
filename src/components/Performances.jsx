import PropTypes from "prop-types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

import "../styles/Graph.css";

/** Performances function
 *
 * retrieve data from Profil or ProfilMock
 *
 * @param {object} performances
 * @returns graph info about the user performances sessions with value and kind of performance
 */
function Performances(props) {
  const performance = props.performances;

  /**
   * data format arrangement
   */
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
      style={{
        backgroundColor: "#282D30",
        borderRadius: "5px",
        height: "230px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          className="sportsee-perf-radar"
          outerRadius="70%"
          data={data}
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="name"
            style={{ color: "#FFFFFF", fontSize: "0.6em" }}
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
      </ResponsiveContainer>
    </div>
  );
}

Performances.propTypes = {
  /**
   * user performances sessions
   */
  props: PropTypes.array,
};

export default Performances;
