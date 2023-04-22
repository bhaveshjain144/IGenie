/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import Image from 'next/image';
import Multiselect from 'multiselect-react-dropdown';


const Home: NextPage = () => {
    const router = useRouter()
    
        return (
            <div className='' >
            
                <form className="form" action="/api/form" method="post">
                    <Link href={'/'}>
                        <Image
                            src="/images/genie.png"
                            alt="logo"
                            width={150}
                            height={75}
                        >
                        </Image>
                    </Link>
               

                    <p style={{ color: "#102333", fontWeight: "bold", fontSize: 20 }}>
                        Select Questions
                    </p>

                    <div className='formGroup'> 
                    
                    <div className='dropdown'>
                        
                        {/* <label>
                            Select Technology *
                        </label>

                        this.state = {
                            options: [{name: 'Angular', id: 1},{name: 'Buisness Analyst', id: 2},{name: 'C++', id: 3},{name: 'Javascript', id: 4},{name: 'Python', id: 5},{name: 'ReactJS', id: 6},{name: 'UX Designer', id: 7}]
                        };
                        <Multiselect
                        options={this.state.options}
                        selectedValues={this.state.selectedValue}
                        onSelect={this.onSelect}
                        onRemove={this.onRemove}
                        displayValue="Select Technology"
                        /> */}
                        <Multiselect
                            isObject={false}
                            onKeyPressFn={function noRefCheck(){}}
                            onRemove={function noRefCheck(){}}
                            onSearch={function noRefCheck(){}}
                            onSelect={function noRefCheck(){}}
                            options={[
                                'Angular',
                                'Buisness Analyst',
                                'C++',
                                'Javascript',
                                'Python',
                                'ReactJS',
                                'UX Designer'
                            ]}
                        />
                    </div>
                        {/* <label>
                            Select Technology *
                        </label>
                        <Dropdown className='dropdown' >
                            <Dropdown.Toggle variant="white" id="dropdown-basic" className='dropdown_toggle'>
                                Select Technology
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/angular">Angular</Dropdown.Item>
                                <Dropdown.Item href="#/buisness-analyst">Business Analyst</Dropdown.Item>
                                <Dropdown.Item href="#/c++">C++</Dropdown.Item>
                                <Dropdown.Item href="#/javascript">Javascript</Dropdown.Item>
                                <Dropdown.Item href="#/python">Python</Dropdown.Item>
                                <Dropdown.Item href="#/reactJS">ReactJS</Dropdown.Item>
                                <Dropdown.Item href="#/ux">UX Designer</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}

                    </div>

                    <div className='formGroup'>

                        <label htmlFor="name" className="">No. of Questions  </label>

                        <input
                            className="form-control"

                            type="text"
                            placeholder='No. of Questions'
                            required
                        />
                    </div>


                    <div className='formGroup'>
                        <label >
                            Difficulty Level *
                        </label>
                        <Dropdown className='dropdown'>
                            <Dropdown.Toggle variant="white" id="dropdown-basic" className='dropdown_toggle'>
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
                        <label htmlFor="pno" className="">Phone Number *  </label>

                        <input
                            className=" form-control"
                            id="pno"
                            name="pno"
                            type="text"
                            placeholder='Phone no. of the Candidate'

                            required />

                    </div>
                    <div className='formGroup'>
                        <label htmlFor="experience" className="">Experience *  </label>

                        <input
                            className="form-control"
                            id="exp"
                            name="exp"
                            type="number"
                            placeholder='Experience of the Candidate'
                            required />
                    </div>
                    <br></br>

                    <button
                    
                        className="px-4 py-2 font-bold text-black bg-white rounded-full hover:bg-blue-700"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-dark rounded-full hover:bg-blue-700"
                    >
                        <Link href="/checking">
                            <a style={{ color: "#D8DEE3", textDecoration: "none" }}>
                                {" "}
                                Submit
                            </a>
                        </Link>

                    </button>
                </form>
            </div>

        )
    }

export default Home