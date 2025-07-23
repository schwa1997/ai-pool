import type { NextPage } from "next";
import PromptPyramidCN from "./AI/components/PromptPyramidCN";
import PromptNotes from "./AI/components/PromptComponent";



const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 grid grid-column p-4">
      {/* <Cover />
      <PromptPyramid /> */}
      <PromptPyramidCN />
      <PromptNotes/>

    </div>
  );
};

export default Home;