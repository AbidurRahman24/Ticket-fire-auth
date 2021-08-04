import React, { useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }



const Login = () => {
    const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
  })
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          console.log('sign in user info', res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });

    }
    if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            console.log('sign in user info', res.user);
          })
          .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
          });
      }
      e.preventDefault()
    }
    const updateUserName = name => {
      const user = firebase.auth().currentUser;
  
      user.updateProfile({
        displayName: name
      }).then(() => {
        console.log('update successfully');
      }).catch((error) => {
        console.log(error);
      });
    }

    return (
        <div>
            <div class="signup-form">
                <form onSubmit={handleSubmit} method="post">
                    <h2>Create Account</h2>
                    <div class="form-group">
                        <div class="input-group">
                            
                            {
                            newUser &&
                                    <input type="text" onBlur={handleBlur} class="form-control" name="name" placeholder="Username" required="required" /> 
                            }
                            
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
                            <input type="email" onBlur={handleBlur} class="form-control" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                            <input type="password" onBlur={handleBlur} class="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-lock"></i>
                                <i class="fa fa-check"></i>
                            </span>
                            
                            <input type="password" onBlur={handleBlur} class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block btn-lg">Sign Up</button>
                    </div>
                    <p class="small text-center">By clicking the Sign Up button, you agree to our <br /><a href="/">Terms &amp; Conditions</a>, and <a href="/">Privacy Policy</a>.</p>
                </form>
                <div class="text-center">Already have an account? <input type='checkbox' onChange={() => setNewUser(!newUser)} name="newUser"/>Login here</div>
            </div>
            <p style={{ color: 'red' }}>{user.error}</p>
      {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
    );
};

export default Login;