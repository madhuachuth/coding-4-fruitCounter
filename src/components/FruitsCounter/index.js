// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, counter: 0}

  onEatMango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {count} = this.state
    const {counter} = this.state
    return (
      <div className="container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="span">{count}</span> mangoes and{' '}
            <span className="span">{counter}</span> bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
            className="mango"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
            className="mango"
          />
          <div className="button-container">
            <button
              type="button"
              className="eat-mango"
              onClick={this.onEatMango}
            >
              Eat Mango
            </button>
            <button
              type="button"
              className="eat-mango"
              onClick={this.onEatBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
