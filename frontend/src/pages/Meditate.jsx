import { useNavbarHeight } from "../components/NavbarHeightContext";
import {Link} from 'react-router-dom'

const Meditate = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <h1>Meditations</h1>
      <Link to='meditate/mindfulness'>Mindfulness Meditations</Link>
      <br />
      <Link to='meditate/calm'>Calming Meditations</Link>
    </div>
  );
};

export default Meditate;
