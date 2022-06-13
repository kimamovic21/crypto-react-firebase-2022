import React, { useState } from 'react';
import {
  AiOutlineMail, 
  AiFillLock, 
  AiFillEyeInvisible} 
from 'react-icons/ai';
import { Link , useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const {signUp} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    } 
  }

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-28'>
        <h1 className='text-2xl font-bold'>Sign up</h1>
        {error ? <p className='bg-red-300 p-3 my-4'>{error}</p> : null}
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
            Sign up
          </button>
        </form>
        <p className='my-4'>
          Already have an account ? 
          <Link to='/signup' className='text-accent ml-1'>Sign in.</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup;








// 1. dodajemo div elemente
// 2. dodajemo className div elementima
// 3. dodajemo const {signUp} = UserAuth()
// 4. dodajemo useState hook
// 5. importujemo useNavigate
// 6. dodajemo onChange dogadaje input elementima
// 7. dodajemo onSubmit dogadaj form elementu
// 8. dodajemo handleSubmit funkciju
// 9. 