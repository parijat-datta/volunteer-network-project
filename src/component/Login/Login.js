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
        <div>
            <h1>Login with Google</h1>
            <hr></hr>
            <button style={{}} onClick={handleGoogleSignIn}><img className="img-responsive" style={{width:"7%",marginRight:"10px"}} src="https://i.ibb.co/BsGRpCy/google.png" alt="fb"></img>Sign in with Google</button><br></br>
        </div>
    );
};

export default Login;