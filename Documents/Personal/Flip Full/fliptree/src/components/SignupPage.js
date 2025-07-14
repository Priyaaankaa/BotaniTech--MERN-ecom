import { useState, useEffect } from "react";
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

const SignupPage = () => {



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  useEffect(()=>{
      const auth = localStorage.getItem('user')
      if(auth)
          {
              navigate('/')
          }
  })


  const collectData = async()=>{
      console.log(name, email, password);
      let result = await fetch('http://localhost:4000/register',{
          method : 'post',
          body : JSON.stringify({name,email,password}),
          headers:{
              'content-type':'application/json'
          },
      });
      result = await result.json()
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result));

      if(result)
          {
              navigate('/')
          }
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
     
      <div className="bg-white rounded-lg shadow-lg flex overflow-hidden max-w-4xl">
       
        <div className="w-1/2 p-8">
          <div className="flex items-center mb-6">
            <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
            <h1 className="text-lg font-bold text-gray-800">Anywhere app.</h1>
          </div>
          <h2 className="text-3xl font-semibold mb-2">Create new account.</h2>
          <p className="text-sm text-gray-500 mb-8">
            Already A Member?  <Link to="/login">Log in</Link>
          </p>
          <form>
            
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
              <input
                value={name} onChange={(e)=>setName(e.target.value)} 
                type="text"
                id="fullname"
                placeholder="firstname"
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
              <input
                
                type="text"
                id="lastname"
                placeholder="lastname"
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
           
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                value={email} onChange={(e)=>setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="something@any.com"
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
           
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                value={password} onChange={(e)=>setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={collectData} 
              >
                Create account
              </button>
            </div>
       
            <div>
              <button
                type="button"
                className="w-full py-2 text-blue-500 border border-blue-500 rounded-md font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Change method
              </button>
            </div>
          </form>
        </div>

   
        <div className="w-1/2 relative">
          <img
            src="data:image/jpeg;base64,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"
            alt="Mountains"
            className="h-full w-full object-cover"
          />

        </div>
      </div>
    </div>
  );
};

export default SignupPage;
