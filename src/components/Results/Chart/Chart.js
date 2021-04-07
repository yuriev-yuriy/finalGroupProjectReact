import React from 'react';
import { Pie } from 'react-chartjs-2';
import s from './Chart.module.css';

const getChartData = (correct, incorrect) => {
  const data = {
    labels: [`${correct}% Right`, `${incorrect}% Wrong`],
    datasets: [
      {
        data: [correct, incorrect],
        backgroundColor: ['#FF6B01', '#D7D7D7'],
        hoverBackgroundColor: ['#FF6B08', '#D6D6D6'],
        borderWidth: 0,
      },
    ],
  };
  return data;
};
const options = {
  legend: {
    display: true,
  },
  rotation: 0.2 * Math.PI - (25 / 180) * Math.PI,
  // maintainAspectRatio: false,
  // responsive: true,
  tooltips: {
    mode: 'point',
    callbacks: {
      label: (tooltipItem, data) => {
        let label = data.labels[tooltipItem.index] || '';
        return `${label}`;
      },
    },
  },
};
const ProgressBar = ({ correctAnswers = 10, allAnswers = 12 }) => {
  const chartCorrect = Math.ceil((correctAnswers * 100) / allAnswers);
  const chartInCorrect = 100 - chartCorrect;
  // const chartInCorrect = allAnswers - correctAnswers;
  return (
    <div>
      <div className={s.container}>
        <Pie
          data={() => getChartData(chartCorrect, chartInCorrect)}
          options={options}
          className={s.chart}
        />
      </div>
    </div>
  );
};
// ProgressBar.defaultProps = {
//   correctAnswers: 11,
// };
export default ProgressBar;
// import { Bar } from 'react-chartjs-2';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
//

// const BarDash = () => {
//     return (<div>
//         hello
//         <Doughnut
//             data={{
//                 labels:['Blue','Yellow']
//             }}

//             type= 'doughnut'

//             />
//     </div>)
// }
// export default BarDash;
