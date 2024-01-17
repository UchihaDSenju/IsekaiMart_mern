import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInError } from '../redux/user/userSlice';

export default function SignIn() {
  const dispatch = useDispatch()
  const[formData, setFormData] = useState({});
  // const[error, setError] = useState(null);
  // const[loading, setLoading] = useState(false);
  const {error, loading} = useSelector((state) => state.user)// Takes the values[error and loading] from the initialState in userSLice throught the reducers that we defined in the store with the name of user(we can read data from the store using useSelector)
  const navigate = useNavigate();
  const formHandler = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method: 'POST',// Default is GET so we use the options parameters of fetch() to edit configurations 
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),// Only string values can be sent through http
      })
      const data = await res.json(); // returns error json or sign in success message as we have made it to return 
      console.log(data);
      if(data.success === false){
        dispatch(signInError(data.message))
        return;
      }
      dispatch(signInSuccess(data))// we pass in the json that we received
      navigate('/')
    } catch (error) {
      dispatch(signInError(error.message))
      console.error(error);
    }
  }
  return (
    <div className='max-w-lg mx-auto my-5'>
    <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-2 '>
        <input required onChange={formHandler} type='email' placeholder='email' className='p-2 rounded-lg border-solid border' id='email'/>
        <input onChange={formHandler} type='password' placeholder='password' className='p-2 rounded-lg border-solid border' id='password'/>
        <button disabled={loading} onClick={submitHandler} type='submit' className='bg-orange-400 p-2 rounded-lg disabled:opacity-70 hover:opacity-85'>{loading ? 'Loading' : 'Sign In'}</button>
      </form>
      <div>
        <div className='flex gap-2 mt-3'>
          <p>New to IsekaiMart</p> <Link to={'/signup'}><span className='text-blue-500'>Sign Up</span></Link>
        </div>
        {error && <p className='text-red-400'>{error}</p>}
      </div>
    </div>
  )
}
