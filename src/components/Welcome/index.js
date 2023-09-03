/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonText: 'subscribe'}

  btnClicked = () => {
    this.setState(prevState => {
      if (prevState.buttonText === 'subscribe') {
        return {buttonText: 'subscribed'}
      }
      return {buttonText: 'subscribe'}
    })
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="page">
        <h1 className="main-heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div>
          <button className="btn" onClick={this.btnClicked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
