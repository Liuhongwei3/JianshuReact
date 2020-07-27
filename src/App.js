import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter,Route} from "react-router-dom";
import store from "./store";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Footer from "./common/footer"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/detail" component={Detail}/>
          <Footer/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
