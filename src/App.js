import logo from './logo.svg';
// import './App.css';
// import Chart from './Components/Chart/Chart';
// import Chart3 from "./Components/Chart/Chart3";
// import Chart from './Components/d3/Chart';
// import Chart4 from "./Components/D3Example/App";
// import Chart from './Components/D3Example1/Chart';
// import { CreatePlot } from "./Components/Zoom/Line";
import Zoom from './Components/ZoomDate/Zoom';

function App() {
  // let data =  [
  //   { name: '1994', value: 2000 },
  //   { name: '1995', value: 10 },
  //   { name: '1996', value: 50 },
  //   { name: '1997', value: 20 },
  //   { name: '1998', value: 80 },
  //   { name: '1999', value: 30 },
  //   { name: '2000', value: 0 },
  //   { name: '2001', value: 20 },
  //   { name: '2002', value: 100 },
  //   { name: '2003', value: 55 },
  //   { name: '2004', value: 60 },
  //   { name: '2005', value: 80 },
  // ];
  return (<>
     <Zoom />
         {/* <Chart4 data={ data } /> */}
     {/* <Chart /> */}
     {/* {
      CreatePlot()
     } */}  
  </>
   
 
  );
}

export default App;
