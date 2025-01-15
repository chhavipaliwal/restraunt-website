import React, {useState} from 'react';

const Profile = () => {
    const [data, setData] = useState({
        name: "Chhavi",
        email: "chhavi@gmail.com",
        password: "asdfad",
        phone: "adfad"
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setData({
            ...data,
            [name]: value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }



    return (
        <div className="flex flex- col items-center justify-center h-screen bg-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4 border border-gray-500 rounded-lg"
        >
          <h1 className="text-2xl font-bold text-center">Profile</h1>
          <div className=" mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              name="name"
              className="border border-gray-400 p-2  rounded-lg"
              type="text"
              value={data.name}
            onChange={handleChange}
             
            />
          </div>
          <div className=" mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              name="email"
              className="border border-gray-400 p-2  rounded-lg"
              type="email"
              value={data.email}
              onChange={handleChange}
             
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              name="password"
              className="border border-gray-400 p-2 mb-6 rounded-lg"
              type="password"
             
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
};

export default Profile;