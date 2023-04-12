import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
// import "../styles/Score.css";

/** Score function
 *
 * retrieve data from Profil or ProfilMock
 *
 * @param {object} score
 * @returns graph info about the user daily score percentage
 */
function Score(props) {
  let getScore = props.score;
  let score = 0;

  /**
   * percentage converter
   */
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
    <div
      className="sportsee-score-container"
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "5px",
        height: "250px",
      }}
    >
      <p className="sportsee-score-title">Score</p>
      <div className="sportsee-score-infos">
        <p className="sportsee-score-p">
          <span id="scoreGras">{score}%</span> de votre objectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <RadialBarChart
          startAngle={220}
          endAngle={-35}
          // width={170}
          // height={185}
          // cx="44%"
          // cy="38%"
          outerRadius={140}
          barSize={10}
          data={data}
          isAnimationActive={false}
          style={{
            marginTop: "-12em",
          }}

          // width: "50%",
          // height: "50%",
        >
          <RadialBar
            minAngle={5}
            background
            clockWise
            dataKey="todayScore"
            cornerRadius={15}
            style={{ backgroundColor: "#FFFFFF" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  /**
   * user score
   */
  props: PropTypes.number,
};

export default Score;
