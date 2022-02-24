import React from "react";
import "./form.css";

function Form(){
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [gender, setGender] = useState("");
    // const [status, seStatus] = useState("");

    // const {id} = useParams();
    // const [userdata,setData] = useState({});
   
    // useEffect(()=>{
    //     const fetchData = ()=>{
    //         fetch(`http://localhost:5000/users/${id}`)
    //             .then((response)=>{
    //                 return response.json();
    //             })
    //             .then((data)=>{
    //                 console.log(data);
    //                 setData(data)
    //         })
    //     }
    //     fetchData();
    // },[id])


    return(
        <div className="main-form-container">
            <form>
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
                <button onClick="">Update</button>
                
            </form>      

        </div>
    );
}

export default Form;