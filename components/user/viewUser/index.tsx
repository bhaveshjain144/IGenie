import { Form, Button } from "react-bootstrap";
import Img from "next/image";
import styles from "./viewUser.module.css";
const ViewUserComponent = (props: any) => {
    return (
        <div className="d-flex justify-content-center">
            <div className={`${styles.card} p-4`} >
                <div className={`${styles.image} d-flex flex-column justify-content-center align-items-center`} >
                    <button className={`${styles.btn} `} >
                        <Img src={props.userData.photoURL || "/user.png"} height="100" width="100" /></button>
                    <span className={`${styles.name} mt-3`} >{props.userData.name || 'NA'}</span> <span className={styles.idd}>{props.userData.email}</span>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className={styles.idd1}>{props.userData.uid}</span> <span><i className="fa fa-copy"></i></span> </div>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3"> </div>
                    <div className=" d-flex mt-2"> <button className="btn btn-dark" onClick={props.editProfile}>Edit Profile</button> </div>
                    {/* <div className="text mt-3">
                        <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br /><br /> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
                    <div className=" px-2 rounded mt-4 date "> <span className={styles.join} >Joined May,2021</span> </div> */}
                </div>
            </div>
        </div>
    )
}
export default ViewUserComponent;