import { Link } from "react-router-dom";
import TimePickers from "./TimePickers";
import { useState } from "react";


const TimeDate = () => {
    let time = new Date().toLocaleTimeString();
    const [cdate,setCdate] = useState(time);
    
    const Updatedate = ()=>{
        let date = new Date().toLocaleDateString();
        setCdate(date)
    }
    setInterval(Updatedate)
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Your current date and time here</h1>
            <div className="text-6xl mt-5 font-bold">
            <TimePickers></TimePickers>
            </div>
            <div className="text-6xl mt-5 font-bold">
                {cdate}
            </div>
            
            <Link to={"/"}><button className="btn mt-5  btn-outline btn-success">GO TO HOME</button></Link>
          </div>
        </div>
      </div>
    );
};

export default TimeDate;