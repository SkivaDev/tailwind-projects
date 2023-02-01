import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-yellow-100 h-screen w-screen flex justify-center items-center">
      <div className="h-auto w-auto bg-white rounded-xl py-6 px-8 flex items-center gap-5 box-border">
        <div className="h-14 w-14">
          <div className="bg-[url('https://tailwindcss.com/img/erin-lindford.jpg')] w-full h-full bg-cover bg-no-repeat rounded-full" ></div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-black">Erin LindFord</h2>
          <p className="text-neutral-600">Product Enginner</p>
          <button className="text-violet-700 border rounded-lg hover:bg-violet-700 hover:text-white">Message</button>
        </div>
      </div>
    </div>
  );
}

export default App;
