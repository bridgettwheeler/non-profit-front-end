import {useState} from 'react';
import {useHistory} from 'react-router';

const DonationForm = () => {
    const [donation, setDonation] = useState({
        userID: "",
        amount: "",
        year: "",

    });

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setDonation({
        ...donation,
        [e.target.name]: e.target.value
        })
    }
    
    return (
        <>
            <h3>Add a Donation:</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="UserID">User ID:</label>
            <input onChange={handleChange} type="text" name="UserID" value={donation.userID} required/><br/><br/>
            <label htmlFor="amount">Amount:</label>
            <input onChange={handleChange} type="number" name="amount" value={donation.amount} required/><br/><br/>
            <label htmlFor="year">Year:</label>
            <input onChange={handleChange} type="number" name="year" value={donation.year} required/><br/><br/>
            <input type="submit" value="Add Donation"/>

            </form>
        </>
    )
}

export default DonationForm