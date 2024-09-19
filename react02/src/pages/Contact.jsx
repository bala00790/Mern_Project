// import NavBar from '../components/NavBar'
// const Contacts = () => {
//     return(
//         <>
       
//         </>
//     )
// }
// export default Contacts

import  { useState, useRef } from 'react';
import Navbar from "../components/NavBar";

const Contact = () => {
  
  const [isPopupVisible, setPopupVisible] = useState(false);
  
 
  const [loginResult, setLoginResult] = useState('');

 
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    
   
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    
    if (email === 'user@example.com' && password === 'password123') {
      setLoginResult('Login successful!');
      setPopupVisible(false); 
    } else {
      setLoginResult('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 text-center text-xl font-semibold">Contact</div>

     
      <button
        onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>

      
      {loginResult && (
        <div className="text-center mt-4 text-red-500">
          {loginResult}
        </div>
      )}

      
      {isPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Login</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  ref={emailRef} 
                  placeholder="Enter your email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  ref={passwordRef} 
                  placeholder="Enter your password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Login
              </button>
              <button
                type="button"
                onClick={togglePopup}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;