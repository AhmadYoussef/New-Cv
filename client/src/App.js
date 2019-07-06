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
    navActive: {}
  }
  updateState = (obj) => {
    this.setState({ navActive: obj })
  }
  render() {
    return (
      <div className={classes.app} >
        <BrowserRouter>
          <ScrollToTop>
            <NavBar navActive={this.state.navActive} />
            <Switch>
              <Route exact path={["/", "/en", "/de"]} render={(props) => <Main {...props} updateState={this.updateState} />} />
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
