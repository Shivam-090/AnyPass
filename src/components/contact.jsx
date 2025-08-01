import React from 'react';

function Contact() {
  return (
    <>
          <div className="absolute inset-0 -z-10 h-full w-full items-center backdrop-blur-md px-5 py-24 [background:radial-gradient(100%_90%_at_50%_10%,theme(colors.blue.50)_40%,theme(colors.sky.300)_100%)]"></div>

    
    <div className="min-h-[88.6vh] flex items-center justify-center px-4 py-12">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Me</h1>
        <p className="text-gray-700 text-lg mb-6">
          I'd love to hear from you! For any inquiries, feedback, support, or any kind of suggestion/contributions feel free to reach out via email.
        </p>

        <div className="bg-blue-100 text-blue-800 font-medium py-3 px-6 rounded-lg inline-block shadow-md">
          📧 <a href="mailto:shivamu0900@gmail.com" className="underline">shivamu0900@gmail.com</a>
        </div>

        <p className="text-sm text-gray-500 mt-8">I'll get back to you as soon as possible.</p>
      </div>
    </div>
</>  );
}

export default Contact;
