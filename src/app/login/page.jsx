'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // If using Next.js App Router

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle login errors

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Simulate login logic (replace with actual API calls)
    if (email === 'user@example.com' && password === 'password') {
      router.push('/dashboard'); // Redirect after successful login
    } else {
      setError('Invalid email or password'); // Show error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
              Log In
            </button>
          </div>
        </form>

        {/* Toggle to Registration page */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <button
            onClick={() => router.push('/register')} // Navigate to the register page
            className="text-indigo-500 hover:underline"
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
