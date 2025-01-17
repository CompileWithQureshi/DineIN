import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import logo from  '/src/assets/Logo.svg';

function Login() {
  const navigate = useNavigate();

  // State for toggling between User and Admin
  const [toggle, setToggle] = useState(true);

  const handleToggle = (event) => {
    event.preventDefault(); // Prevent button click from submitting the form
    const buttonId = event.target.id;

    if (buttonId === 'SignUp') {
      navigate('/signup'); // Navigate to the SignUp page
    } else {
      setToggle(true); // Keep login on current page
    }
  };

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      UserName: '',
      PhoneNumber: '',
      password: '',
    },
  });

  // Regex for phone number validation
  const phoneNumberRegex = /^[6-9]\d{9}$/;

  // Form submission handler
  const onSubmit = (data) => {
    if (data.PhoneNumber && data.password) {
    //   navigate('/scanner'); // Navigate to User dashboard
    } else {
      console.log('Input field is empty');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="flex flex-col items-center border-2 p-8 h-[750px]"
        style={{
          backgroundImage: `url(/bottomImage.png), url(/topbkImage.png)`,
          backgroundSize: `100%, 30%`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `bottom, top left`,
        }}
      >
        {/* Logo and Branding */}
        <div className="text-center">
          <img src={logo} alt="logo" className="w-24 h-auto mx-auto my-2" />
          <img src="./Logotext.png" alt="logo text" className="w-28 mx-auto my-2" />
          <p className="text-center my-1 text-gray-500 font-semibold">FLAVORS FOR ROYALTY</p>
        </div>

        {/* Form Container */}
        <div className="mt-10 p-10 bg-white w-80 border rounded-lg">
          <form
            action="post"
            className="flex flex-col items-center "
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* User/Admin Toggle */}
            <div className="flex border-2 h-12 p-2 rounded-2xl justify-between items-center w-64 bg-gray-100">
              <button
                className={`${toggle ? 'bg-red-600 font-semibold text-white' : 'bg-transparent font-medium text-black'} rounded-xl text-center h-8 w-28`}
                onClick={handleToggle}
                id="User"
              >
                Login
              </button>
              <button
                className={`${!toggle ? 'bg-red-600 font-semibold text-white' : 'bg-transparent font-medium text-black'} rounded-xl text-center h-8 w-28`}
                onClick={handleToggle}
                id="SignUp"
              >
                SignUp
              </button>
            </div>

            {/* Input Fields */}
            <input
              type="number"
              className="border-2 w-56 h-12 p-2 rounded-md my-2 bg-gray-100"
              placeholder="Phone Number"
              {...register('PhoneNumber', {
                required: 'Number is required',
                pattern: {
                  value: phoneNumberRegex,
                  message: 'Invalid phone number format',
                },
              })}
            />
            <p className="text-red-400 text-start text-sm font-semibold w-56">
              {errors.PhoneNumber?.message}
            </p>

            <input
              type="password"
              className="border-2 w-56 h-12 p-2 rounded-md my-2 bg-gray-100"
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 5,
                  message: 'Password should be at least 5 characters',
                },
              })}
            />
            <p className="text-red-400 text-start text-sm font-semibold w-56">
              {errors.password?.message}
            </p>
            {/* Submit Button */}
            <button
              className="w-56 bg-red-500 h-12 rounded-md font-bold text-white mt-1"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
