import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

function Sessions(props) {
  const sessions = props.sessions.sessions;
  const sessionMoy = sessions.map((session) => session.sessionLength);
 

  const data = [{
    day: "L",
    session: sessionMoy[0]
  },
  {
    day: "M",
    session: sessionMoy[1]
  },
  {
    day: "M",
    session: sessionMoy[2]
  },
  {
    day: "J",
    session: sessionMoy[3]
  },
  {
    day: "V",
    session: sessionMoy[4]
  },
  {
    day: "S",
    session: sessionMoy[5]
  },
  {
    day: "D",
    session: sessionMoy[6]
  }]

  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid />
      <XAxis dataKey="day" tick={false} axisLine={false}/>
      <YAxis tick={false} axisLine={false}/>
      <Tooltip />
      {/* <Legend className="legend"/> */}
      <Line
        type="monotone"
        dataKey="session"
        stroke="#8884d8"
      />
    </LineChart>
  );
}

export default Sessions;
