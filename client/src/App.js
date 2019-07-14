import React from 'react';
import classes from './App.module.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import NotExist from './notExist/NotExist404';
import ScrollToTop from './ScrollToTop/ScrollToTop';

class App extends React.Component {
  state = {
    navActive: {},
    topPosition: false
  }
  updateState = (obj) => {
    if (typeof obj === "object")
      this.setState({ navActive: obj })
    else {
      this.setState({ topPosition: obj })
    }
  }
  render() {
    let topPosition = { position: "absolute" }
    if (this.state.topPosition) {
      topPosition = { position: "fixed" }
    }
    return (
      <div className={classes.app} >
        <BrowserRouter>
          <ScrollToTop>
            <NavBar topPosition={topPosition} navActive={this.state.navActive} />
            <Switch>
              <Route exact path={["/", "/en", "/de"]} render={(props) => <Main {...props} topPosition={this.state.topPosition} updateState={this.updateState} />} />
              <Route component={NotExist} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
