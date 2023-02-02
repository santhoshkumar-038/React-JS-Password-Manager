import './index.css'

const PasswordItem = props => {
  const {userDetails, checkbox, deleteUser} = props
  const {website, username, password, id} = userDetails
  const initialLetter = website.slice(0, 1)
  console.log(initialLetter)
  console.log(checkbox)
  const renderPassword = () => {
    if (checkbox) {
      return <p className="password">{password}</p>
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="stars"
      />
    )
  }

  const onClickDeleteButton = () => {
    deleteUser(id)
  }

  return (
    <li className="user-list-item">
      <div>
        <div className="website-initial-container">
          <p className="website-initial">{initialLetter.toUpperCase()}</p>
        </div>
      </div>
      <div className="user-details-container">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {renderPassword()}
      </div>
      <div>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
