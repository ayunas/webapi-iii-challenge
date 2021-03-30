import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Users from './components/Users';



class App extends React.Component {


  render() {
    return (
      <div className="App">
          <Header/>
          <Users/>
          <Posts/>
          <Footer/>
      </div>
    );
  }
  
}

export default App;
