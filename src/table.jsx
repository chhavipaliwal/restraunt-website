import React, { useState } from "react";

const data = [
  {
    id: "1",
    name: "Zohn Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Ankit",
    email: "ankit@gmail.com",
    role: "Editor",
  },
  {
    id: "3",
    name: "Kitti",
    email: "kitti@gmail.com",
    role: "Editor",
  },
  {
    id: "4",
    name: "Shivanii",
    email: "Shivani@gmail.com",
    role: "User",
  },
  {
    id: "5",
    name: "Shivam",
    email: "Shivam@gmail.com",
    role: "User",
  },
];

const Table = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-500 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Stylish Table</h1>
        <input
          type="text"
          className="p-2 rounded-lg mb-4"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="  rounded-lg">
          <table className="min-w-full bg-white shadow-md rounded-lg   ">
            <thead className="">
              <tr className=" text-gray-600 text-sm  ">
                <th className=" py-3 px-6 text-center ">Index</th>
                <th className=" py-3 px-6 text-center ">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-center">Role</th>
                <th className="py-3 px-6 text-center ">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data
                .sort((a, b) => {
                  return a.name.localeCompare(b.name);
                })
                .filter((item) => {
                  return (
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.role.toLowerCase().includes(search.toLowerCase())
                  );
                })
                .map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-200 hover:bg-gray-100 ${
                      index % 2 == 0 ? "bg-red-100 , hover:bg-red-200 " : ""
                    }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {index}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="py-3 px-6 text-left">{item.email}</td>
                    <td className="py-3 px-6 text-center">{item.role}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        onClick={() => {
                          alert(item.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => {
                          alert(`are u deleting ${item.name}`);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

              {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  Jane Smith
                </td>
                <td className="py-3 px-6 text-left">jane.smith@example.com</td>
                <td className="py-3 px-6 text-center">Editor</td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
// array.filter(function(currentValue, index, arr), thisValue)
