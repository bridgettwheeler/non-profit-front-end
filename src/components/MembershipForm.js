import {useState} from 'react';
import {useHistory} from 'react-router';

const MembershipForm = () => {
    const [membership, setMembership] = useState({
        userID: "",
        startDate: "",
        endDate: "",
        year: "",

    });

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        if ([membership.userID, membership.startDate, membership.endDate, membership.year].some(val => val.trim() === "")) {            
            alert("You must fill in all the information please!")        
        }

        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/memberships", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(membership)
                })
                const data = await resp.json()

                if (data.error) {
                    setMembership({
                        userID: "",
                        startDate: "",
                        endDate: "",
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
            <label htmlFor="startDate">Start Date:</label>
            <input onChange={handleChange} type="date" name="startDate" value={membership.startDate} required/><br/><br/>
            <label htmlFor="endDate">End Date:</label>
            <input onChange={handleChange} type="date" name="endDate" value={membership.endDate} required/><br/><br/>
            <label htmlFor="year">Year:</label>
            <input onChange={handleChange} type="number" name="year" value={membership.year} required/><br/><br/>
            <input type="submit" value="Add Membership"/>

            </form>
        </>
    )
}

export default MembershipForm