import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchAndSetUserList = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await api.json();
      setUserList(users);
    };
    fetchAndSetUserList();
  }, []);

  console.log(userList);
  return (
    <>
      <h1>Hello react</h1>
      {/* <InputComponent /> */}
      <UserList userList={userList} />
    </>
  );
}

export default App;
