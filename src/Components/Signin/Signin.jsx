import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  Footer  from '../precomponent/Footer';
import Navbar from '../header'
import { useForm } from 'react-hook-form';
import signinimg from '../../assets/signinimg.png'

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

 

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-poppins flex flex-col lg:flex-row bg-[#0000003a]">
        {/* Left Section - Graphic and Welcome Text */}
        <div className=" mt-7 bg-[#ffffff0e] flex-1 flex flex-col items-center text-white p-6 h-screen neon-border" data-aos="fade-down" data-aos-delay="300">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#566fdf] to-[purple] tracking-wider mt-20 text-center drop-shadow-lg">
            Welcome
          </h1>
          <p className="text-sm pt-2  sm:text-[20px]" >
            Introducing Microservices Foundation
          </p>

         <img src={signinimg} className='w-[500px]'/>



        </div>

        {/* Right Section - Sign In Form */}
        <div className="flex-1 flex justify-center items-center p-6 h-screen neon-border">
          <div className="  p-8 w-[500px] h-[600px] mt-24 rounded-2xl   transform transition-transform " >
            <h1 className="mt-10  text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#566fdf] to-[purple]">
              Sign In
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-[#ffffffdc] text-sm font-semibold mb-1" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border border-[#ffffffdc] rounded-lg w-full py-2 px-3 shadow-sm neon-border">
                  <FaEnvelope className="text-[#ffffffdc] mr-2" />
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                    className={`flex-grow appearance-none outline-none bg-transparent text-[#ffffffdc] placeholder-gray-400 focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-4" >
                <label className="block text-[#ffffffdc] text-sm font-semibold mb-1" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border border-[#ffffffdc] rounded-lg w-full py-2 px-3 shadow-sm neon-border">
                  <FaLock className="text-[#ffffffdc] mr-2" />
                  <input
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                      },
                    })}
                    className={`flex-grow appearance-none outline-none bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    {...register('rememberMe')}
                    className="mr-2 text-[#ffffffdc] focus:ring-[#ffffffdc] rounded"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-700">
                    Remember Me
                  </label>
                </div>
                <div>
                  <a href="/forgot-password" className="text-sm text-[#ffffffdc] hover:text-[#007f85] transition-colors duration-300">
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center mb-4">
                <button>
                  <span className="text-white">Sign In</span>
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-[#ffffffdc]" >
              <p>No Account? <span className="text-[#ffffffdc] font-semibold">Register Here!</span></p>
              <p className="text-sm mt-1 text-[#ffffffdc]">Registration takes less than a minute but gives you access to your free online account!</p>
              <Link to="/Registered" className="inline-block mt-2 text-[#ffffffdc] hover:text-[#aab0b1] font-bold transition-colors duration-300">
                Register <FaUserCircle className="inline-block ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
