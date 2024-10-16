import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import  Footer  from '../precomponent/Footer';
// import Navbar from '../header'
import {Link} from "react-router-dom"
import { Player } from '@lottiefiles/react-lottie-player';
import LoginAnimation from '../../assets/LoginAnimation.json'; // Assuming the correct path to the Lottie file
import './Styles.css';
import { useForm } from 'react-hook-form';
import Navbar from '../precomponent/Navbar';

const Signup = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Email:', data.email);
    console.log('Password:', data.password);
  };

  return (
    <div className="overflow-hidden">
      <Navbar /> 
      <div className="mt-16 min-h-screen bg-transparent flex items-center justify-center py-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl bg-transparent rounded-3xl shadow-[10px] overflow-hidden neon-border-purple"> 
          {/* Neon border applied to this main div */}

          {/* Left Section with Lottie Animation */}
          <div className="flex w-full md:w-1/2 bg-[#ffffff0e] p-6 md:p-12 flex-col justify-center items-center">
            <Player autoplay loop src={LoginAnimation} style={{ height: '220px', width: '220px' }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-6">Empower Your Services</h2>
            <p className="text-white mt-4 text-center leading-relaxed">
              HoloModular ensures top-level security and privacy for your data. We will never share or sell your personal information.
            </p>
          </div>

          {/* Right Section with Form */}
          <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2ec0] mb-2 text-center">Register Your Free Account!</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2ec2] mb-8 text-center">Create an Account</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email format'
                      }
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters'
                      }
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => value === watch('password') || 'Passwords do not match'
                    })}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>}
              </div>

              {/* Checkbox for Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  {...register('terms', {
                    required: 'You must agree to the Terms of Use and Privacy Policy'
                  })}
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-[#009ca0]">Terms of Use</a> and <a href="#" className="text-[#009ca0]">Privacy Policy</a>
                </label>
              </div>
              {errors.terms && <p className="text-red-500 text-sm mt-2">{errors.terms.message}</p>}
<p className="text-sm text-gray-700">Already have any account <Link className=" font-bold text-purple-600 hover:underline" to="/signin"> Login Now</Link> </p>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button className="w-40 border rounded ">
                  <span className='text-black'> Sign Up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
