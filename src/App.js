import React from "react";
import { useTheme } from "@mui/material/styles";
import Travel from "./components/Travel/Travel";
import Main from "./layouts/Main/Main";
import Page from "./components/Page";
import Advertisement from "./components/Advertisement/Advertisement";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const theme = useTheme();
  return (
    <Page>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Travel />} />
            <Route path="/patner" element={<Advertisement />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Page>
  );
};

export default App;
