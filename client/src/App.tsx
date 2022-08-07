import { useEffect, useState } from "react";
import { getAllUsers } from "./api/UserApi";

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
    <div>
      {loading && <p>Loading ...</p>}
      {!loading && (
        <>
          {data.map((user) => (
            <p key={user["_id"]}>Name: {`${user["first_name"]} ${user["last_name"]}`}<br/>
              Email: {user["email"]}<br/>
              Mobile: {user["mobile_number"]}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
