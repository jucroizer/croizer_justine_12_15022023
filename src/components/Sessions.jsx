import PropTypes from "prop-types";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import "../styles/Graph.css";

/** Session function
 *
 * retrieve data from Profil or ProfilMock
 *
 * @param {object} sessions
 * @returns graph info about the user daily score percentage
 */
function Sessions(props) {
  const sessions = props.sessions.sessions;
  const sessionMoy = sessions.map((session) => session.sessionLength);

  /**
   * data format arrangement
   */
  const data = [
    {
      day: "L",
      session: sessionMoy[0],
    },
    {
      day: "M",
      session: sessionMoy[1],
    },
    {
      day: "M",
      session: sessionMoy[2],
    },
    {
      day: "J",
      session: sessionMoy[3],
    },
    {
      day: "V",
      session: sessionMoy[4],
    },
    {
      day: "S",
      session: sessionMoy[5],
    },
    {
      day: "D",
      session: sessionMoy[6],
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-session">
          <p className="time">{`${payload[0].value + "min"}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="sportsee-session-container"
      style={{
        backgroundColor: "#FF0000",
        borderRadius: "5px",
        height: "230px",
        marginBottom: "2em",
      }}
    >
      <p className="sportsee-session-title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          // width={180}
          // height={180}
          data={data}
          margin={{
            top: 50,
            right: 11,
            left: -50,
            bottom: 20,
            zIndex: 2,
          }}
          style={{ color: "#FFFFF" }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={false}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            stroke="rgba(255, 255, 255, 0.7)"
            tickLine={false}
            style={{ fontSize: "1em" }}
          />
          <YAxis tick={false} axisLine={false} />

          <Tooltip cursor={false} content={<CustomTooltip />} />

          <Line
            type="monotone"
            dot={false}
            dataKey="session"
            stroke="#FFFF"
            strokeWidth={1.2}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.198345)",
              strokeWidth: 7,
              r: 4,
              fill: "white",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Sessions.propTypes = {
  /**
   * user performances sessions
   */
  props: PropTypes.array,
};

export default Sessions;
