// src/App.js
import React from "react";
import {Flex} from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import ContentBox from "./Components/ContentBox";



const App = () => {
  return (
    <Flex>
      <Sidebar />
      <ContentBox />
    </Flex>
  );
};

export default App;
