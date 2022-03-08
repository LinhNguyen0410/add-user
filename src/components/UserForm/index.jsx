import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

UserForm.propTypes = {
    onInputChange: PropTypes.func,
};

function UserForm({ onInputChange }) {
    const [idUser, setIdUser] = useState('');
    const [nameUser, setNameUser] = useState('');

    const handleInputIDChange = (e) => {
        setIdUser(e.target.value)
    }

    const handleInputNameChange = (e) => {
        setNameUser(e.target.value)
    }

    const handleClickSubmit = (e) => {

        // ngăn load lại trang khi submit
        e.preventDefault()

        // form Value => 1 object như y/c chứa id = idUser nhập, name = nameUser nhập
        const formValue = {
            id: idUser,
            name: nameUser
        }

        // goi ham onInputChange cua thang cha de truyen value tu 2 input len qua moi lan click submit
        onInputChange(formValue)

        // set 2 input về empty
        setIdUser('')
        setNameUser('')
    }

    return (
        <form>
            <div>
                <label>ID user</label>
                <input
                    type="text"
                    placeholder="Enter ID user.."
                    value={idUser}
                    onChange={handleInputIDChange}
                />
            </div>

            <div>
                <label>User Name</label>
                <input
                    type="text"
                    placeholder="Enter user name.."
                    onChange={handleInputNameChange}
                    value={nameUser}
                />
            </div>

            <button onClick={handleClickSubmit}>Submit</button>
        </form>
    );
}

export default UserForm;
