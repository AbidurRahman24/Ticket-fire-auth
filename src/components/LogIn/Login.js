import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    return (
        <div>
            This is login
        </div>
    );
};

export default Login;