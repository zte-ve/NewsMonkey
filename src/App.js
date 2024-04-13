import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: null,
      progress: 0,
      apiKey: process.env.REACT_APP_API_KEY_VED
    }
  }
  pageSize=15;
  handleChange=(newKeyword)=>{
    this.setState({
      keyword: newKeyword
    });
  }
  setProgress=(p)=>{
    this.setState({progress: p});
  }
  render() {
    return (
      <div>
      <Router>
        <LoadingBar
          height= {3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar keyword={this.state.keyword} handleChange={this.handleChange}></Navbar>
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='home' keyword={this.state.keyword} country='in' category='general' pageSize={this.pageSize}/>} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='business' keyword={this.state.keyword} country='in' category='business' pageSize={this.pageSize}/>} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='entertainment' keyword={this.state.keyword} country='in' category='entertainment' pageSize={this.pageSize}/>} />
          <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='general' keyword={this.state.keyword} country='in' category='general' pageSize={this.pageSize}/>} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='health' keyword={this.state.keyword} country='in' category='health' pageSize={this.pageSize}/>} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='science' keyword={this.state.keyword} country='in' category='science' pageSize={this.pageSize}/>} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='sports' keyword={this.state.keyword} country='in' category='sports' pageSize={this.pageSize}/>} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='technology' keyword={this.state.keyword} country='in' category='technology' pageSize={this.pageSize}/>} />
        </Routes>
      </Router>
      </div>
    )
  }
}
