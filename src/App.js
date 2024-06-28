import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 bg-blue-100 font-sans">
        <div className="flex flex-row flex-1 overflow-hidden">
          <div className="w-1/4 bg-white border-r border-gray-200">
            <Sidebar />
          </div>
          <div className="w-2/4 bg-white border-r border-gray-200">
            <MidArea />
          </div>
          <div className="w-1/4 bg-white">
            <PreviewArea />
          </div>
        </div>
      </div>
    </div>
  );
}
