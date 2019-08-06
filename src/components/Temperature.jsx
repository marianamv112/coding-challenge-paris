import React, {useState} from 'react'

export default function Temperature() {
    const [temperature, setTemperature] = useState(0)
    
    function handleTemperature (e) {
        setTemperature(e.target.value)
    }

    return (
        <div className="containerPage">
            <h1>Temperature</h1>
            <form>
            <div className="form-group">
             <input type="number" className="form-control" id="exampleInput" placeholder="Temperature in ºC" onChange={handleTemperature}/>
            </div>
        </form>
        <div>
            { (temperature > 0 && temperature <= 10 && <p className={"cold"} >It's cold ❄️</p>) || 
             (temperature > 10 && temperature < 30 && <p className={"nice"}>It's nice 🌼</p>) ||
             (temperature >= 30 && <p className={"warm"}> It's warm ☀️</p>)
            }
        </div>
        </div>
    );
}