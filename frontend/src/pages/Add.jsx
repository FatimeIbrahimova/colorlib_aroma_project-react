import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
  const [state, setState] = useState({image:"" ,category: "", name: "", price: "" })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const addData = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/users", state)
    setState("")
  }
  return (
    <div style={{display:"flex",flexDirection:'column' ,justifyContent:"center",alignItems:"center"}}>
      <h1>Add Product</h1>
      <form>
        <input type="text" placeholder='category' name="category" onChange={(e) => handleChange(e)} /><br/>
        <input type="text" placeholder='image source' name="image" onChange={(e) => handleChange(e)} /><br/>
        <input type="text" placeholder='name' name="name" onChange={(e) => handleChange(e)} /><br/>
        <input type="number" placeholder='price'  name="price" onChange={(e) => handleChange(e)} /><br/>
        <button onClick={addData}>Add</button>
      </form>
    </div>
  )
}

export default Add
