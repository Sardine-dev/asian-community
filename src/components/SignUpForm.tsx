import React, { useState } from 'react';

const SignUpForm: React.FC = () => {
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { lastName: '', firstName: '', email: '', password: '' };

    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last Name is required.';
      valid = false;
    }
    if (!form.firstName.trim()) {
      newErrors.firstName = 'First Name is required.';
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email Address is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format.';
      valid = false;
    }
    if (!form.password) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: Add submit logic
    alert('Sign up submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded font-semibold hover:bg-green-600 transition">Sign Up</button>
    </form>
  );
};

export default SignUpForm; 