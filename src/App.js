import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Counter from "./components/Counter";
import PersonList from './personlist/PersonList'

export class App extends Component {
  state = {
    PersonList: [
      {
        id: 1,
        fullName: "Audra Simpson",
        bio: "Audra",
        imgSrc: "https://images.prismic.io/cadremploi-edito/092632e4-4bef-4d63-b2b9-eff81cc553c4_Mauvraise-photo-cv-homme2.JPG?auto=compress,format&rect=2,0,409,410&w=412&h=413",
        profession: "Personal Website",
        isShow: true,
      },
    ],
    isShow: true
  }
  hendleShow = (idProfil) => {
    this.setState({
      PersonList: this.state.PersonList.map((todo) =>
        todo.id === idProfil ? { ...todo, isShow: !todo.isShow } : todo
      ),
    })
  
}
handleClick = () => {
  this.setState({ isShow: !this.state.isShow });
};
  render() {
    return (
      <div className="App" >
        <h1>React State Checkpoint</h1>
        <PersonList
          Person={this.state.PersonList}
          hendleShow={this.hendleShow}
          handleClick={this.handleClick}
        />
        {this.state.isShow ? <Counter /> : null}
      </div>
    )
  }
}

export default App
