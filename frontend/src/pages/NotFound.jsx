import { useNavbarHeight } from "../components/NavbarHeightContext";

const NotFound = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <h1>404 Not Found</h1>
    </div>
  );
};

export default NotFound;
