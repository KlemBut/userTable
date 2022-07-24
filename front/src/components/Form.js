import {useRef} from 'react'
const Form = ({getTrigger, setTrigger}) => {
    const picRef = useRef ()
    const nameRef = useRef ()
    const genderRef = useRef ()
    
    function postUser () {
        const user = {
            pic: picRef.current.value,
            name: nameRef.current.value,
            gender: genderRef.current.value
        }
        const options ={
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch('http://localhost:4001/user', options)
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }
        )
        setTrigger(getTrigger +1)
    }

    return (
        <div style={{margin: "1rem"}}>
            <input type="text" ref={picRef} />
            <input type="text" ref={nameRef} />
            <input type="text" ref={genderRef} />
            <button onClick={postUser}>Add</button>
        </div>
    )
}

export default Form