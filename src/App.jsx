import './App.css';
import Patch from './components/Patch';
import Spent from './components/Spent';
import Bugdet from './components/Budget';
import Expenses from './components/Expenses';
import Search from './components/Search';
import  {ProjectContextProvider}  from './hooks/budget_context';




function App() {



  return(
    
    <div className='global_container'>
      <h1>My Budget Planner</h1>
      <ProjectContextProvider>
      <div className='app_container'>
        <Bugdet/>
        <Patch/>
        <Spent/>
      </div>
      <Search/>
      <Expenses/>
      </ProjectContextProvider>
   </div>
   
  )
}


export default App;


      