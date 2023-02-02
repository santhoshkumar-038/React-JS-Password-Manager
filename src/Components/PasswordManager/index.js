import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    search: '',
    checkbox: false,
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newUser],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsiteName = event => {
    // console.log(event.target.value)
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    // console.log(event.target.value)
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    // console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({checkbox: !prevState.checkbox}))
  }

  deleteUser = id => {
    // console.log(id)
    const {passwordsList} = this.state
    const filteredResults = passwordsList.filter(eachUser => eachUser.id !== id)
    this.setState({passwordsList: filteredResults})
  }

  renderPasswordDetails = searchResults => {
    const {checkbox} = this.state
    if (searchResults.length !== 0) {
      return (
        <ul className="users-container">
          {searchResults.map(eachUser => (
            <PasswordItem
              userDetails={eachUser}
              key={eachUser.id}
              checkbox={checkbox}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="no-passwords-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-passwords-image"
        />
        <p className="no-passwords-heading">No Passwords</p>
      </div>
    )
  }

  render() {
    const {
      website,
      username,
      password,
      search,
      passwordsList,
      checkbox,
    } = this.state
    // console.log(passwordsList)
    // console.log(checkbox)
    const searchResults = passwordsList.filter(eachWebsite =>
      eachWebsite.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="passwords-container">
          <div className="form-container">
            <h1 className="password-text">Add New Password</h1>
            <form onSubmit={this.onAddPassword}>
              <div className="website-input-field">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-image"
                  />
                </div>
                <input
                  type="text"
                  className="text-field"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsiteName}
                  value={website}
                />
              </div>
              <div className="website-input-field">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-image"
                  />
                </div>
                <input
                  type="text"
                  className="text-field"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="website-input-field">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website-image"
                  />
                </div>
                <input
                  type="password"
                  className="text-field"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <div className="add-button">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="passwords-list-container">
          <div className="search-passwords-container">
            <div className="your-passwords-container">
              <h1 className="your-passwords-text">Your Passwords</h1>
              <p className="list-length">{searchResults.length}</p>
            </div>
            <div className="website-input-field1">
              <div className="website-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website-image"
                />
              </div>
              <input
                type="search"
                className="search-field"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={search}
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="password"
              className="checkbox"
              defaultChecked={checkbox}
              onChange={this.onChangeCheckbox}
            />
            <label htmlFor="password" className="label">
              Show Passwords
            </label>
          </div>
          {this.renderPasswordDetails(searchResults)}
        </div>
      </div>
    )
  }
}

export default PasswordManager
