import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="h-screen">
      <div className="relative h-4/5 block">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500 -skew-y-12 overflow-hidden origin-top-left -z-10"></div>
        <div className="">
          <div className="">
            <h1>The best app you've ever seen</h1>
            <p>You'll be blown away with all it does</p>
            <button>Sign up</button>
          </div>
          <div className="">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
