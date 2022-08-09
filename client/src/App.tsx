import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import { getAllUsers } from "./api/UserApi";
import "./App.css";
import User from "./User";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAllUsers();
        setData(response);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <p>Loading ...</p>}
      <AddUser />

      {!loading && (
        <>
          {data.map((user) => (
            <User
              key={user["_id"]}
              id={user["_id"]}
              firstName={user["first_name"]}
              lastName={user["last_name"]}
              email={user["email"]}
              mobileNumber={user["mobile_number"]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
