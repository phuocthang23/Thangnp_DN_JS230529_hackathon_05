import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./App.css";
import Round from "./Round";

function App() {
  return (
    <div>
      <div>
        <div className="mx-auto w-[1280px]">
          <h1 className="text-3xl text-">score-keeper</h1>
          <form className=" text-center">
            <div className="flex my-4 w-1/2">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0  border-gray-300 rounded-l-md">
                <FaUserCircle />
              </span>
              <input
                type="text"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500  w-full  text-sm p-2.5  "
              />
            </div>

            <div className="flex my-4 w-1/2">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0  border-gray-300 rounded-l-md">
                <FaUserCircle />
              </span>
              <input
                type="text"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500  w-full  text-sm p-2.5  "
              />
            </div>
            <div className="flex my-4 w-1/2">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0  border-gray-300 rounded-l-md">
                <FaUserCircle />
              </span>
              <input
                type="text"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500  w-full  text-sm p-2.5  "
              />
            </div>
            <div className="flex my-4 w-1/2">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0  border-gray-300 rounded-l-md">
                <FaUserCircle />
              </span>
              <input
                type="text"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500  w-full  text-sm p-2.5  "
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 float-left "
            >
              ADD Player
            </button>
          </form>
        </div>
      </div>
      <div className="mt-[80px]">
        <Round />
      </div>
    </div>
  );
}

export default App;
