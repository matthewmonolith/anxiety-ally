// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { 
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'
import { NavbarHeightProvider } from './components/NavbarHeightContext';
import Home from './pages/Home';
import About from './pages/About'
import NotFound from './pages/NotFound';
import Meditate from './pages/Meditate';
import Mindfulness from './pages/Mindfulness';
import Calm from './pages/Calm';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Exposure from './pages/Exposure';
import Journal from './pages/Journal';
import ProfileScreen from './pages/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import Community from './pages/Community';
import UpdateProfile from './pages/UpdateProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />


      <Route path='' element={<PrivateRoute />}>
        <Route path="profile">
          <Route index element={<ProfileScreen />} />
          <Route path="myplan" element={<Exposure />} />
          <Route path="myjournal" element={<Journal />} />
          <Route path="update" element={<UpdateProfile />}></Route>
        </Route>
        <Route path='/community' element={<Community />} ></Route>
      </Route>

      <Route path="meditate">
        <Route index element={<Meditate />} />
        <Route path="mindfulness" element={<Mindfulness />} />
        <Route path="calm" element={<Calm />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <NavbarHeightProvider>
        <RouterProvider router={router} />
      </NavbarHeightProvider>
    </React.StrictMode>
  </Provider>
);





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <BrowserRouter>
//       <NavbarHeightProvider>
//         <App />
//       </NavbarHeightProvider>
//       </BrowserRouter>
//     </ChakraProvider>
//   </React.StrictMode>
// );