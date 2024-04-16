import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const UserList = ({ userList }) => {
  const [userOptionList, setUserOptionList] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const optionList = userList?.map((user) => ({
      value: user.id,
      label: user.name,
    }));
    setUserOptionList(optionList);
  }, [userList]);

  return (
    <div>
      <select name="users-list" id="users-list">
        {userOptionList.map((user) => (
          <option key={user.value} value={user.value}>
            {user.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserList;
