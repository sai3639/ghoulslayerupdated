import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Home from './Home';
import PlayerScreen from './playerScreen';
import ContinueAsSai from './continueAsSai';
import ContinueAsChi from './continueAsChi';
import ContinueAsTy from './continueAsTy';
import GhoulScreen from './ghoulScreen';
import AddToDo from './addToDo';
import List from './List';



function App() {
  return (
   <>
    <Routes>
      
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/playerScreen' element={<PlayerScreen/>}/>
      <Route exact path='/continueAsSai' element={<ContinueAsSai/>}/>
      <Route exact path='/continueAsChi' element={<ContinueAsChi/>}/>
      <Route exact path='/continueAsTy' element={<ContinueAsTy/>}/>
      <Route exact path='/ghoulScreen' element={<GhoulScreen/>}/>
      <Route exact path='/addToDo' element={<AddToDo/>}/>
      <Route exact path ='/List' element = {<List/>}/>
    </Routes>
   
   </>
   
  );
}

export default App;
