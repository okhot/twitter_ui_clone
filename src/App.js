import './App.css';
import Desktop from './components/layouts/Desktop/components/Desktop';
import Mobile from './components/layouts/Mobile/mobile';
import { useMediaQuery } from './useMediaQuery';

function App() {

  const isMobile = useMediaQuery('(max-width: 425px)')

  return (
    <div>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default App;