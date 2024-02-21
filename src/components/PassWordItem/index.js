import {Component} from 'react'
import './index.css'

class PassWordItem extends Component {
  delete = () => {
    const {item, deleteitem} = this.props
    const {id} = item
    deleteitem(id)
  }

  stars = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="starsclass"
    />
  )

  passwordshow = () => {
    const {item} = this.props
    const {Password} = item
    return <p className="passPara">{Password}</p>
  }

  render() {
    const {item, Didchecked} = this.props
    const {Password, name, web} = item

    console.log(Password)
    console.log(name)
    console.log(item.web)
    let newPassword

    if (!Didchecked) {
      const lengthh = Password.length
      newPassword = '*'.repeat(lengthh)
    } else {
      newPassword = Password
    }

    return (
      <li className="item-card">
        <div className="totalCardFlex">
          <div className="ProfileCont">
            <h1 className="ProfileAlpha">{web.slice(0, 1)}</h1>
          </div>
          <div>
            <p className="webPara">{web}</p>
            <p className="userPara">{name}</p>
            <p className="passPara">{newPassword}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          className="btnn"
          onClick={this.delete}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </li>
    )
  }
}

export default PassWordItem
