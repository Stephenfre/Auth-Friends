import React from 'react'




const FriendsForm = props => {

  return (
    <div>
      <form onSubmit={props.postData}>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChanges}
        />
        <input
          placeholder="age"
          type="number"
          name="age"
          value={props.age}
          onChange={props.handleChanges}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={props.email}
          onChange={props.handleChanges}
        />
        <button type="submit">Add Friend</button>
      </form>

    </div>
  )
}

export default FriendsForm