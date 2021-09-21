import { Toolbar } from './pages/Toolbar'
import { ItemsPage } from './pages/Items/ItemsPage'
import { Maps } from './pages/Maps/Maps'
import { Home } from './pages/Home'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Loralon</h1>
      <div style = {{margin:"0% 3% 0% 3%"}}>
        <BrowserRouter basename={'/'} >
        <Toolbar/>
          <Switch>
            <Route path='/items'><ItemsPage/></Route>
            <Route path='/maps'><Maps/></Route>
            <Route path='/'><Home/></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
