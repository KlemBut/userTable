import { useState, useEffect } from "react";

const Bar = ({getTrigger}) => {
    const[getData, setData] = useState(0)
    useEffect(() => {
        fetch('http://localhost:4001/getUser')
        .then(r => r.json())
        .then(data => {
            console.log(data);
            setData(data.userArr.length)
        })
    }, [getTrigger])
  return (
    <div className="barWrap">
      <span>{getData}/10</span>
      <div style={{width: "50%", height: "30px", backgroundColor:"#e55757", display:"flex"}}>
        <div style={{width: `${getData*10}%`, height:"30px", backgroundColor:"#3c763c"}}></div>
      </div>
    </div>
  );
};

export default Bar;
