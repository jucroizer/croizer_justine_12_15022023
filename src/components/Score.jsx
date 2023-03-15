import {
  RadialBarChart,
  RadialBar
} from "recharts";
import "../styles/Score.css";

function Score(props) {
  let getScore = props.score;
  let score = 0;

  //percentage converter
  getScore === 1 ? (score = 100) : (score = (getScore * 100).toFixed(0));
  const data = [
    {
      todayScore: 100,
      fill: "white",
    },
    {
      todayScore: score,
      fill: "#E60000",
    },
  ];

  return (
    <div className="sportsee-score-container"  style={{backgroundColor:"#FBFBFB", borderRadius: "5px"}}>
      <p className="sportsee-score-title">Score</p>
      <div className="sportsee-score-infos">
        <p className="sportsee-score-p"><span id="scoreGras">{score}%</span> de votre objectif</p>
      </div>
      
        <RadialBarChart
          startAngle={220}
          endAngle={-35}
          width={300}
          height={200}
          cx="44%"
          cy="38%"
          // innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
          isAnimationActive={false}
          style={{marginTop:"-6em", marginLeft:"0em", width:"100%", height:"100%"}}
        >
          <RadialBar
            minAngle={5}
            background
            clockWise
            dataKey="todayScore"
            cornerRadius={15}
            style={{backgroundColor:"#FFFFFF"}}
          />
        </RadialBarChart>
      
    </div>
  );
}

export default Score;

