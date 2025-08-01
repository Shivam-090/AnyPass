import React from 'react';

function About() {
  return (
    <>
          <div className="absolute inset-0 -z-10 h-full w-full items-center backdrop-blur-md px-5 py-24 [background:radial-gradient(100%_90%_at_50%_10%,theme(colors.blue.50)_40%,theme(colors.sky.300)_100%)]"></div>



    <div className="min-h-[94vh] px-6 py-8 ">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
           <div className='flex-cols md:flex'>

            <span>About</span>
            <div>


            <span className='text-blue-400'>&lt;</span>
            Any
            <span className='text-blue-400'>Pass/&gt;</span>
            </div>
            </div></h1>

        <p className="text-gray-700 text-lg mb-6">
          <span className="font-semibold">AnyPass</span> is a secure and simple web application that helps you store your
          passwords and sensitive information in one place. Whether it's your email, bank account, or social media credentials,
          AnyPass keeps them encrypted and accessible only to you.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">🔐 How It Works</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Enter your credentials into a sleek and simple form.</li>
          <li>Your data is securely stored in a MongoDB database.</li>
          <li>Communication between frontend and backend is done via Express APIs.</li>
          <li>Passwords are encrypted before being stored for extra security.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">🧰 Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-blue-100 py-2 px-4 rounded shadow">React</div>
          <div className="bg-blue-100 py-2 px-4 rounded shadow">TailwindCSS</div>
          <div className="bg-blue-100 py-2 px-4 rounded shadow">Express.js</div>
          <div className="bg-blue-100 py-2 px-4 rounded shadow">MongoDB</div>
          <div className="bg-blue-100 py-2 px-4 rounded shadow">Node.js</div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-500 mb-2">🚀 Goal</h2>
        <p className="text-gray-700 text-lg">
          I aim to provide a secure and user-friendly experience for anyone who needs to manage their credentials without
          compromising on privacy. Your data is yours alone.
        </p>

        
      </div>
    </div>
    </>
  );
}

export default About;
