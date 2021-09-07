 import logo from './logo.svg';
  import './App.css';
  import React from 'react';
  import Home from './pages/home';
  import Home1 from './pages/index10';
  import Home2 from './pages/index11';
  import Home3 from './pages/index12';
  import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
  import Header from './components/header';
  import Footer from './components/footer';
  import img from './pages/img';
  import img1 from './pages/img1';
  import img2 from './pages/img2';
  import img3 from './pages/img3';
  import img4 from './pages/img4';
  import img5 from './pages/img5';
  import img6 from './pages/img6';
  import img7 from './pages/img7';
  import img8 from './pages/img8';
  import img9 from './pages/img9';
  import img10 from './pages/img10';
  import img11 from './pages/img11';
  import img12 from './pages/img12';
  import img13 from './pages/img13';
  import img14 from './pages/img14';
  import img15 from './pages/img15';
  import img16 from './pages/img16';
  import img17 from './pages/img17';
  import img18 from './pages/img18';
  import img19 from './pages/img19';
  import img20 from './pages/img20';
  import img21 from './pages/img21';
function App() {
  return (
    <div>
      <Router>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/index-10' component={Home1}/>
      <Route path='/index-11' component={Home2}/>
      <Route path='/index-12' component={Home3}/>
      <Route path='/img' component={img}/>
      <Route path='/img1' component={img1}/>
      <Route path='/img2' component={img2}/>
      <Route path='/img3' component={img3}/>
      <Route path='/img4' component={img4}/>
      <Route path='/img5' component={img5}/>
      <Route path='/img6' component={img6}/>
      <Route path='/img7' component={img7}/>
      <Route path='/img8' component={img8}/>
      <Route path='/img9' component={img9}/>
      <Route path='/img10' component={img10}/>
      <Route path='/img11' component={img11}/>
      <Route path='/img12' component={img12}/>
      <Route path='/img13' component={img13}/>
      <Route path='/img14' component={img14}/>
      <Route path='/img15' component={img15}/>
      <Route path='/img16' component={img16}/>
      <Route path='/img17' component={img17}/>
      <Route path='/img18' component={img18}/>
      <Route path='/img19' component={img19}/>
      <Route path='/img20' component={img20}/>
      <Route path='/img21' component={img21}/>
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
