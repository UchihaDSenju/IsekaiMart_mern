import React from 'react'

export default function SignUp() {
  return (
    <div className='max-w-lg mx-auto my-5'>
    <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-2 '>
        <input type='text' placeholder='username' className='p-2 rounded-lg border-solid border' id='username'/>
        <input type='email' placeholder='email' className='p-2 rounded-lg border-solid border' id='email'/>
        <input type='password' placeholder='password' className='p-2 rounded-lg border-solid border' id='password'/>
        <button type='submit' className='bg-orange-400 p-2 rounded-lg disabled:opacity-80 hover:opacity-85'>Sign Up</button>
      </form>
      <div>
        <div className='flex gap-2 mt-3'>
          <p>Already a member</p> <span className='text-blue-500'>Sign In</span>
        </div>
      </div>
    </div>
  )
}
