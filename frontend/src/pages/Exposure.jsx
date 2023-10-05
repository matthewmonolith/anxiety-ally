import { useNavbarHeight } from "../components/NavbarHeightContext";
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';


const Exposure = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <h1>Exposure Plan</h1>
    </div>
  );
};

export default Exposure;
