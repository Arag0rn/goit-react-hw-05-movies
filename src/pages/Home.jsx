import { Header } from "pages/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";


export const Home = () => {

return (
    <>
    <Header/>
   
    <Outlet/>
  </>
  );
}