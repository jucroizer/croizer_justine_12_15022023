import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
} from "recharts";
import "../styles/Graph.css";

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

  const mouseEnterHandler = (key) => {
    console.log("mouseEnterHandler: key: " + key);
  };
  

  return (
    <div
      className="sportsee-session-container"
      style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
    >
      <p className="sportsee-session-title">Durée moyenne des sessions</p>
      <LineChart
        width={280}
        height={250}
        data={data}
        margin={{ 
          top: 50, 
          right: 11, 
          left: -50, 
          bottom: 10, 
          zIndex: 2 
        }}
        style={{color: "#FFFFF"}}
      >
        <CartesianGrid
          vertical={false}
          horizontal={false}
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="day"
          axisLine={false}
          axisTickLine={false}
          tickLine={false}
          className="sportsee-session-day"
          style={{ color: "#FFFFFF" }}
        />
        <YAxis tick={false} axisLine={false} />

        {/*  aide custom cursor : https://github.com/recharts/recharts/issues/1816 */}
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line type="monotone" dot={false} dataKey="session" stroke="#FFFF" activeDot={{  r: 4, onMouseEnter: () => mouseEnterHandler("ABC") }} />
      </LineChart>
    </div>
  );
}

export default Sessions;
