import axios from "axios"
import { useState } from "react"

function App(){
    const[deg,setdeg]=useState("232")
    const[city,setcity]=useState("chennai")
    const[des,setdes]=useState("Raining")
    const[enteredvalue,setenteredvalue]=useState("")
    function enteredinput(event){
        console.log(event.target.value)
        setenteredvalue(event.target.value)
    }

   
    function getData(){
        var weather=axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=2a3398aa59c78e488b91ab8088aacc9f`)
        weather.then(function(dalta){
            console.log(dalta.data.main.temp)
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdes(dalta.data.weather[0].main)
        })
    }
    
return(<div className="flex flex-row justify-center h-[100vh] items-center ">
          <div  style={{backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"}} className="p-2 rounded-md shadow">
           <h2 className="font-medium">Hey! 🌥️</h2>
           <p className="text-sm">Do you want to know the Weather Report :</p>
           <input onChange={enteredinput} type="text" className="rounded-md h-6 text-sm mt-2 pl-1 outline-none" placeholder="City Name?"/><br/>
           <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-sm mt-2">Get Report ⚡</button>
           <p className="text-sm mt-2">Degree: {deg} | City: {city} | Weather: {des}</p>
           
          </div>
    </div>)
}
export default App