
import React, { useState } from 'react'
import axios from "axios"

import { useQuery } from 'react-query';



export default function Login () {
    function handleClick () {
      setIsNewUser(!isNewUser)
    }

    const [isNewUser, setIsNewUser] = useState(false)
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    })

    return (
      <div className='flex min-h-screen'>

        {/* Login/Register Tab */}
        <div className='flex flex-col items-center justify-center w-6/12'>
          <div className='flex flex-col min-h-[400px] justify-center p-2 rounded-md w-6/12'>
            <p className='font1 text-left text-2xl'>{isNewUser ? 'Create account' : 'Welcome back'}</p>
            <small className='mt-1 mx-1 text-gray-600'>Please enter your details</small>
            <input className='border border-gray-400 bg-white font2 mt-6 outline-none p-2 rounded-md w-full' placeholder='email' type='text' />
            <input className='border border-gray-400 bg-white font2 mt-6 outline-none p-2 rounded-md w-full' placeholder='password' type='password' />

            <div className='flex justify-between mt-2'>
              <div className='flex justify-start'>
                <input className='cursor-pointer' type='checkbox' />
                <span className='font2 mx-2 text-sm'>Remember me</span>
              </div>
              <span className='font2 text-sm'>{isNewUser?'':'Forgot password'}</span>
            </div>

            <button className='bg-gradient-to-r font-bold from-gray-800 to-gray-600 mt-6 p-2 rounded-md text-white w-full'>{isNewUser ? 'Sign up' : 'Sign in'}</button>
            <button className='border border-gray-600 font-bold mt-3 p-2 rounded-md text-gray-600 w-full'>
              Sign {isNewUser? 'up': 'in'} with G<span className='text-orange-400'>o</span><span className='text-red-500'>o</span>gl<span className='text-blue-600'>e</span>
            </button>

            <p className='mt-4 text-center text-sm'>
              {isNewUser?'Already a member?':'Dont have an account'}
              <span className='cursor-pointer font-bold hover:text-orange-600 mx-1' onClick={handleClick}>{isNewUser?'Sign in':'Sign up'}</span>
            </p>

          </div>
        </div>

        <div className='bg-gray-100 w-6/12'></div>
        
      </div>
    );
}



// export default function () {
//     const [credential, setCredential ] = useState({email: '', password:''  })
//     // const {data, isloading, isError, refetch } = useQuery("auth", fetchUsers, {enabled:false});
//     const changeCredentail = (label, value) => {
//         setCredential(prev => ({...prev, [label]:value }))
//         console.log(credential)
//         // console.log(value)
//     }
    
//     const fetchUsers = async () => {
//         const {data}= await axios.post("http://127.0.0.1:8000/auth/login", credential);
//         console.log(data)
//         return data
//       };
//   return (
//     <div>
//     <h1>Login</h1>
//         <form>
//             <label id='email' >Email</label>
//             <input for="email" onChange={({target:{value}})=>changeCredentail("email", value)}/>
//             <label id='email' >Password</label>
//             <input for="Password" onChange={({target:{value}})=>changeCredentail({label:"password", value})}/>
//         </form>
//         <button onClick={() =>fetchUsers()}>submit</button>ß
//     </div>
//   )
// }
