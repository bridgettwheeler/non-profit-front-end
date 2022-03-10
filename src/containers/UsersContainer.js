import {useState, useEffect} from "react";
import UsersList from "../components/UsersList";


const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/users")
                const data = await resp.json()
                setUsers(data)
            } catch (error) {
                alert(error)
            }
        }
      fetchData()
},[]);

    return (
        <>
            <h2>Users:</h2>
            <UsersList users={users}/>
        </>
    ) 
}

export default UsersContainer