import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import Users from "./components/Users";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false); // New state to control users visibility

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
        setShowUsers(true); // Show users when data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Navbar onGetUsers={fetchUsers} />
      {loading ? <Loader /> : showUsers && <Users users={users} />}
    </div>
  );
}

export default App;
