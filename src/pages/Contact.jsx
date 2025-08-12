import React, { useState } from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters long';
    if (name.trim().length > 50) return 'Name must be less than 50 characters';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters long';
    if (message.trim().length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return validateName(value);
      case 'email':
        return validateEmail(value);
      case 'message':
        return validateMessage(value);
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.message = validateMessage(formData.message);

    setErrors(newErrors);
    
    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email subject and body
      const subject = encodeURIComponent('Contact from Cirakas Website');
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      
      // Redirect to Gmail compose with pre-filled content
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@cirakas.com&su=${subject}&body=${body}`;
      
      // Open Gmail in a new tab
      window.open(gmailUrl, '_blank');
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClasses = "w-full bg-transparent border rounded-md px-4 py-2 text-white placeholder-gray-300 focus:outline-none transition-all duration-300";
    const hasError = errors[fieldName];
    
    if (hasError) {
      return `${baseClasses} border-red-500 focus:border-red-500`;
    }
    
    return `${baseClasses} border-gray-400 focus:border-[#ff5722]`;
  };

  return (
    <div className="w-full flex justify-center items-center  pb-8 px-4" id="contact-section">
      <div className="w-full lg:w-[80%] bg-[url(/contact.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center py-32 sm:py-20 rounded-[60px] lg:rounded-[20rem]">
        <h2 className="text-white text-5xl font-bold mb-8 text-center">
          Get In Touch<span className="text-[#ff5722]">.</span>
        </h2>
        <form onSubmit={handleSubmit} className="w-[80%] md:w-[60%] flex flex-col gap-4 items-center">
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className={getInputClassName('name')}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1 text-left w-full">{errors.name}</p>
            )}
          </div>
          
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className={getInputClassName('email')}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1 text-left w-full">{errors.email}</p>
            )}
          </div>
          
          <div className="w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className={getInputClassName('message')}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1 text-left w-full">{errors.message}</p>
            )}
          </div>
          
          {/* Get In Touch Button */}
          <div className="explore-btn group flex items-center justify-center mt-5">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#FF4B26] text-[0.875rem] sm:text-[1rem] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-[#e63e1d]'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Get In Touch'}
            </button>
            <div className={`arrow-icon text-[1.25rem] sm:text-[1.5rem] p-2.5 sm:p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 transition-all duration-300 ${
              isSubmitting ? 'opacity-50' : 'group-hover:ml-2'
            }`}>
              <BsArrowUpRightCircle />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact