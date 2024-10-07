'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // If using App Router, else use 'next/router'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Manage login/signup toggle state
  const [name, setName] = useState('');  // Only needed for sign-up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login logic
      if (email === 'user@example.com' && password === 'password') {
        router.push('/dashboard'); // Redirect after successful login
      } else {
        alert('Invalid email or password');
      }
    } else {
      // Handle sign-up logic
      if (name && email && password) {
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
        router.push('/login'); // After sign-up, redirect to login or dashboard
      } else {
        alert('All fields are required for sign-up!');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name field - only show if signing up */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
                required={!isLogin}
              />
            </div>
          )}

          {/* Email field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </form>

        {/* Toggle Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-indigo-500 hover:underline"
              >
                Sign up here
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-indigo-500 hover:underline"
              >
                Log in here
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
