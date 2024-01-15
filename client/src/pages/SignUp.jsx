import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const[formData, setFormData] = useState({});
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formHandler = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup',{
        method: 'POST',// Default is GET so we use the options parameters of fetch() to edit configurations 
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),// Only string values can be sent through http
      })
      const data = await res.json(); // returns error json or sign in success message as we have made it to return
      setLoading(false);
      console.log(data);
      if(data.success === false){
        setError(data.message)
        setLoading(false)
        return;
      }
      setError(null)
      navigate('/sign-in')
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  }
  return (
    <div className='max-w-lg mx-auto my-5'>
    <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-2 '>
        <input required onChange={formHandler} type='text' placeholder='username' className='p-2 rounded-lg border-solid border' id='username'/>
        <input required onChange={formHandler} type='email' placeholder='email' className='p-2 rounded-lg border-solid border' id='email'/>
        <input onChange={formHandler} type='password' placeholder='password' className='p-2 rounded-lg border-solid border' id='password'/>
        <button disabled={loading} onClick={submitHandler} type='submit' className='bg-orange-400 p-2 rounded-lg disabled:opacity-70 hover:opacity-85'>{loading ? 'Loading' : 'Sign Up'}</button>
      </form>
      <div>
        <div className='flex gap-2 mt-3'>
          <p>Already a member</p> <Link to={'/sign-in'}><span className='text-blue-500'>Sign In</span></Link>
        </div>
        {error && <p className='text-red-400'>{error}</p>}
      </div>
    </div>
  )
}
