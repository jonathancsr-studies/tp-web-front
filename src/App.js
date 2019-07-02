import React from 'react';
import './App.css';
import Index from './componentes/IndexPage/LoginAndRegister'
import World from './componentes/World/containerWorld'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {ChooseCharacterModal} from './componentes/World/preferences/ChooseCharacterModal'
import {Button, ButtonToolbar} from 'react-bootstrap'

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }
  render(){
    let modalClose = () => this.setState({ modalShow: false });
    
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/" exact={true} component={Index} />
          <Route path="/World*" component={World} />
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </ BrowserRouter>
    );
    

    // return (
    //   <ButtonToolbar>
    //     <Button
    //       variant="primary"
    //       onClick={() => this.setState({ modalShow: true })}
    //     >
    //       Launch vertically centered modal
    //     </Button>
  
    //     <ChooseCharacterModal
    //       show={this.state.modalShow}
    //       onHide={modalClose}
    //     />
    //   </ButtonToolbar>
    // );
  }
 

}

export default App;
