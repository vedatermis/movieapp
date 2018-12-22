import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './Components/Header';
import "semantic-ui-css/semantic.min.css";
import Footer from "./Components/Footer";
import { Container } from 'semantic-ui-react';
import MoviesPage from './Components/Pages/MoviesPage';
import NewMoviePage from './Components/Pages/NewMoviePage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Container text>
        {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
            different approach.
            An empty Visibility element controls the need to change the fixing of element below, it also uses height
            and width params received from its ref for correct display.
          */}
        <Route exact path="/movies" component={ MoviesPage } />
        <Route exact path="/movies/addnew" component = { NewMoviePage }/>

      </Container>
      <Footer />
      </div>
    );
  }
}

export default App;
