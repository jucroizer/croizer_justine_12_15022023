import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
} from "recharts";
import "../styles/Score.css";

function Score(props) {
  
  let getScore = props.score
  let score = 0
  //percentage converter
  getScore === 1 ? score = 100 : score = (getScore * 100).toFixed(0)
  const data = [
      {
        todayScore:100,
        fill: "white"
      },
      {
        todayScore: score,
        fill: "#E60000"
      }
  ]
  
  return(
      <div className='radialGraph'>
          <p className='score'>Score</p>
          <div className='infoScore'>
              <p id='scoreGras'>{score}%</p>
              <p>de votre</p>
              <p>objectif</p>
          </div>
      

      <RadialBarChart
        startAngle={220}
        endAngle={-35}
        width={500}
        height={300}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="80%"
        barSize={15}
        data={data}
        isAnimationActive={false}
      >
        <RadialBar minAngle={15} background={false} clockWise dataKey="todayScore" cornerRadius={5} />
      </RadialBarChart>
      </div>  
  )
}

export default Score;

 {/* const data = [
    {
      score: props.score,
    },
  ];
  console.log(data); */}

  {/* return ( */}
    {/* // <ResponsiveContainer width="100%" height="100%"> */}

{/* // <RadialBarChart
//   width={730}
//   height={250}
//   innerRadius="70%"
//   outerRadius="80%"
//   data={data}
//   startAngle={220}
//   endAngle={-35}
// >
//   <RadialBar
//     minAngle={40}
//     label={{ fill: "#666", position: "insideStart" }}
//     background
//     clockWise={true}
//     dataKey="score"
//     cornerRadius={5}
//   />
//   {/* <Legend
//     iconSize={10}
//     width={120}
//     height={140}
//     layout="vertical"
//     verticalAlign="middle"
//     align="right"
//   /> */}
{/* //   <Tooltip /> */}
{/* // </RadialBarChart> */}
