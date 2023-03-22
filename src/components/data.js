const fs = require('fs');
const csv = require('csv-parser');
const moment = require('moment');
// import chart from  '../data.csv'
const data = [];
// const a = require('../data.csv')
// fs.createReadStream(a)
fs.createReadStream('../data.csv')
  .pipe(csv())
/* A callback function that is called when the data event is emitted. */
  .on('data', (row) => {
    const datetime = moment(row['DATETIME'], 'DD-MM-YYYY HH:mm').toISOString();
    const demand = parseFloat(row['Demand']);
    data.push({ datetime, demand });
  })
  .on('end', () => {
    console.log(data);
    
fs.writeFile('data_fromcons.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('Data saved to file');
});
  });
  // const fs = require('fs');


// module.exports = data;