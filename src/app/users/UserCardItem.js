import React from 'react';


const UserListCard = props => {
  return (
    <div className="col s4 m4">
      <div className="card">
        <div className="card-image">
          <img alt="pic" className={(props.kljuc % 2) ? ("App-logo") : ("App-anti-logo")} src={props.data.imageURL} />
          <span className="card-title">{props.data.firstName}</span>
        </div>
        <div className={props.data.gender + " card-content"}>
          <p>{props.data.hiddenEmail}</p>
          <p>{props.data.dob}</p>
        </div>
      </div>
    </div>



  )
}

export default UserListCard;