import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import data from './data';

function App() {

  var dt = data();
  return (
      <div className="App">
        <header className='header'>
          <AppHeader/>
          <br/>
          <Routes>
          {dt.map(item => {
              return (
                <Route exact path={item["link"]} element={item["component"]()} key={item}></Route>
              )
            })}
          </Routes>
        </header>
      </div>
  );
}

export default App;
