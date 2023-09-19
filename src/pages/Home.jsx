import { Header } from "pages/Header";
import { Outlet } from "react-router-dom";


export const Home = () => {

return (
    <>
    <Header/>
   
    <Outlet/>
  </>
  );
}