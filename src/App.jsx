import Counter from "./Counter";
import AzkarCards from './components/AzkarCards';
import './components/AzkarCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
<h1 className="page-title" style={{textAlign:"center"}}>أذكار المسلم</h1>
      <AzkarCards />
    </div>
  );
}

export default App;
