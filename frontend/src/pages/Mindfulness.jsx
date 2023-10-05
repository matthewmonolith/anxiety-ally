import { useNavbarHeight } from "../components/NavbarHeightContext";

const Mindfulness = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <h1>Mindfulness</h1>
    </div>
  );
};

export default Mindfulness;
