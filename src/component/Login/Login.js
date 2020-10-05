import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
        // Google Form Sign in start      
        const handleGoogleSignIn = () => {

            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
    
                    const { displayName, email } = result.user;
                  
                    const newUser = {
                        name: displayName,
                        email: email,
                        error:'',
                        success:true
                    }
                
                
                
                setLoggedInUser(newUser);  
                history.replace(from);
    
                }).catch(function (error) {
    
                    var errorCode = error.code;
                    var errorMessage = error.message;
    
                   
                });
    
        }
    
        //    Google Form Sign in Complete

    return (
        <div style={{backgroundColor:"black",width:"50%",justifyContent:"center",margin:"auto",height:"700px",verticalAlign:"middle",paddingTop:"150px",borderRadius:"20px",boxShadow:"1px 1px 3px black"}}>
            <img src="https://i.ibb.co/KmyJR2R/Group-1329.png" style={{minWidth:'20%',maxWidth:'30%'}} alt=""></img>
            <hr style={{weight:"5px",color:"grey"}}></hr>
            <h1 className="text-warning">Login with Google</h1>
            
            <button style={{padding:"20px",borderRadius:"10px"}} onClick={handleGoogleSignIn}><img className="img-responsive" style={{width:"7%",marginRight:"10px"}} src="https://i.ibb.co/BsGRpCy/google.png" alt="fb"></img>Sign in with Google</button><br></br>
        </div>
    );
};

export default Login;