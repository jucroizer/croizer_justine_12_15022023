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
      <p className="score">Score</p>
      <div className="infoScore">
        <p id="scoreGras">{score}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>

      
        <RadialBarChart
          startAngle={220}
          endAngle={-35}
          width={250}
          height={100}
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={25}
          data={data}
          isAnimationActive={false}
        >
          <RadialBar
            minAngle={15}
            background={false}
            dataKey="todayScore"
            cornerRadius={5}
          />
        </RadialBarChart>
      
    </div>
  );
}

export default Score;

