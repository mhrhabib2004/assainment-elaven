import { useState } from 'react';
const TimePickers = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);
    
    const Updatetime = ()=>{
        let time = new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(Updatetime,1000)
    return (
        <div>
      {ctime}
    </div>
    );
};

export default TimePickers;