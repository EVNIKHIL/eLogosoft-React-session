import { useEffect, useState } from "react";

const InputComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  //   const fullName = `${firstName} ${lastName}`;

  return (
    <div>
      <div>Full name: {fullName}</div>
      <div>
        <label htmlFor="firstName">
          First name
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            type="text"
            id="firstName"
          />
        </label>
      </div>
      <div>
        <label htmlFor="secondName">
          Second name
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            type="text"
            id="secondName"
          />
        </label>
      </div>
    </div>
  );
};

export default InputComponent;
