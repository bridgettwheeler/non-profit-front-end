import {useState} from 'react';
import {useHistory} from 'react-router';


const DonationForm = () => {
    const [donation, setDonation] = useState({
        email: "",
        amount: "",
        year: "",

    });

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        if ([donation.email, donation.amount, donation.year].some(val => val.trim() === "")) {            
            alert("You must fill in all the information please!")        
        }

        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/donations", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(donation)
                })
                const data = await resp.json()

                if (data.error) {
                    setDonation({
                        email: "",
                        amount: "",
                        year: "",
                
                    })
                    alert(data.error)
                    
                } else {
                    history.push("/search")
                }
                console.log(data)
                
            } catch (error) {
                alert(error)
            }
        }
      fetchData()

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
            <label htmlFor="email">Email:</label>
            <input onChange={handleChange} type="text" name="email" value={donation.email} required/><br/><br/>
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