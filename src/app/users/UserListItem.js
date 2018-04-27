import React from 'react';


const UserListItem = props => {
    return (
        <div className="col s12">
            <div className={props.data.gender + " card horizontal"}>
                <div className="card-image">
                    <img alt="pic" className={(props.kljuc % 2) ? ("App-logo round") : ("App-anti-logo round")} src={props.data.imageURL} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{props.data.fullName}</p>
                        <p><i className="material-icons">email</i>{props.data.hiddenEmail}</p>
                        <p><i className="material-icons">cake</i>{props.data.dob}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserListItem;