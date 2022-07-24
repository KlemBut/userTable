import { useEffect, useState } from "react"

const Table = ({getTrigger}) => {
    const[getData, setData] = useState({})
    useEffect(() => {
        fetch('http://localhost:4001/getUser')
        .then(r => r.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [getTrigger])
    return (
        <div className="tableWrap">
        {getData.userArr && getData.userArr.map((x, i) => {
            return <div key={i} style={{display:"flex", justifyContent:"space-between", backgroundColor: x.gender.toLowerCase() === "male"? "#6298f0": "#e47bed"}} className="itemWrap" >
                <img src={x.pic} alt="" style={{width: "80px"}}/>
                <h5>{x.name}</h5>
                <h5>{x.gender}</h5>
                <h5>{x.created}</h5>
            </div>
        })}
        </div>
    )
}

export default Table