import React, { useState } from 'react';
import {AiOutlineMail, AiFillLock, AiFillEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import {signIn, UserAuth} from '../context/AuthContext';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const {signIn} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    } 
  }


  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-28'>
        <h1 className='text-2xl font-bold'>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={(e) => setEmail(e.target.value)}
                     className='w-full p-2 bg-primary border border-input rounded-2xl'
                     type="email" 
                     placeholder='Enter you email'
              />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={(e) => setPassword(e.target.value)}
                     className='w-full p-2 bg-primary border border-input rounded-2xl'
                     type="password" 
                     placeholder='Enter you password'
                     id='myInput'
              />
              <AiFillLock className='absolute right-2 top-3 text-gray-400'/>
              <AiFillEyeInvisible className='absolute right-9 top-3 text-gray-400 cursor-pointer'
                                  onClick={
                                    function myFunction() {
                                    var x = document.getElementById("myInput");
                                    if (x.type === "password") {
                                      x.type = "text";
                                    } else {
                                      x.type = "password";
                                    }
                                   }
                                 }
              />  
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
            Sign in
          </button>
        </form>
        <p className='my-4'>
          Don't have an account ? 
          <Link to='/signup' className='text-accent ml-1'>Sign up.</Link>
        </p>
      </div>
    </div>
  )
}

export default Signin;






// 1. dodajemo div elemente
// 2. dodajemo className div elementima
// 3. dodajemo react hooks
// 4. dodajemo funkciju
// 5. input elementima dodajemo onChange dogadaj
// 6. form elementu dodajemo onSubmit dogadaj
