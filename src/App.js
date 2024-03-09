import React, { useState } from 'react'
import './App.css'


const api = {
  key: "3ee13def8829c8a2a5ba7370149f64da",
  base: "https://api.openweathermap.org/data/2.5/"
}



const App = () => {

  const [search, setSearch] = useState('pune')


  const searchPress = async () => {
    const element = document.body.getElementsByClassName('Element')
    if (element[0].value === " ") {
      return 0;

    }
    let response = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    let data = await response.json()
    let d = data.weather[0].icon;



    const humidity = document.body.getElementsByClassName('humidity')
    const wind = document.body.getElementsByClassName('wind')
    const location = document.body.getElementsByClassName('location')
    const tem = document.body.getElementsByClassName('temp')

    document.getElementById('imga').src = `https://openweathermap.org/img/wn/${d}@2x.png`



    humidity[0].innerHTML = "humidity " + data.main.humidity + "%";
    wind[0].innerHTML =" speed "+ data.wind.speed + " km/h";
    location[0].innerHTML = data.name
    tem[0].innerHTML = data.main.temp + " °C"
  }

  setInterval(searchPress, 1000 * 60 * 60);



  return (

    <section className='MainDiv' >
      <div className='air air1'></div>
      <div className='air air2'></div>
      <div className='air air3'></div>
      <div className='air air4'></div>
      <div className='sunny' >

      </div>

      
        
      <header id='div'>
         <div className='waviy'>
        
   <span style={{"--i":"1"}} >W</span>
   <span style={{"--i":"2"}}  >E</span>
   <span style={{"--i":"3"}}  >A</span>
   <span style={{"--i":"4"}}  >T</span>
   <span style={{"--i":"5"}}  >H</span>
   <span style={{"--i":"6"}}  >E</span>
   <span style={{"--i":"7"}}  >R</span>{" "}
   
   <span style={{"--i":"8"}}  >A</span>
   <span style={{"--i":"9"}}  >P</span>
   <span style={{"--i":"10"}}  >P</span>
          
         </div>
        <div className='Inner'>
          <input className='Element' placeholder='search city' onChange={(e) => setSearch(e.target.value)}></input>
          <button onClick={searchPress}>search</button>

        </div>

        <div className='temp'></div>
        <img id="imga" alt='' ></img>
        <div className='location'></div>
        <div className='container'>
          <div className='humidity'></div>
          <div className='wind'></div>
        </div>



      </header>
      





    </section>



  )
}

export default App