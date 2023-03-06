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
//   console.log(sessionMoy);
  // console.log(props.sessions.map((session) => session.sessionLength))

  return (
    <LineChart
      width={258}
      height={263}
      data={sessions}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        data={sessions.map((session) => session.sessionLength)}
        dataKey="sessionLength"
        stroke="#8884d8"
      />
    </LineChart>
  );
}

export default Sessions;
