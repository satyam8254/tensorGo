import React,{useState} from "react";
import {Link} from "react-router-dom"
import { useParams } from "react-router";
import "./form.css";

function Form(){
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
     
    const updateButton = (e)=>{
        fetch(`http://localhost:5000/users/${id}`,{method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:name,
                email:email,
                gender:gender,
                status:status
            })
            }) 
    }
    

    return(
        <div className="main-form-container">
            <Link to="/"><button onClick="">Home</button></Link>
                
                <div className="form-container">

                <label>Enter name:</label>
                <input type="text" 
                placeholder="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                />

                <label>Enter email:</label>
                <input type="text" 
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)} 
                />

                <label>Enter gender:</label>
                <input type="text" 
                placeholder="Gender"
                name="gender"
                onChange={(e) => setGender(e.target.value)} 
                />

                <label>Enter status:</label>
                <input type="text" 
                placeholder="Status"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                />

                
                </div>
                <button onClick={updateButton}>Update</button>
        
                
                

        </div>
    );
}

export default Form;