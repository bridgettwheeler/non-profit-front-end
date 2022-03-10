import {useState} from 'react';
import {useHistory} from 'react-router';

const MembershipForm = () => {
    const [membership, setMembership] = useState({
        userID: "",
        amount: "",
        year: "",

    });

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setMembership({
        ...membership,
        [e.target.name]: e.target.value
        })
    }
    
    return (
        <>
            <h3>Add a Membership:</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="UserID">User ID:</label>
            <input onChange={handleChange} type="text" name="UserID" value={membership.userID} required/><br/><br/>
            <label htmlFor="amount">Amount:</label>
            <input onChange={handleChange} type="number" name="amount" value={membership.amount} required/><br/><br/>
            <label htmlFor="year">Year:</label>
            <input onChange={handleChange} type="number" name="year" value={membership.year} required/><br/><br/>
            <input type="submit" value="Add Membership"/>

            </form>
        </>
    )
}

export default MembershipForm