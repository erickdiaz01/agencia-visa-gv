
import './App.css';
import { NavComponent } from './common/nav/Nav';
import { AppRouter } from './Router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <AppRouter/>
    </div>
  );
}

export default App;
