import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewal = () => {
    const [userData,changeUserData]=useState(
        {
            "users": [ ],
            "total": 208,
            "skip": 0,
            "limit": 30
          }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/users").then(
            (response)=>{
                changeUserData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {userData.users.map(
                                (value, index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div class="card">
                                        <img src={value.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{value.firstName}</h5>
                                            <p class="card-text">{value.lastName}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{value.maidenName}</li>
                                            <li class="list-group-item">{value.age}</li>
                                            <li class="list-group-item">{value.gender}</li>
                                        </ul>
    
                                    </div>
    
                                </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewal
