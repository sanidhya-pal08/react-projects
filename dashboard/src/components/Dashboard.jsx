import React from 'react'
import "./Dashboard.css"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage=66;
const data = [
  {
    name: 'March',
    sales: 400,
    pv: 200,
    amt: 2400,
  },
  {
    name: 'April',
  sales: 300,
    pv: 467,
    amt: 2400,
  },
  {
    name: 'May',
    sales: 300,
    pv: 398,
    amt: 2400,
  },
  {
    name: 'June',
    sales: 200,
    pv: 280,
    amt: 2400,
  },
 
];
const margin = {
  top: 30,
  right: 25,
  left: 20,
 
};
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="heading"><h1 className='heading'>Dashboard</h1></div>
      <div className="firstline">
           <div className="graph-box">
           <BarChart width={600} height={220} data={data} responsive margin={margin}>
      <XAxis dataKey="name" stroke="#eaeaea" />
      <YAxis stroke="#eaeaea" />
      <Tooltip labelStyle={{color:"#1b1b1b"}} itemStyle={{color:"#1b1b1b"}}/>
     
      <Bar dataKey="sales" fill="#eaeaea" barSize={30} />
    </BarChart>
    <br />
      <p>SALES</p>
    
    
           </div>
           <div className="textboxone">
            <div className="boxline1">NEW TASKS ASSIGNED</div>
            <div className="boxline2">
              <div className="num-left">47</div>
              <div className="num-right">+8%</div>
            </div>
           </div>
           <div className="textbox2">
            <div className="boxline1">PROJECTS COMPLETED</div>
            <div className="boxline2">
              <div className="num-left">28</div>
              <div className="num-right">-10%</div>
            </div>
           </div>
      </div>
      <div className="secondline">
           <div className="boxone">
            <div className="boxline1">REVENUE THIS MONTH</div>
            <div className="boxline2">
              <div className="num-left">$4330</div>
              <div className="num-right">-29%</div>
            </div>
           </div>
           <div className="boxtwo">
             <CircularProgressbar className='circularbar' 
           value={percentage}
           text={`${percentage}%`}
          
           styles={buildStyles({ 
    pathColor: "#eaeaea",
    textColor: '#eaeaea',
    trailColor: 'black',
    backgroundColor: '#1b1b1b',
  })}

           />
           <br /><br />
           <section> &nbsp; CURRENT PROJECT COMPLETION</section>
           </div>
           <div className="areagraph">
            <AreaChart width={550} height={200} data={data}>
            <XAxis/>
            <YAxis/>
            <Area dataKey="sales" stroke='white'  fill='#f2f2f2' type="monotone"/>
            <Area dataKey="pv" stroke='white' fill='#333333'  type="monotone"/>
            </AreaChart>
           </div>
      </div>
    </div>
  )
}

export default Dashboard
