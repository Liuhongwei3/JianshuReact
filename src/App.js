import React from 'react';
import {Provider} from "react-redux";
import {HashRouter,Route} from "react-router-dom";
import store from "./store";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Footer from "./common/footer"
import Login from "./pages/login";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/detail/:id" exact component={Detail}/>
          <Footer/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
