
import './App.css';
import Header from './components/Header';
import WidgetSection from './components/WidgetSection';
import { Provider } from 'react-redux';
import store from './utils/store';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Provider store ={store}>
      <Header />
      <Outlet />
    </Provider>  
  
    </div>
  );
}


export default App;
