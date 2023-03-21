import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API1;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  pageSize={this.pageSize}
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"business"}
                  pageSize={this.pageSize}
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"entertainment"}
                  pageSize={this.pageSize}
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"health"}
                  pageSize={this.pageSize}
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"science"}
                  pageSize={this.pageSize}
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"sports"}
                  pageSize={this.pageSize}
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"technology"}
                  pageSize={this.pageSize}
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
