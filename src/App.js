import './App.css';
import { About } from './Components/About';
import { IntroArea } from './Components/IntroArea';
import { NavBar }  from './Components/NavBar';
import { UxWriting } from './Components/UxWriting';

function App() {
  return (
    <div>
      <NavBar />
      <IntroArea />
      <UxWriting />
      <About />
    </div>
  );
}

export default App;
