import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './style.css';
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {
  pagesize=5;
  apikey= "b8dd85cd7362419bafb9df6ef75bb894"
  state={
    progress:0,
  };

  setProgress=(progress)=>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
       color='lightblue'
       progress={this.state.progress}
     />
         <Routes>
          <Route exact path="/" element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" category="general" pagesize={this.pagesize} />}/>
         </Routes>
          <Routes>
            <Route exact path="/business" element={<News apikey={this.apikey} setProgress={this.setProgress} key="business" category="business" pagesize={this.pagesize} />}/>
          </Routes>
          <Routes>
            <Route exact path="/entertainment" element={<News apikey={this.apikey} setProgress={this.setProgress} key="entertainment" category="entertainment" pagesize={this.pagesize} />}/>
          </Routes>
          <Routes>
            <Route exact path="/general" element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" category="general" pagesize={this.pagesize} />}/>
          </Routes>
          <Routes>
            <Route exact path="/health" element={<News apikey={this.apikey} setProgress={this.setProgress} key="health" category="health" pagesize={this.pagesize} />}/>
          </Routes>
          <Routes>
            <Route exact path="/science" element={<News apikey={this.apikey} setProgress={this.setProgress} key="science" category="science" pagesize={this.pagesize} />}/>
          </Routes>
          <Routes>
            <Route exact path="/sports" element={<News apikey={this.apikey} setProgress={this.setProgress} key="sports" category="sports" pagesize={this.pagesize} />}/>
          </Routes>
          <Routes>
            <Route exact path="/technology" element={<News apikey={this.apikey} setProgress={this.setProgress} key="technology" category="technology" pagesize={this.pagesize} />}/>
          </Routes>
        </Router>
      </>
    );
  }
}
