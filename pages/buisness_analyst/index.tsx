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
    const [technology, setTechnology] = useState('Buisness Analyst');
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
                    Buisness Analyst - 3
                </div>

                <div className='sidequestion'>
                    1. What is the role of a business analyst in an organization? 
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>It is the most fundamental question you can expect during your interview. You can answer this question by explaining that a business analyst is a liaison or a link between different stakeholders belonging to different domains in an organization. A business analyst should have the capabilities to fulfill the business objectives and balance the needs of various stakeholders.</p>
                    </div>
                    <div className='sideweightage'>
                        4
                    </div>
                </div>

                <div className='sidequestion'>
                    2. What, according to you, are the core competencies of a Business Analyst?
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>It is one of the most common business analyst interview questions. Although every company is different, the core requirements of a business analyst profile are quite similar. Make sure to go over an organization's job description in detail to understand the required core competencies and include them in your answer.
                            <br />
                            You can answer this by stating that a business analyst must have exceptional communication and negotiation skills. Analytical thinking, problem-solving, and decision making are also vital attributes. A business analyst should have industry knowledge, business process management skills along with technical proficiency.
                        </p>
                    </div>
                    <div className='sideweightage'>
                        5
                    </div>
                </div>

                <div className='sidequestion'>
                    3. Do you have any technical skills? Can you list your database skills or business intelligence skills? 
                </div>
                <br />
                <div className='answercomponent'>
                    <div className='sideanswer'>
                        <p>Your technical skills are directly proportional to your value in the organization.
                            <br />
                            It is not compulsory to have advanced technical skills like relational databases and SQL, but the more technically proficient you are as a business analyst, the better. These skills are most desirable and widely used, so if you have some experience in using these technologies, make sure you explain them to your interviewer.
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
