import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip
} from "recharts";

import "../styles/Graph.css";

/** DailyActivity function
 *
 * retrieve data from Profil or ProfilMock
 *
 * @param {object} sessions
 * @returns card info about the user activity sessions day by day, kilogram and calories burned
*/
function DailyActivity(props) {
  const sessions = props.activity.sessions;

  /**
   * data format arrangement
   */
  const data = [
    {
      day: 1,
      calories: sessions[0].calories,
      poids: sessions[0].kilogram,
    },
    {
      day: 2,
      calories: sessions[1].calories,
      poids: sessions[1].kilogram,
    },
    {
      day: 3,
      calories: sessions[2].calories,
      poids: sessions[2].kilogram,
    },
    {
      day: 4,
      calories: sessions[3].calories,
      poids: sessions[3].kilogram,
    },
    {
      day: 5,
      calories: sessions[4].calories,
      poids: sessions[4].kilogram,
    },
    {
      day: 6,
      calories: sessions[5].calories,
      poids: sessions[5].kilogram,
    },
    {
      day: 7,
      calories: sessions[6].calories,
      poids: sessions[6].kilogram,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-activity">
          <p className="poids">{`${payload[0].value + "kg"}`}</p>
          <p className="calories">{`${payload[1].value + "Kcal"}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="sportsee-activity-container"
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "5px",
        marginBottom: "2em",
      }}
    >
      <div className="sportsee-activity-meta">
        <p className="sportsee-activity-title">Activité quotidienne</p>

        <div  className="sportsee-activity-legend">
            <li className="sportsee-list-poids"><span>Poids (kg)</span></li>
            <li className="sportsee-list-calories"><span>Calories brûlées (kCal)</span></li>
        </div>
      </div>

      <BarChart
        width={900}
        height={170}
        data={data}
        barSize={7}
        style={{ marginLeft: "-1.5em" }}
      >
        <CartesianGrid vertical={false} strokeDasharray="1" />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          style={{ color: "#9B9EAC", fontSize: "0.9rem" }}
        />

        <YAxis
          className="sportsee-activity-axis"
          yAxisId="right"
          axisLine={false}
          orientation="right"
          domain={["dataMin - 10", "dataMax + 4"]}
          tickCount={4}
          dataKey="poids"
          tickLine={false}
          style={{ color: "#9B9EAC", fontSize: "0.9rem" }}
        />
        <YAxis
          yAxisId="left"
          tick={false}
          axisLine={false}
          orientation="left"
          domain={["dataMin - 50", "dataMax + 20"]}
          tickCount={4}
          dataKey="calories"
          tickLine={false}
        />

        <Tooltip content={<CustomTooltip />} />

        <Bar
          yAxisId="right"
          minPointSize={5}
          radius={[20, 20, 0, 0]}
          dataKey="poids"
          fill="#282D30"
        />
        <Bar
          yAxisId="left"
          minPointSize={5}
          radius={[20, 20, 0, 0]}
          dataKey="calories"
          fill="#E60000"
        />
      </BarChart>
    </div>
  );
}

export default DailyActivity;
