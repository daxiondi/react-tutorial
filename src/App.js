import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter( (characters, i) => {
        return i !== index
      }),
    })
  }


  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
}

  render() {
  const name = 'Tania'
  const heading = <h1>Hello, {name}</h1>

  const { characters } = this.state

  // const characters = [
  //   {
  //     name: 'Charlie',
  //     job: 'Janitor',
  //   },
  //   {
  //     name: 'Mac',
  //     job: 'Bouncer',
  //   },
  //   {
  //     name: 'Dee',
  //     job: 'Aspring actress',
  //   },
  //   {
  //     name: 'Dennis',
  //     job: 'Bartender',
  //   },
  // ]

  const table = <div className="container" characterData={characters}><Table/></div>

  return (
    <div className="container">
    <Table characterData={characters} removeCharacter={this.removeCharacter} />
    <h3>Add New</h3>
    <Form handleSubmit={this.handleSubmit}/>
  </div>
  )

  }
}

// function App() {
//   const name = 'Tania'
//   const heading = <h1>Hello, {name}</h1>

//   const characters = [
//     {
//       name: 'Charlie',
//       job: 'Janitor',
//     },
//     {
//       name: 'Mac',
//       job: 'Bouncer',
//     },
//     {
//       name: 'Dee',
//       job: 'Aspring actress',
//     },
//     {
//       name: 'Dennis',
//       job: 'Bartender',
//     },
//   ]

//   const table = <div className="container"><Table characterData={characters} /></div>

//   return (
//     table

//   )
// }

export default App;
