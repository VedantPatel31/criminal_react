import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // required for Chart.js

const PropertyTheftInIndia = () => {
  const [data, setData] = useState(null);
  const [chiSquareResult, setChiSquareResult] = useState(null);
  const [tTestResult, setTTestResult] = useState(null);

  useEffect(() => {
    // fetch('/path/to/CleanedCrimeDataset.xlsx')
    fetch('07_.xlsx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets['07 person arrested'];
        const json = XLSX.utils.sheet_to_json(sheet);
        setData(json);

        // Perform chi-square and t-test (to be done server-side in a real application)
        const maleTotal = json.map(item => item['Male Total']);
        const femaleTotal = json.map(item => item['Female Total']);

        // Chi-Square Test (placeholder)
        const chiSquarePValue = 0.0; // Replace with actual computation
        setChiSquareResult(chiSquarePValue);

        // T-Test (placeholder)
        const tTestPValue = 0.0; // Replace with actual computation
        setTTestResult(tTestPValue);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Prepare data for chart
  const labels = data.map(item => item['STATE/UT']);
  const maleTotals = data.map(item => item['Male Total']);
  const femaleTotals = data.map(item => item['Female Total']);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Male Total',
        data: maleTotals,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Female Total',
        data: femaleTotals,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ color: 'white', backgroundColor: '#1a1a1a', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ color: 'red', textAlign: 'center', marginBottom: '40px' }}>Property Theft in India</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: 'red', marginBottom: '20px' }}>Gender-Based Analysis</h2>
        <p>
          Chi-Square Test p-value: {chiSquareResult}
          <br />
          T-Test p-value: {tTestResult}
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: 'red', marginBottom: '20px' }}>State Comparison Analysis</h2>
        <Bar data={chartData} />
      </section>
      
      <section>
        <h2 style={{ color: 'red', marginBottom: '20px' }}>Trend Analysis Over Time</h2>
        {/* Add time series analysis chart if data includes multiple years */}
      </section>
    </div>
  );
};

export default PropertyTheftInIndia;
