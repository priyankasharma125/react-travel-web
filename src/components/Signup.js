import React from 'react'
import SignImg from '../assets/signup.avif';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import './SignupStyles.css';

const Signup = () => {
  return (
    <>
      <div className='form-con'>
        <h2>Signup</h2>
        <div className='form'>
          <div className='detail'>
            <form>
              <div className='row-1'>
                <label><FaUser /></label>
                <input type='text' placeholder='Username' />
              </div>
              <div className='row-1'>
                <label><FaEnvelope /></label>
                <input type='email' placeholder='Email' />
              </div>
              <div className='row-1'>
                <label><FaLock /></label>
                <input type='password' placeholder='Password' />
              </div>
              <p>Already a member? <span>Log in</span></p>
              <button>Signup</button>
            </form>
          </div>
          <div className='avatar'>
            <img src={SignImg} alt="content"></img>
          </div>
        </div>
      </div>


    </>
  )
}

export default Signup;