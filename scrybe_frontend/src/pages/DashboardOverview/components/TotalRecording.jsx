import React from "react";
import { useState, useEffect } from "react";
// import { totalRecordingData } from "../Data";
import { useMockAuthAndTotalRecording } from "../hooks";
import { Bar } from "react-chartjs-2";
import styles from "../DashboardOverview.module.scss";
import toneWave from "../assets/tone_wave.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement);

const TotalRecording = () => {
  const totalRecordingData = useMockAuthAndTotalRecording();

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [selectedTotalRecordings, setSelectedTotalRecordings] = useState([]);

  useEffect(() => {
    setChartData({
      labels: selectedTotalRecordings.map((data) => data.time),
      datasets: [
        {
          label: "",
          data: selectedTotalRecordings.map((data) => data.totalRecordings),
          backgroundColor: ["#B0CAD9", "#005584", "#548DAD", "#004D78"],
          maxBarThickness: 10,
          borderSkipped: "start",
        },
      ],
    });
    setChartOptions({
      responsive: false,
      spacing: 10,
      borderSkipped: "bottom",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    });
  }, [selectedTotalRecordings]);

  useEffect(() => {
    if (totalRecordingData) {
      setSelectedTotalRecordings(totalRecordingData.week);
    } else {
      setSelectedTotalRecordings([]);
    }
  }, []);

  function recordingsTimeStampFunc(e) {
    setSelectedTotalRecordings(totalRecordingData[e.target.value]);
  }
  return (
    <div className={styles.recordings}>
      <div className={styles.recordings__heading}>
        <h1>
          <img src={toneWave} alt="" /> Total Recordings
        </h1>
        <select
          className={styles.dropdown}
          id="timeStamp"
          onChange={recordingsTimeStampFunc}
        >
          <option value="week">This week</option>
          <option value="month">This month</option>
        </select>
      </div>

      {/* <h2 className={styles.thismonth}>
      This month <img src={chevron} alt="" />
    </h2> */}
      {selectedTotalRecordings.length > 0 ? (
        <div className={styles.recordings__chart}>
          <div>
            <h1 className={styles.totalNumber}>9436</h1>
            <Bar options={chartOptions} data={chartData} />
          </div>
        </div>
      ) : (
        <div className={styles.empty_state}>
          <p>An overview of your teams sentiment analysis report shows here.</p>
        </div>
      )}
    </div>
  );
};

export default TotalRecording;
