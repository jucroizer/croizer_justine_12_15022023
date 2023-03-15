import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line
} from "recharts";
import "../styles/Graph.css"

function Sessions(props) {
  const sessions = props.sessions.sessions;
  const sessionMoy = sessions.map((session) => session.sessionLength);

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

  return (
    <div
      className="sportsee-session-container"
      style={{ backgroundColor: "#FF0000" , borderRadius: "5px"}}
    >
      <p>Durée moyenne des sessions</p>
        <LineChart
          width={250}
          height={230}
          data={data}
          margin={{ top: 0, right: 0, left: -40, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis dataKey="day" axisLine={false} />
          <YAxis tick={false} axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="session"
            stroke="#FFFF"
          />
        </LineChart>
    </div>
  );
}

export default Sessions;
