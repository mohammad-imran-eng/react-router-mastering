import { useLocation } from "react-router-dom";

const Profile = () => {

    const {state} = useLocation();
    console.log(location);
  return (
    <div className="h-screen grid justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-green-500">
            Name: {state.name}
          </h2>
          <h2 className="card-title text-green-500">
            Email: {state.email}
          </h2>
          <h2 className="card-title text-green-500">
            Password: {state.password}
          </h2>
          <h2 className="card-title text-green-500">
            Address: {state.address}
          </h2>
          <h2 className="card-title text-green-500">
            Hobby: {state.hobby}
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
