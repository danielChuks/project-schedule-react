import './App.css';
import InputSechdule from './components/InputSchedule';
import ListSchedules from './components/ListSchedule';
import Preference from './components/Preference';

function App() {
  return ( 
    <div>
        <Preference/>
        <InputSechdule />
        <ListSchedules />
    </div>

  );
}

export default App;
