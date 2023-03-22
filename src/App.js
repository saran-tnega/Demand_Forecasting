import {React,useEffect} from 'react';
import Chart from './Chart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AreaCharts from './responsivechart';
function App() {
      useEffect(() => {
        const interval = setInterval(() => {
          window.location.reload();
        }, 60000);
      
        return () => clearInterval(interval);
      }, []);
      return (
        // <Router>
    <div className="App">
       {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch> */}
      <Chart />
      {/* <AreaCharts /> */}
    </div>
    // </Router>
  );
}

export default App;