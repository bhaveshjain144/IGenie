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
    const [technology, setTechnology] = useState('Python');
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
                    Python - 3
                </div>

                <div className='sidequestion'>
                    1. What is PEP 8 and why is it important?
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                        PEP stands for Python Enhancement Proposal. A PEP is an official design document providing information to the Python community, or describing a new feature for Python or its processes. PEP 8 is especially important since it documents the style guidelines for Python Code. Apparently contributing to the Python open-source community requires you to follow these style guidelines sincerely and strictly.
                        </p>
                    </div>
                    <div className='sideweightage'>
                        3
                    </div>
                </div>

                <div className='sidequestion'>
                    2. What are lists and tuples? What is the key difference between the two?
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                        Lists and Tuples are both sequence data types that can store a collection of objects in Python. The objects stored in both sequences can have different data types. Lists are represented with square brackets ['sara', 6, 0.19], while tuples are represented with parantheses ('ansh', 5, 0.97).
                        <br />
                        But what is the real difference between the two? The key difference between the two is that while lists are mutable, tuples on the other hand are immutable objects. This means that lists can be modified, appended or sliced on the go but tuples remain constant and cannot be modified in any manner. You can run the following example on Python IDLE to confirm the difference:
                        </p>
                    </div>
                    <div className='sideweightage'>
                        4
                    </div>
                </div>

                <div className='sidequestion'>
                    3. What is pass in Python?
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                        The pass keyword represents a null operation in Python. It is generally used for the purpose of filling up empty blocks of code which may execute during runtime but has yet to be written. Without the pass statement in the following code, we may run into some errors during code execution.
                        </p>
                    </div>
                    <div className='sideweightage'>
                        3
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
