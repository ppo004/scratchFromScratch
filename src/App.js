import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar /> <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import MidArea from './components/MidArea';
// import Sidebar from './components/Sidebar';

// const App = () => {
//   return (
//     <div>
//       <h1>Scratch Clone</h1>
//       <div>
//         <Sidebar />
//       </div>
//       <div>
//         <h2>Script Area</h2>
//         <MidArea />
//       </div>
//     </div>
//   );
// };

// export default App;

