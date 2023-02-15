
import './App.scss';
import ListTodo from './ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  import 'react-toastify/dist/ReactToastify.css';
  import About from './About';
  



const  App =()=> {
  
  return (
    <Router><div className="App">
    <header className="App-header">
     
    

    </header>
    


   
          <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Switch>
          <Route path="/" exact>
         <About/>
          </Route>
          <Route path="/todolist" >
          <ListTodo/>
          </Route>
          
        </Switch>
  </div></Router>
    
      
   
 
  );
}

export default App;
