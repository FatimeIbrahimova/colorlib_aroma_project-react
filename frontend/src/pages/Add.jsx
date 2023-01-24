import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { addFormSchema } from '../schema/formSchema'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

const Add = () => {
  const [state, setState] = useState({url:"" ,category: "", name: "", price: "" })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const addData = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/users", state)
    setState("")
  }
  const {register,handleSubmit,formState:{errors},}=useForm({resolver:yupResolver(addFormSchema)})
  return (
    <div style={{display:"flex",flexDirection:'column' ,justifyContent:"center",alignItems:"center"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
      </Helmet>
      <h1>Add Product</h1>
      <form>
        <input type="text" placeholder='category' {...register("category")} name="category" onChange={(e) => handleChange(e)} /><br/>
        {errors.category ? (
          <span style={{color:"red"}}>{errors.category.message}</span>
        ):(
          <></>
        )   
        }<br/>
        <input type="text" placeholder='image source'{...register("url")}  name="url" onChange={(e) => handleChange(e)} /><br/>
        {errors.url ? (
          <span style={{color:"red"}}>{errors.url.message}</span>
        ):(
          <></>
        )   
        }<br/>
        <input type="text" placeholder='name' name="name" {...register("name")}  onChange={(e) => handleChange(e)} /><br/>
        {errors.name ? (
          <span style={{color:"red"}}>{errors.name.message}</span>
        ):(
          <></>
        )   
        }<br/>
        <input type="number" placeholder='price'  name="price" {...register("price")}  onChange={(e) => handleChange(e)} /><br/>
        {errors.price ? (
          <span style={{color:"red"}}>{errors.price.message}</span>
        ):(
          <></>
        )   
        }<br/>
        <button onClick={handleSubmit(addData)} style={{marginBottom:20,padding:"7px 20px",backgroundColor:"green",color:"white",border:"none"}}>Add to Api</button>
        </form>
    </div>
  )
}

export default Add
