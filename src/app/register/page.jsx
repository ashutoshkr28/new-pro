'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // If using Next.js App Router

const RegisterForm = () => {
  const [name, setName] = useState(''); // Only for sign-up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle sign-up errors

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Simulate sign-up logic (replace with actual API calls)
    if (name && email && password) {
      console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
      router.push('/login'); // Redirect to login page after sign-up
    } else {
      setError('All fields are required for sign-up!'); // Show error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name field */}
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
              required
            />
          </div>

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
              Sign Up
            </button>
          </div>
        </form>

        {/* Toggle to Login page */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <button
            onClick={() => router.push('/login')} // Navigate to the login page
            className="text-indigo-500 hover:underline"
          >
            Log in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
