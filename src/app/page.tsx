"use client"
import type { NextPage } from "next";
import { useState } from "react";
import PromptPyramidCN from "./AI/components/PromptPyramidCN";
import PromptNotes from "./AI/components/PromptComponent";
import PostCover from "./AI/components/danshipper";
import Posture from "./Posture/posture";

const Home: NextPage = () => {
  const [activeComponent, setActiveComponent] = useState<string>("posture");

  const renderComponent = () => {
    switch (activeComponent) {
      case "pyramid":
        return <PromptPyramidCN />;
      case "notes":
        return <PromptNotes />;
      case "cover":
        return <PostCover title="" imageUrl="https://i.ytimg.com/vi/km3CxFRODFs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9A55zGE0XRS0kiMqrhg2Lh8GIQg" />;
      case "posture":
      default:
        return <Posture />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveComponent("posture")}
          className={`px-4 py-2 rounded-md ${
            activeComponent === "posture" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Posture
        </button>
        <button
          onClick={() => setActiveComponent("pyramid")}
          className={`px-4 py-2 rounded-md ${
            activeComponent === "pyramid" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Prompt Pyramid
        </button>
        <button
          onClick={() => setActiveComponent("notes")}
          className={`px-4 py-2 rounded-md ${
            activeComponent === "notes" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Prompt Notes
        </button>
        <button
          onClick={() => setActiveComponent("cover")}
          className={`px-4 py-2 rounded-md ${
            activeComponent === "cover" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Post Cover
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Home;