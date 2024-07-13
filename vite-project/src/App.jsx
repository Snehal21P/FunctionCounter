import React, {useState} from'react'
import './App.css'
function App()
{
    // let name ="React";
    const[name, setName] = useState("React")
    return (
        <>
            <h1>This is {name} function component</h1>
            <button onClick={()=>setName("React JS..")}>Update State</button>
        </>
    )
}
export default App;