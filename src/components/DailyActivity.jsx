import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DailyActivity(props) {
  const sessions = props.activity.sessions;

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


  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart width={750} height={250} data={data} barSize={7}>
        <CartesianGrid vertical={false} strokeDasharray="1" />
        <XAxis dataKey="day" axisLine={false} tickLine={false}/>

        <YAxis
          yAxisId="right"
          axisLine={false}
          orientation="right"
          domain={["dataMin - 10", "dataMax + 4"]}
          tickCount={4}
          dataKey="poids"
          tickLine={false}
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

        <Tooltip />
        <Legend />

        <Bar
          yAxisId="right"
          minPointSize={5}
          radius={[20, 20, 0, 0]}
          name="Poids (kg)"
          dataKey="poids"
          fill="#282D30"
        />
        <Bar
          yAxisId="left"
          minPointSize={5}
          radius={[20, 20, 0, 0]}
          name="Calories Brûlées (kCal)"
          dataKey="calories"
          fill="#E60000"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DailyActivity;
