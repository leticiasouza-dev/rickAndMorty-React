import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled, { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <>
      <EstilosGlobais/>
      <Header/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default App;
