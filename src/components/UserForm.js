import {useState} from 'react';
import {useHistory} from 'react-router';

const UserForm = () => {
    const [user, setUser] = useState({
        userID: "",
        amount: "",
        year: "",

    });

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setUser({
        ...user,
        [e.target.name]: e.target.value
        })
    }
    
    return (
        <>
            <h3>Add a User:</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="UserID">User ID:</label>
            <input onChange={handleChange} type="text" name="UserID" value={user.userID} required/><br/><br/>
            <label htmlFor="amount">Amount:</label>
            <input onChange={handleChange} type="number" name="amount" value={user.amount} required/><br/><br/>
            <label htmlFor="year">Year:</label>
            <input onChange={handleChange} type="number" name="year" value={user.year} required/><br/><br/>
            <input type="submit" value="Add User"/>

            </form>
        </>
    )
}

export default UserForm