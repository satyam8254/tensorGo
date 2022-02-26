import React from "react";
import { useParams } from "react-router";
import "./form.css";

function Form(){
    const {id} = useParams();
    return(
        <div className="main-form-container">
            <form method="PUT" action={`http://localhost:5000/users/${id}`}>
            {/* <form method="PUT" action="/"> */}
                <div className="form-container">

                <label>Enter name:</label>
                <input type="text" 
                placeholder="name"
                name="name"
                // onChange={(e) => setName(e.target.value)}
                />

                <label>Enter email:</label>
                <input type="text" 
                placeholder="Email"
                name="email"
                // onChange={(e) => setEmail(e.target.value)} 
                />

                <label>Enter gender:</label>
                <input type="text" 
                placeholder="Gender"
                name="gender"
                // onChange={(e) => setGender(e.target.value)} 
                />

                <label>Enter status:</label>
                <input type="text" 
                placeholder="Status"
                name="status"
                // onChange={(e) => seStatus(e.target.value)}
                />
                </div>
                <input type="submit" value="submit"/>
                
            </form>      

        </div>
    );
}

export default Form;