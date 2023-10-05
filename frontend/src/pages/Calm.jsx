import { useNavbarHeight } from "../components/NavbarHeightContext";

const Calm= () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <h1>Calm</h1>
    </div>
  );
};

export default Calm;
