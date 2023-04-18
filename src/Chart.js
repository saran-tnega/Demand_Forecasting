// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
// import data from './dta';
// // const data  = "./dta.js"
// const Chart = () => {
//   return (
//     <LineChart width={1800} height={900} data={data}>
//       <XAxis DEFAULT= {60} dataKey="datetime"/>
//       <YAxis />
//       <Tooltip/>
//       <Line  type="monotone" dataKey="demand" stroke="#8884d8" />
//     </LineChart>
//   );
// };

// export default Chart;
import React, { useState,useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis,Legend, Tooltip,Brush,CartesianGrid,ResponsiveContainer } from 'recharts';

import data from './dta';

const Chart = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [filteredData2, setFilteredData2] = useState(data);

  const handleFilter = (filterKey, filterValue) => {
    // filter the data based on the selected filter
    const filtered = data.filter(item => item[filterKey] === filterValue);
    setFilteredData(filtered);
  };
  // Get the current date and time
  const now = new Date();

// Get the index of the data point closest to the current date
// const index = data.findIndex(item => new Date(item.datetime) >= now);
// const index = data.findIndex(item => new Date(item.datetime) >= now.getTime() + 1.5 * 60 * 60 * 1000);
const index = data.findIndex(item => new Date(item.datetime) >= now.getTime() + 1.3 * 60 * 60 * 1000);

// Set the start and end index of the brush to show data from the current date to 7 days ago
const startIndex = Math.max(index - 7, 0);
const endIndex = Math.min(index, data.length - 1);



//2nd approach to display next demand automatically USING USEFFECT()
// useEffect(() => {
//   const timerId = setInterval(() => {
//   // Get the current date and time
//   const now = new Date();

// // Get the index of the data point closest to the current date
// const index = data.findIndex(item => new Date(item.datetime) >= now);

// // Set the start and end index of the brush to show data from the current date to 7 days ago
// const startIndex = Math.max(index - 7, 0);
// const endIndex = Math.min(index, data.length - 1);

//     // Update the filtered data
//     setFilteredData2(data.slice(startIndex, endIndex + 1));
//   }, 1000 * 60); // Update the brush every minute

//   return () => clearInterval(timerId);
// }, []);

// // Set the initial brush position to show data from 7 days ago to the current date
// const startIndex = Math.max(data.length - 7 * 24 * 4, 0);
// const endIndex = data.length - 1;
  return (
    <>
  <center><h1>TN-Electricity Demand Forecasting 23-24 (MAR)</h1></center>
      <LineChart width={1800} height={500} data={filteredData}
       margin={{
         top: 25,
         right: 30,
         left: 20,
         bottom: 5,
        }}
      >
        <Legend />
              <Brush dataKey="datetime" height={30} stroke="green" 

                // endIndex={1642}
                startIndex={878}
                endIndex={1336}
         /> 
        {/* <XAxis dataKey="datetime"/> */}
        <XAxis
      dataKey="datetime"
      domain={[
        'auto',
        'auto'
      ]}
      scale="datetime"
      // type="number"
    />
    <CartesianGrid strokeDasharray="3 3" />
      {/* <CartesianGrid
          horizontalFill={[]}
          horizontalPoints={[]}
          strokeDasharray="3 3"
          verticalFill={[]}
          verticalPoints={[]}
        /> */}
        <YAxis
         />
        <Tooltip/>
        {/* <Brush */}
        <Line type="monotone" dataKey="demand" stroke="green"  />
      </LineChart>
      <br/>
      <center><h1>TN-Electricity Demand Forecasting 23-24 (MAR) by <b>90minutes</b>👇</h1></center>
      <LineChart width={1800} height={500} data={filteredData2}
       margin={{
         top: 55,
         right: 30,
         left: 20,
         bottom: 5,
        }}
      >
        
        <Legend />
              <Brush         
          dataKey="datetime"
          height={30}
          stroke="green"
          startIndex={startIndex}
          endIndex={endIndex}
         /> 
        {/* <XAxis dataKey="datetime"/> */}
        <XAxis
      dataKey="datetime"
      domain={[
        'auto',
        'auto'
      ]}
      scale="datetime"
      // type="number"
    />
    <CartesianGrid strokeDasharray="3 3" />
      {/* <CartesianGrid
          horizontalFill={[]}
          horizontalPoints={[]}
          strokeDasharray="3 3"
          verticalFill={[]}
          verticalPoints={[]}
        /> */}
        <YAxis
         />
        <Tooltip/>
        {/* <Brush */}
        <Line type="monotone" dataKey="demand" stroke="green"  />
      </LineChart>      
      </>
  );
};

export default Chart;
