import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend
} from "recharts";

function DailyActivity(props) {

    const sessions = props.activity.sessions;
  
    let dayInfo = sessions.map((day) => day.day)
    // const onlyDay = dayInfo.getDate();
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    

    // console.log("dayInfo", dayInfo)
    
    // console.log(props.activity.sessions);
  
  return (
    <BarChart width={750} height={250} data={sessions} barSize={7}>
      <CartesianGrid vertical={(false)} strokeDasharray="1"/>
      <XAxis dataKey="day" />
      <YAxis orientation="right" domain={['dataMin', 'dataMax']} tickCount={(4)} dataKey="kilogram"/>
      <Tooltip />
      <Legend />
      <Bar minPointSize={5} radius={[20, 20, 0, 0]} dataKey="kilogram" fill="#282D30" />
      <Bar  minPointSize={5} radius={[20, 20, 0, 0]} dataKey="calories" fill="#E60000" />
    </BarChart>
  );
}

export default DailyActivity;
