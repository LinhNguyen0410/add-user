import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

UserList.propTypes = {
    userList: PropTypes.array,
    onRemove: PropTypes.func,
};

function UserList({ userList, onRemove }) {

    const handleRemoveUser = (idUser) => {
        // truyền ID lên cho thằng App xử
        onRemove(idUser)
    }

    return (
        <div className='list-user'>
            <span className='title'>User List</span>

            {/* render */}
            {userList.map((user) => (
                <div className="user" key={user.id}>
                    <span className='user-name'>{user.name}</span>
                    <span className='remove' onClick={() => handleRemoveUser(user.id)}>X</span>
                </div>
            ))}
            {/* render */}

        </div>
    );
}

export default UserList;