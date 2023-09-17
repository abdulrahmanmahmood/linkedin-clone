/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { connect } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions";
import RequireAuth from "./components/RequireAuth";

const App = (props) => {

  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route element={<Login />} path="/" />
            <Route
              element={
                <RequireAuth >
                  <Header />
                   <Home />
                </RequireAuth>
              }
              path="/home"
            />
          </Routes>
        </Router>
      </div>
      
  );
};
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
}

export default connect( mapStateToProps,mapDispatchToProps)(App);
