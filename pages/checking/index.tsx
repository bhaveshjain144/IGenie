/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import SidebarComponent from '../../components/sidebar';
import Module from "module";


const Home: NextPage = () => {
    const router = useRouter()
    
    return (
       <>
       <div className='mainnn'>
       <div className='box'> 
       <div className='header'>
       <img src="/genie.png" width="150" /> 
       </div>         
       <hr></hr>
       </div>

       {/* function result() {
        <p>Laura Norda</p>
        <br/>

        <span>
            <p>Difficulty Level      Experience</p>
            <p>      Tough               16</p>
        </span>
        } */}
        
        <div><Link href={'/interviewConnect'} >
        <button className='rdabba' >
            <b>Laura Norda</b>
            <p></p>
            <span>
                <p><i  style={{color: "gray"}}>Difficulty Level &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     Experience</i>
                <b>     Tough   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     16</b></p>
            </span>
        </button>
        </Link></div>
       

       
       <div className='mcontent'>
          
       <h3><b>Questions</b></h3>
       
       <br></br>
       

       {/* repeating content  */}
       <h5><b>Javacript</b></h5>
       <br></br>
       <h6><b>1. Explain hosting</b></h6>
       </div>
       <div className='dabba'>
    <p>
        
    JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code."
    </p>
    </div>

            <div className='navingi'>
                <input  style={{margin: "0px 0px 10px 0px"}} type="radio" value="Wrong" name="weightage" /> Wrong
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Partially" name="weightage" /> Partially
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Correct" name="weightage" /> Correct
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="skip" name="weightage" />Skip
            </div>
              <br></br>





             <div className='Mcontent'>
            <h5><b>Javacript</b></h5>
       <br></br>
       <h6><b>2. Explain pass by value and pass by reference</b></h6>
       </div>
       <div className='dabba'>
        
    <p>The difference between pass-by-reference and pass-by-value is that modifications made to arguments passed in by reference in the called function have effect in the calling function, whereas modifications made to arguments passed in by value in the called function can not affect the calling function.
    </p>
    </div>
    <div className='navingi'>
                <input  style={{margin: "0px 0px 10px 0px"}} type="radio" value="Wrong" name="weightage" /> Wrong
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Partially" name="weightage" /> Partially
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Correct" name="weightage" /> Correct
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="skip" name="weightage" />Skip
            </div>


    <br></br>



    <div className='Mcontent'>
            <h5><b>ReactJs</b></h5>
       <br></br>
       <h6><b>What is virtual DOM</b></h6>
       </div>
       <div className='dabba'>
    <p>A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM.
    </p>
    </div>
    <div className='navingi'>
                <input  style={{margin: "0px 0px 10px 0px"}} type="radio" value="Wrong" name="weightage" /> Wrong
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Partially" name="weightage" /> Partially
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Correct" name="weightage" /> Correct
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="skip" name="weightage" />Skip
            </div>
    <br></br>



    <div className='Mcontent'>
            <h5><b>Javacript</b></h5>
       <br></br>
       <h6><b>1. Explain hosting</b></h6>
       </div>
       
       <div className='dabba'>
    <p>sjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
    </p>
    </div>
            <div className='navingi'>
                <input  style={{margin: "0px 0px 10px 0px"}} type="radio" value="Wrong" name="weightage" /> Wrong
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Partially" name="weightage" /> Partially
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="Correct" name="weightage" /> Correct
                <input  style={{margin: "0px 0px 10px 60px"}} type="radio" value="skip" name="weightage" />Skip
            </div>
             <br></br>

            

            
             

             
    <button className='buttony'>
    Submit
    </button>
    


     </div>

       </>
    )
}
export default Home