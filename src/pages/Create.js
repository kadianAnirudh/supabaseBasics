import React, { Component, useState }  from 'react';
import supabase from '../config/supabaseClient';
import { useNavigate } from 'react-router';

const Create = () => {

const [title, setTitle] = useState('')
const [method, setMethod] = useState('')
const [rating, setRating] = useState('')
const [formError, setFormError] = useState('')
const navigate = useNavigate()

const handleSubmit = async(e) => {
  e.preventDefault();

  if(!title || !method || !rating){
    setFormError('Please fill in all fields correctly')
    return
  }

  const {data, error} = await supabase
  .from('smoothies')
  .insert({title, method, rating})

  if(error){
    console.log(error);
    setFormError(error)
  }
  if(data){
    console.log(data);
    setFormError(null);
    navigate('/')

  }
}


  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title: </label>
        <input name="title" type="text" id="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>

        <label htmlFor="method">Method: </label>
        <textarea name="method" type="text" id="method" value={method} onChange={(e)=> setMethod(e.target.value)}/>

        <label htmlFor="rating">Rating: </label>
        <input name="rating" type="number" id="rating" value={rating} onChange={(e)=> setRating(e.target.value)}/>

        <button type='submit'> Create Smoothie Recipe </button>

        {formError && (<p className="error"> {formError} </p>)}

      </form>
    </div>
  )
}

export default Create