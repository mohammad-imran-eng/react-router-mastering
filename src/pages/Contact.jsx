import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const handleGoToHome = ()=> {
        navigate('/');
    }
    return (
        <div>
            <h2 className="text-2xl text-orange-500">This is Contact Page</h2>
            <button onClick={handleGoToHome} className="bg-blue-600 text-white py-2 px-4 rounded mt-5">Go to Home page</button>
        </div>
    );
};

export default Contact;