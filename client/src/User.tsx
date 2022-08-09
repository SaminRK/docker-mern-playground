import { useState } from "react";
import { deleteUser, editUser } from "./api/UserApi";

const User = (props: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}) => {
  const { id, firstName, lastName, email, mobileNumber } = props;

  const [inEdit, setInEdit] = useState(false);
  const [firstNameField, setFirstName] = useState(firstName);
  const [lastNameField, setLastName] = useState(lastName);
  const [emailField, setEmail] = useState(email);
  const [mobileNumberField, setMobileNumber] = useState(mobileNumber);

  const onSaveClick = async () => {
    await editUser(
      id,
      firstNameField,
      lastNameField,
      emailField,
      mobileNumberField
    );
    window.location.reload();
    setInEdit(false);
  };

  const onDeleteUserClick = async () => {
    await deleteUser(id);
    window.location.reload();
  };

  return (
    <div>
      {inEdit ? (
        <div>
          First Name:{" "}
          <input
            value={firstNameField}
            onChange={(e) => setFirstName(e.target.value)}
          />
          Last Name:{" "}
          <input
            value={lastNameField}
            onChange={(e) => setLastName(e.target.value)}
          />
          Email:{" "}
          <input
            value={emailField}
            onChange={(e) => setEmail(e.target.value)}
          />
          Mobile Number:{" "}
          <input
            value={mobileNumberField}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
      ) : (
        <div>
          Name: {firstName} {lastName}
          <br />
          Email: {email}
          <br />
          Mobile: {mobileNumber}
          <br />
        </div>
      )}

      {inEdit ? (
        <button onClick={onSaveClick}>Save</button>
      ) : (
        <button onClick={() => setInEdit(true)}>Edit User</button>
      )}

      <button onClick={onDeleteUserClick}>Delete User</button>
    </div>
  );
};

export default User;
