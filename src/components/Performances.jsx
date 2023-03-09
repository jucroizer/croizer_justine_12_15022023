import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

function Performances(props) {

  const performance = props.performances;

  const data = [{
    name: "Cardio", 
    value: performance.data[0].value,
    fullMark: 200
  },
  {
    name: "Intensité",
    value: performance.data[1].value,
    fullMark: 200
  },
  {
    name: "Vitesse",
    value: performance.data[2].value,
    fullMark: 200
  },
  {
    name: "Force",
    value: performance.data[3].value,
    fullMark: 200
  },
  {
    name: "Endurance",
    value: performance.data[4].value,
    fullMark: 200
  },
  {
    name: "Energie",
    value: performance.data[5].value,
    fullMark: 200
  }];


  
  return (
    <RadarChart
      outerRadius={90}
      width={730}
      height={250}
      data={data}
    >
      <PolarGrid gridType="polygon" radialLines={false} />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis domain={[0, "fullMark"]} tick={false} axisLine={false} />
      <Radar name="false" dataKey="value" fill="#8884d8" fillOpacity={0.6}/>
      {/* <Legend /> */}
    </RadarChart>
  );
}

export default Performances;



//   const data = performance.map((data) => newTab.push(data.kind));

//   console.log(data)
    
  
  

//     for(let i = 0; i < data.lenght ; i++){
//         const elem = {
//             name : performance.kind[i+1],
//             value : performance.data[i].value,
//             fullMark : 200
//         }

//         console.log(elem)
//         newTab.push(elem)
//     }
//     console.log(newTab)


//   const performanceData = props.performances.data;
//   console.log("performance data", performanceData);

//   const data = performanceData.value;
//   console.log(data)

//   const kind = performance.kind;
//   console.log("kind",kind[1]);

//   const kindData = performanceData.kind;
//   console.log(kindData)