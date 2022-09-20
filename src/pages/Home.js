import React, { Component }  from 'react';
import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';
import SmoothieCard from '../components/SmoothieCard'

const Home = () => {

const [fetchError, setfetchError] = useState(null);
const [smoothies, setSmoothies] = useState(null);

const handleDelete = (id)=>{
  setSmoothies(prevSmoothies => {
    return prevSmoothies.filter(sm => sm.id !== id)
  })
}


useEffect(()=>{
const fetchSmoothies = async() => {
const { data, error } = await supabase
.from('smoothies')
.select()

if(error){
  setfetchError('Could not fetch')
  console.log(error)
  setSmoothies(null);
}

if(data){
  setfetchError(null)
  setSmoothies(data);
}
}

fetchSmoothies()

}, [])

  return (
    <div className="page home">
      { fetchError && (<p> {fetchError} </p>)}
      { smoothies && (
      <div className="smoothies"> {smoothies.map(smoothie => (
        <div className="smoothie-grid">
       <SmoothieCard onDelete={handleDelete} smoothie={smoothie} key={smoothie.id}/>
        </div>
      ))}
       </div>)}
    </div>
  )
}

export default Home