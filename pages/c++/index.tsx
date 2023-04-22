/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';
import React, {useState} from 'react';
import NewTech from '../newtech';

const Home: NextPage = () => {
    const router = useRouter()

    const [data, setData] = useState(null);
    const [technology, setTechnology] = useState('C++');
    const [question, setQuestion] = useState('Type Question');
    const [answer, setAnswer] = useState('Type Answer');
    const [weightage, setWeightage] = useState(null);

    return (
    <>


        <div className="l-header">
            <Link href={'/'}>
                <div className="img">
                    <Image
                        src="/images/genie.png"
                        alt="logo"
                        width={100}
                        height={50}
                    ></Image>
                </div>
        </Link>   
        </div>

        <div className='body'>

            <div className="Display">
                <div className='sideheading'>
                    C++ - 3
                </div>

                <div className='sidequestion'>
                    1. What are the different data types present in C++?
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>The 4 data types in C++ are given below:
                            <br />
                            Primitive Datatype(basic datatype). Example- char, short, int, float, long, double, bool, etc.
                            <br />
                            Derived datatype. Example- array, pointer, etc.
                            <br />
                            Enumeration. Example- enum
                            <br />
                            User-defined data types. Example- structure, class, etc.</p>
                            <br />
                    </div>
                    <div className='sideweightage'>
                        4
                    </div>
                </div>

                <div className='sidequestion'>
                    2. What are class and object in C++?                
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                            A class is a user-defined data type that has data members and member functions. Data members are the data variables and member functions are the functions that are used to perform operations on these variables.
                            <br />
                            An object is an instance of a class. Since a class is a user-defined data type so an object can also be called a variable of that data type.
                        </p>
                    </div>
                    <div className='sideweightage'>
                        3
                    </div>
                </div>

                <div className='sidequestion'>
                    3. What is polymorphism in C++?    
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                        Polymorphism in simple means having many forms. Its behavior is different in different situations. And this occurs when we have multiple classes that are related to each other by inheritance.
                        <br />
                        <br />
                        For example, think of a base class called a car that has a method called car brand(). Derived classes of cars could be Mercedes, BMW, Audi - And they also have their own implementation of a cars
                        <br />
                        <br />
                        The two types of polymorphism in c++ are:
                        <br />
                        <br />
                        Compile Time Polymorphism
                        <br />
                        Runtime Polymorphism
                        </p>
                    </div>
                    <div className='sideweightage'>
                        5
                    </div>
                </div>
            </div>

            <div className="pagetitle">
                Contribute to Library
            </div>

            <div className="vl"></div>

            
            <div className= "selecttech">
                    Select Technology *
                
                    <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="white" id="dropdown-basic" className='dropdown_toggle' style={{color: "black"}}>
                        {technology}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='options'>
                        <Dropdown.Item href={"/angular"} onClick={() => setTechnology("Angular")}>Angular</Dropdown.Item>
                        <Dropdown.Item href={"/buisness_analyst"} onClick={() => setTechnology("Buisness Analyst")}>Buisness Analyst</Dropdown.Item>
                        <Dropdown.Item href={"/c++"} onClick={() => setTechnology("C++")}>C++</Dropdown.Item>
                        <Dropdown.Item href={"/javascript"} onClick={() => setTechnology("Javascript")}>Javascript</Dropdown.Item>
                        <Dropdown.Item href={"/python"} onClick={() => setTechnology("Python")}>Python</Dropdown.Item>
                        <Dropdown.Item href={"/reactjs"} onClick={() => setTechnology("ReactJS")}>ReactJS</Dropdown.Item>
                        <Dropdown.Item href={"/ux"} onClick={() => setTechnology("UX Designer")}>UX Designer</Dropdown.Item>
                        {/* <Dropdown.Item className='btn-new' href="#/newtechnology" onClick={(event) => [setTechnology("New Technology"), newTechnology()]}>New Technology</Dropdown.Item> */}
                        <div style={{marginBottom: "-10px"}}>
                            <Link href={'/newtech'}>
                                <button className="btn-new" style={{paddingTop: "7px"}} onClick={() => setTechnology("New Technology")}>
                                    <p>New Technology</p>
                                </button>
                            </Link>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>


            <div className='question'>
                <label htmlFor="name" className="">Question</label>
                    <input
                        className="inpq"
                        type="text"
                        placeholder='Type Question'
                        required
                    />
            </div>

            <div className='answer'>
                <label htmlFor="name" className="">Answer</label>
                    <input
                        className="inpa"
                        type="text"
                        placeholder='Type Answer'
                        required
                    />
            </div>

            <div className="weightage">
                <p style={{ color: "#102333", fontSize: 15 }}>
                    Question Weightage
                </p>
                <div className='radioweightage'>
                    <input type="radio" value="1" name="weightage" /> 1
                    <input type="radio" value="2" name="weightage" /> 2
                    <input type="radio" value="3" name="weightage" /> 3
                    <input type="radio" value="4" name="weightage" /> 4
                    <input type="radio" value="5" name="weightage" /> 5
                </div>
            </div>

            <div className='button1'>
                <button className="buttonsubmit"><a>Submit</a></button>
            </div>
        </div>
    </>

    )
}
export default Home

function value(value: any): void {
    throw new Error('Function not implemented.');
}
