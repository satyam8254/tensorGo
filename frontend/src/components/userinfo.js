import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import "./userinfo.css"
function Userinfo(){
    const {id} = useParams();
    const [userdata,setData] = useState({});
   
    useEffect(()=>{
        const fetchData = ()=>{
            fetch(`http://localhost:5000/users/${id}`)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    console.log(data);
                    setData(data)
            })
        }
        fetchData();
    },[id])

    return(
        <div className="user-container">
            <div class="card-group my-2 pl-4">
                <div class="card">
                    <img src={userdata.image} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">{userdata.name}</h5>
                            <p class="card-text"><b>Email:</b></p>
                            <p class="card-text">{userdata.email}</p>
                            <p class="card-text"><b>Gender:</b> {userdata.gender}</p>
                            <p class="card-text"><b>Status:</b> {userdata.status}</p>
                        </div>

                        {/* <div class="card-footer">
                            <div className="footer-container">
                                <div className="footer-container-item"><button className="btn">View</button></div>
                                <div className="footer-container-item"><button className="btn">Edit</button></div>
                                <div className="footer-container-item"><button className="btn">Delete</button></div>
                            </div>
                        </div> */}
                </div>
            </div>
       
    </div>
    )
}

export default Userinfo;