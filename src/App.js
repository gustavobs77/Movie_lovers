import Home from './Pages/Home/Home';
import Filmes from './Pages/Filmes/Filmes';
import Rotas from './Rotas/Rotas';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <Rotas/>
      
    </div>
  );
}

export default App;
