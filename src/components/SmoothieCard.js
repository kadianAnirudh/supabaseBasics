import React from 'react'
import { BsFillPencilFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import supabase from '../config/supabaseClient';

const SmoothieCard = ({smoothie, onDelete}) => {

const handleDelete = async()=>{
const {data, error} = await supabase
.from('smoothies')
.delete()
.eq('id', smoothie.id)

if(error){
    console.error(error)
}
if(data){
    console.log(data);
    onDelete(smoothie.id)
}
}

  return (
    <div className="smoothie-card">
<h3> {smoothie.title} </h3>
<p> {smoothie.method} </p>
<div className="rating">
{smoothie.rating}
</div>
<div className="button-edit">
    <Link to={'/' + smoothie.id}> <BsFillPencilFill/></Link>
     <BsFillTrashFill onClick={handleDelete}/>
</div>
    </div>
  )
}

export default SmoothieCard