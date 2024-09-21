import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './menu/Home';
import VirtualDOM from './menu/VirtualDOM';
import Component from './menu/Component';
import Layout from './menu/Layout';
import Props from './menu/Props'
import State from './menu/State';
import LifeCycle from './menu/LifeCycle';
import Events from './menu/Events';
import Memo from './menu/Memo';
import Refs from './menu/Refs';
import Key from './menu/Key';
import ProviderContext from './menu/Provider';
import Forms from './menu/Forms';
import Storage from './menu/Storage';
import HOC from './menu/HOC';
import ReactRouter from './menu/ReactRouter';

function App() {
  return (
    <div className="App">
      <div className='App-all'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='virtualDOM' element={<VirtualDOM/>}/>
            <Route path='component' element={<Component/>}/>
            <Route path='props' element={<Props/>}/>
            <Route path='state' element={<State/>}/>
            <Route path='lifecycle' element={<LifeCycle/>}/>
            <Route path='events' element={<Events/>}/>
            <Route path='memo' element={<Memo/>}/>
            <Route path='refs' element={<Refs/>}/>
            <Route path='key' element={<Key/>}/>
            <Route path='context' element={<ProviderContext/>}/>
            <Route path='forms' element = {<Forms/>}/>
            <Route path='storage' element = {<Storage/>}/>
            <Route path='hoc' element = {<HOC/>}/>
            <Route path='reactrouter' element = {<ReactRouter/>}/>
          </Route>
        </Routes>
        </main>
        <footer>2024</footer>
      </div>
    </div>
  );
}

export default App;
