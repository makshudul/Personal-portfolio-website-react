import logo from './logo.svg';
import './App.css';
import Header from './component/Shared/Header/Header';
import Footer from './component/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
