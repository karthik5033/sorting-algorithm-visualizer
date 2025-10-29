import React from "react";
import Header from "./componenets/Header";
import Form from "./componenets/Form";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <div className="flex-1 flex flex-col justify-start items-center">
        <Form />
      </div>
      <input type="hidden" id="isSorted" defaultValue="0" aria-hidden="true" />
    </div>
  );
};

export default App;
