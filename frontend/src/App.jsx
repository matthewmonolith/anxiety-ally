import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <>
    <ChakraProvider>
      <Navbar />
      <ToastContainer />
      <Outlet />
    </ChakraProvider>
    </>
  )
}

export default App;
 