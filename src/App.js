import {Component} from 'react'

import Plot from './components/Plot'
import './App.css'

class App extends Component {
  state = {x: '', y: '', list: []}

  getFirst = event => {
    this.setState({x: event.target.value})
  }

  getSecond = event => {
    this.setState({y: event.target.value})
  }

  getData = event => {
    event.preventDefault()
    const {x, y} = this.state
    this.setState(prevState => ({
      list: [...prevState.list, {x, y}],
    }))
    this.setState({x: '', y: ''})
  }

  render() {
    const {list, x, y} = this.state

    console.log(list)
    return (
      <>
        <div className="container">
          <form onSubmit={this.getData}>
            <div>
              <label htmlFor="first">Enter x value</label>
              <br />
              <input
                type="text"
                id="first"
                placeholder="enter value"
                onChange={this.getFirst}
                value={x}
              />
            </div>
            <br />
            <div>
              <label htmlFor="second">Enter y value</label>
              <br />
              <input
                type="text"
                id="second"
                placeholder="enter value"
                onChange={this.getSecond}
                value={y}
              />
            </div>
            <br />
            <button type="submit" className="button">
              plot
            </button>
          </form>
        </div>
        <Plot data={list} />
      </>
    )
  }
}

export default App
