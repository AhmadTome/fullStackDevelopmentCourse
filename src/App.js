import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

function App() {

    const [users, setUsers] = useState({});


    const user = <li>{users.firstName}</li>;


    const listOfUser = async () => {

        try {
            const user = await axios.get('http://localhost:8000/users/23');
            setUsers(user.data.user[0])
        } catch (err) {

        }


    }



    return (
        <div className="app text-center">

            <button className="btn btn-success" onClick={listOfUser}>Fetch Data</button>

            {users.firstName ? user : ''}

        </div>
    );
}

export default App;
