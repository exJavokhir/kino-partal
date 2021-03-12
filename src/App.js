import {
  BrowserRouter as Router,
  Switch,
  Route,
}from 'react-router-dom';

import {
  Home,
  Movies,
  SingleMovie,
  SingleShow,
  TVShows,
  TopRating,
  LastMovies,
  SingleLastMovies,
  UpComing,
  SearchPage,
  ActorsMovie,
  Recomen
}from './pages'


import Header from './containers/Header'


import './assets/styles/main.scss'

function App() {
  return (
      <div className="wrapper">


        <Router>
          <Header/>


          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movies" component={Movies}/>
            <Route exact path="/tv-show" component={TVShows}/>
            <Route exact path="/top-rating" component={TopRating}/>
            <Route exact path="/last-movie" component={LastMovies}/>
            <Route exact path="/up-coming" component={UpComing}/>
            <Route exact path="/movie/:id" component={SingleMovie}/>
            <Route exact path="/tv-show/:id" component={SingleShow}/>
            <Route exact path="/last-movie/:id" component={SingleLastMovies}/>
            <Route exact path="/person/:id" component={ActorsMovie}/>
            <Route exact path="/search" component={SearchPage}/>
            <Route exact path="/recomen/:id" component={Recomen}/>
          </Switch>
        </Router>
      </div>
  );

}

export default App;
