import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "Messi",
  //   },
  // ]);

  const handleAddUser = (newUser) => {
    setUsers((prevUser) => [...prevUser, newUser]);
    // ...prevUser giúp giữ lại tất cả user đã có, newUser sẽ giúp add thêm newUser vừa submit
  };

  const handleRemoveUser = (idRemove) => {
    // idRemove nhận dc từ idUser trả về khi click dấu X dưới UserList

    const userList = users.filter((user) => user.id !== idRemove);
    // cách xóa là filter giữ lại tất cả các thằng user có ID khác với ID cần remove

    setUsers(userList);
    // set lại user sau khi xóa => render ra giao diện mất thằng đã xóa
  };

  return (
    <div className="App">
      <UserForm onInputChange={handleAddUser} />
      <UserList userList={users} onRemove={handleRemoveUser} />
    </div>
  );
}

export default App;
