import React, { Component, useState, useEffect }  from 'react';
import { useParams } from 'react-router';
import supabase from '../config/supabaseClient';
import {useNavigate} from 'react-router';

const Update = () => {

const {id} = useParams()
const navigate = useNavigate()
const [title, setTitle] = useState('')
const [method, setMethod] = useState('')
const [rating, setRating] = useState('')
const [formError, setFormError] = useState('')

const handleSubmit = async(e)=>{
  // function runs on button click
  e.preventDefault();

  if(!title || !method || !rating){
    setFormError('Please fill in all fields correctly')
    return
}

const{data, error} = await supabase
.from('smoothies')
.update({title, method, rating})
.eq('id', id)

if(error){
  setFormError('Please fill in all fields correctly')
}
if(data){
console.log(data);
setFormError('Please fill in all fields correctly')
navigate('/');
}
}

useEffect(() => {
  // function runs on page load
const fetchSmoothies = async() => {

  const{data, error} = await supabase
  .from('smoothies')
  .select()
  .eq('id', id)
  .single()

  if(error){
    navigate('/', {replace: true})
  }
  if(data){
    setTitle(data.title)
    setMethod(data.method)
    setRating(data.rating)
    console.log(data)
  }

}

fetchSmoothies()
}, [id, navigate])

  return (
    <div className="page update">
      <form onSubmit={handleSubmit}>

<label htmlFor="title">Title: </label>
<input name="title" type="text" id="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>

<label htmlFor="method">Method: </label>
<textarea name="method" type="text" id="method" value={method} onChange={(e)=> setMethod(e.target.value)}/>

<label htmlFor="rating">Rating: </label>
<input name="rating" type="number" id="rating" value={rating} onChange={(e)=> setRating(e.target.value)}/>

<button type='submit'> Update Smoothie Recipe </button>

{formError && (<p className="error"> {formError} </p>)}

</form>
    </div>
  )
}

export default Update