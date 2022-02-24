import React,{useState,useEffect} from "react";
import "./homebody.css";
import {Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
function Homebody(){
    const [user,setUser] = useState([]);
    useEffect(()=>{
        const fetchData = ()=>{
            fetch("http://localhost:5000/users")
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                setUser(data)
            })
        }
        fetchData();
    },[])
    return(
        <div className="main-container">
            <Row>
                
                {user.map(data =>(
                     <Col key={data._id} sm={12} md={6} lg={4} xl={3}> 
                        <div class="card-group my-2 pl-4">
                            <div class="card">
                                <img src={data.image} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{data.name}</h5>
                                        <p class="card-text"><b>Email:</b></p>
                                        <p class="card-text">{data.email}</p>
                                        <p class="card-text"><b>Gender:</b> {data.gender}</p>
                                        <p class="card-text"><b>Status:</b> {data.status}</p>
                                    </div>

                                    <div class="card-footer">
                                    <div className="footer-container">
                                        <div className="footer-container-item"><Link to={`/users/${data._id}`}><button className="btn">View</button></Link> </div>
                                        <div className="footer-container-item"><Link to="/form"><button className="btn">Edit</button></Link></div>
                                        <div className="footer-container-item"><button className="btn">Export</button></div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        
                    </Col>
                ))}
                
            </Row>
        </div>
    );
}
export default Homebody;



