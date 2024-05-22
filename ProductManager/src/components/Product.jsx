import React, { useState } from 'react'
import axios from 'axios';
import styles from './style.module.css'
const Product = () => {

    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const[Description,setDescription] = useState("")

    const onSubmitHandler = (e) => {
       
        e.preventDefault();
        //make a post request to create a new person
         axios.post('http://localhost:8000/api/users', {
            Title,    // this is shortcut syntax for firstName: firstName,
            Price,
            Description
               
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form className={styles.conatiner} onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div className={styles.inp} >
            <p>
                <label>Title</label><br/>
         {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
               <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)} />
            </p>
            <button type="submit">create</button>
            </div>
        </form>
    )
}
export default Product;

