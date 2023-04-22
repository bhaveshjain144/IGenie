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
    const [technology, setTechnology] = useState('ReactJS');
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
                    ReactJS - 3
                </div>

                <div className='sidequestion'>
                    1. What is JSX?
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                        JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
                        </p>
                    </div>
                    <div className='sideweightage'>
                        2
                    </div>
                </div>

                <div className='sidequestion'>
                    2. What is the virtual DOM?
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                        DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.
                        <br />
                        React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.
                        </p>
                    </div>
                    <div className='sideweightage'>
                        3
                    </div>
                </div>

                <div className='sidequestion'>
                    3. What are synthetic events in React?            
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>
                        Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.
                        <br />
                        The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.
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
