import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0, isEven: true}

  incrementButton = () => {
    const randomValue = Math.ceil(Math.random() * 100)
    const randomResult = randomValue % 2 === 0
    this.setState(prevValue => ({
      randomNumber:
        prevValue.randomNumber - prevValue.randomNumber + randomValue,
      isEven: randomResult,
    }))
  }

  render() {
    const {randomNumber, isEven} = this.state
    return (
      <div className="mainBg">
        <div className="card">
          <h1 className="countNumber">Count {randomNumber}</h1>
          <p className="countResult">Count is {isEven ? 'Even' : 'Odd'}</p>
          <button
            className="button"
            type="button"
            onClick={this.incrementButton}
          >
            Increment
          </button>
          <p className="instruction">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
