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
    const [technology, setTechnology] = useState('Select Technology');
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

        <div className="Display" style={{marginTop: "20px", marginLeft: "35%"}}>
            <div style={{paddingLeft: "30rem", paddingTop: "20rem"}}>
                <Image
                    src="/images/searchdoc.png"
                    alt="searching data"
                    width={100}
                    height={100}
                ></Image>
                <p style={{marginLeft: "1rem"}}>No Data</p>
                <p style={{marginLeft: "-2rem"}}>Select any technology</p>
            </div>
        </div>


        <div className='body'>
        {/* <View style={styles.verticleLine}></View> */}
            <div className="pagetitle">
                Contribute to Library
            </div>

            <div className="vl"></div>


            <div className= "selecttech">
                    Select Technology *
                
                    <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="white" id="dropdown-basic" className='dropdown_toggle'>
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
                <button className="buttonsubmit1"><a>Submit</a></button>
            </div>
        </div>
    </>

    )
}
export default Home

function value(value: any): void {
    throw new Error('Function not implemented.');
}
