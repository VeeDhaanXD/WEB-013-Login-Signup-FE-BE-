import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const Home = () => {
  return (
    <div >
        <Header></Header>
        <div className="min-h-screen flex-col flex items-center justify-center bg-gray-700 text-white">
      <h1 className="text-4xl font-bold">🏠 Welcome to the Home Page!</h1>
      <Link to= "/login" className=" w-60px] h-[25px] bg-amber-500 rounded-xl px-[4px] py-[-4px] " >LogOut</Link>
    </div>
    </div>
  );
};

export default Home;
