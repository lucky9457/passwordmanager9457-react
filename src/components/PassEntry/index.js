import './index.css'
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import PassWordItem from '../PassWordItem'

class PassEntry extends Component {
  state = {
    count: 0,
    isChecked: false,
    List: [],
    searchInput: '',
  }

  addClick = event => {
    event.preventDefault()
    const websitename = document.getElementById('websiteEntry')
    const username = document.getElementById('usernameEntry')
    const passWord = document.getElementById('passwordEntry')
    console.log(websitename, username, passWord)
    if (
      websitename.value !== '' &&
      username.value !== '' &&
      passWord.value !== ''
    ) {
      const PassObj = {
        id: uuidv4(),
        web: websitename.value,
        name: username.value,
        Password: passWord.value,
      }

      this.setState(prevState => ({
        List: [...prevState.List, PassObj],
        count: prevState.count + 1,
      }))
      websitename.value = ''
      username.value = ''
      passWord.value = ''
    } else {
      alert('Please Enter Valid Credentials')
    }
  }

  searchResults = event => {
    const searchVal = event.target.value

    this.setState({
      searchInput: searchVal,
    })
  }

  checkboxChanged = () => {
    const check = document.getElementById('checkbox')

    this.setState({
      isChecked: check.checked,
    })
  }

  deletePassword = id => {
    const {List} = this.state

    const filterList = List.filter(each => each.id !== id)
    this.setState(prevState => ({
      List: filterList,
      count: prevState.count - 1,
    }))
  }

  ListPresentView = () => {
    const {List, searchInput, isChecked} = this.state
    const filterinput = List.filter(each =>
      each.web.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul className="items">
        {filterinput.map(each => (
          <PassWordItem
            deleteitem={this.deletePassword}
            Didchecked={isChecked}
            key={each.id}
            item={each}
          />
        ))}
      </ul>
    )
  }

  NoPassword = () => {
    const a = 'a'
    return (
      <div className="nopassCont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="noPasswordImage"
        />
        <p className="nopassPara">No Passwords</p>
      </div>
    )
  }

  render() {
    const {count, List} = this.state

    return (
      <div>
        <div className="horizontalcard">
          <form className="addPasswordCard">
            <h1 className="addPasswordHead">Add New Password</h1>
            <div className="web-input-cont">
              <div className="imgCont">
                <img
                  alt="website"
                  className="webimg"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
              </div>

              <input
                id="websiteEntry"
                placeholder="Enter Website"
                type="text"
                className="inputweb"
              />
            </div>
            <div className="web-input-cont">
              <div className="imgCont">
                <img
                  alt="username"
                  className="webimg"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
              </div>

              <input
                id="usernameEntry"
                placeholder="Enter username"
                type="text"
                className="inputweb"
              />
            </div>
            <div className="web-input-cont">
              <div className="imgCont">
                <img
                  alt="password"
                  className="webimg"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
              </div>

              <input
                id="passwordEntry"
                placeholder="Enter Password"
                type="password"
                className="inputweb"
              />
            </div>
            <div className="butnCont">
              <button onClick={this.addClick} type="submit" className="AddBtn">
                Add
              </button>
            </div>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="passwordmanagerRightImage"
          />
        </div>
        <div className="horizontalcard2">
          <div className="YoursPasswordAndSearchRow">
            <div className="passCountCont">
              <h1 className="yourPassHead">Your Passwords</h1>
              <p className="countVal">{count}</p>
            </div>
            <div className="searchImageAndInputCont">
              <div className="imgCont2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="searchicon"
                />
              </div>
              <input
                onChange={this.searchResults}
                type="search"
                placeholder="search"
                className="searchinput"
              />
            </div>
          </div>
          <hr />
          <div className="ShowPassCont">
            <input
              id="checkbox"
              onChange={this.checkboxChanged}
              className="ShowpasswordCheck"
              type="checkbox"
            />
            <label htmlFor="checkbox" className="showpassPara">
              Show passwords
            </label>
          </div>

          {List.length === 0 ? this.NoPassword() : this.ListPresentView()}
        </div>
      </div>
    )
  }
}

export default PassEntry
