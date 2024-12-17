import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  console.log(email);
  console.log(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === "immu@gmail.com" && password === '123456'){
        const user = {
          name: 'Moahhmad Imran',
          email: 'immu@gmail.com',
          password: 123456,
          address: 'Barishal',
          hobby: 'Programming'
        }
        navigate('/profile',{state: user})
    }
    else {
    
      toast.error("Envalid Email or Password");
      

    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen ml-20 mt-20">
      <h2 className="text-2xl font-bold mb-4">User SignIn</h2>
      <form onSubmit={handleSubmit} className="max-w-60 ">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input onChange={handleEmailChange} type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input onChange={handlePasswordChange} type="password" className="grow" placeholder="Password" />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-[18px] font-bold py-2 mt-2 text-white px-4 rounded w-full"
        >
          SignIn
        </button>
      </form>
       <ToastContainer position="top-center"/>
    </div>
  );
};

export default SignIn;
