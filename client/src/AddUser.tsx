import { useState } from "react";
import { createUser } from "./api/UserApi";

const AddUser = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const onAddUserClick = async () => {
    await createUser(firstName, lastName, email, mobileNumber);
  }

  return (
    <div>
      <form>
        First Name: <input onChange={e=>setFirstName(e.target.value)} />
        Last Name: <input onChange={e=>setLastName(e.target.value)} />
        Email: <input onChange={e=>setEmail(e.target.value)} />
        Mobile Number: <input onChange={e=>setMobileNumber(e.target.value)} />
        <button onClick={onAddUserClick}>Add user</button>
      </form>
    </div>
  );
};

export default AddUser;
