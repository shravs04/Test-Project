import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Topbar } from './Components/Topbar/Topbar';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './Containers/Homepage/Homepage';
import {Route, BrowserRouter} from 'react-router-dom';
import { Seriespage } from './Containers/Homepage/Seriespage/Seriespage';
import { Moviespage } from './Containers/Homepage/Moviespage/Moviespage';


function App() {

  const [tile, settile] = React.useState("Tiles");
  // const [movies, setmovies] = React.useState("Movies");
  const setHeaderTitle = (data) =>{
    settile(data);
  }

  
  return (
    <BrowserRouter>
    <div className="App">
        <Topbar tile={tile}/>
        <Route exact path="/" render={(props) => <Homepage {...props} setHeaderTitle={setHeaderTitle}/> }/>
        <Route exact path="/seriespage" component={Seriespage}/>
        <Route exact path="/moviespage" component={Moviespage}/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
