/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import Input from 'react-phone-number-input/input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
isPossiblePhoneNumber('1234567890') === true
import { components } from "react-select";
const Home: NextPage = () => {
    const router = useRouter()

    return (
        <div >
            <form className="form">
                <img src="/genie.png" width="150" />
                <p style={{ color: "#102333", fontWeight: "bold", fontSize: 20 }}>
                    Select Questions
                </p>
                 
                <div className='formGroup'>
                    <label>
                        Select Technology *
                    </label>
                    <Dropdown style={{ border: "1px solid", borderRadius: "5px", width: "140%", textAlign:"left", marginBottom:"25px"}}>
                        <Dropdown.Toggle variant="white" id="dropdown-basic" style={{width: "100%", display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
                            Select Technology
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="form-control">
                            
                            <Dropdown.Item href="#/angular">Angular</Dropdown.Item>
                            
                            <Dropdown.Item href="#/buisness-analyst">Business Analyst</Dropdown.Item>
                            <Dropdown.Item href="#/c++">C++</Dropdown.Item>
                            <Dropdown.Item href="#/javascript">Javascript</Dropdown.Item>
                            <Dropdown.Item href="#/python">Python</Dropdown.Item>
                            <Dropdown.Item href="#/reactJS">ReactJS</Dropdown.Item>
                            <Dropdown.Item href="#/ux">UX Designer</Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='formGroup'>
                    <label htmlFor="name" className="">No. of Questions  </label>
                    <input
                        className="form-control"
                        type="number"
                        placeholder='No. of Questions'
                        required
                    />
                    </div>
                <div className='formGroup'>
                    <label>
                        Difficulty Level *
                    </label>
                    <Dropdown style={{ border: "1px solid", borderRadius: "5px", width:"140%"}}>
                        <Dropdown.Toggle variant="white" id="dropdown-basic" style={{width:"100%", display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
                            Select Difficulty Level
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/easy">Easy</Dropdown.Item>
                            <Dropdown.Item href="#/moderate">Moderate</Dropdown.Item>
                            <Dropdown.Item href="#/tough">Tough</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <hr></hr>
                <p style={{ color: "#102333", fontWeight: "bold", fontSize: 20 }}>
                    Candidate Details
                </p>
                <div className='formGroup'>
                    <label htmlFor="name" className="">Name *  </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder='Name of the Candidate'
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor="phone" className="">Phone Number *  </label>
                    <input
                        inputMode="numeric"
                        className=" form-control"
                        id="phone"
                        name="phone"
                        placeholder='Phone no. of the Candidate'
                        maxLength={10}
                        required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="pno" className="">Experience *  </label>
                    <input
                        className="form-control"
                        id="exp"
                        name="exp"
                        type="text"
                        placeholder='Experience of the Candidate'
                        required />
                </div>
                <br></br>
                <div style={{position: "relative", marginLeft:"18rem"}}>
                <button
                    className="px-4 py-2 font-bold text-black bg-white rounded-full hover:bg-blue-700"
                    style={{position: "relative", borderRadius:"8px"}}
                >
                    Cancel
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-dark rounded-full hover:bg-blue-700"
                    style={{position: "relative", borderRadius:"8px"}}
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}
export default Home 