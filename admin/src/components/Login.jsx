import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import './Style1.css'

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
             
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <div className="form-container">
    <div className="form-box">
        <h1 className="title">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className="input-group">
                <p className="label">Email Address</p>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                />
            </div>
            <div className="input-group">
                <p className="label">Password</p>
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" 
                    type="password" 
                    placeholder="Enter your password" 
                    required 
                />
            </div>
            <div className="relt">
            <button className="btn" type="submit">Login</button>
            <button className="btn1">Signup</button>
            </div>
            
        </form>
    </div>

    {/* Bubble Effect */}
    <div className="bubble-container">
        {[...Array(40)].map((_, index) => (
            <span 
                key={index} 
                style={{ "--i": index + 1, "--left": Math.random() * 100 + "%" }} 
            ></span>
        ))}
    </div>
</div>



  )
}

export default Login