import {useState} from 'react';
import {useHistory} from 'react-router';

const UserForm = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        phone: "",

    });

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        if ([user.firstName, user.lastName, user.address1, user.address2, user.city, user.state, user.zip, user.email, user.phone].some(val => val.trim() === "")) {            
            alert("You must fill in all the information please!")        
        }

        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/users", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(user)
                })
                const data = await resp.json()

                if (data.error) {
                    setUser({

                    firstName: "",
                    lastName: "",
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    zip: "",
                    email: "",
                    phone: "",
            
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
        setUser({
        ...user,
        [e.target.name]: e.target.value
        })
    }
    
    return (
        <>
            <h3>Add a User:</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input onChange={handleChange} type="text" name="firstName" value={user.firstName} required/><br/><br/>
            <label htmlFor="lastName">Last Name:</label>
            <input onChange={handleChange} type="text" name="lastName" value={user.lastName} required/><br/><br/>
            <label htmlFor="address1">Address 1:</label>
            <input onChange={handleChange} type="text" name="address1" value={user.address1} required/><br/><br/>
            <label htmlFor="laddress2">Address 2:</label>
            <input onChange={handleChange} type="text" name="address2" value={user.address2} /><br/><br/>
            <label htmlFor="city">City:</label>
            <input onChange={handleChange} type="text" name="city" value={user.city} required/><br/><br/>
            <label htmlFor="state">State:</label>
            <input onChange={handleChange} type="text" name="state" value={user.state} required/><br/><br/>
            <label htmlFor="zip">Zip:</label>
            <input onChange={handleChange} type="text" name="zip" value={user.zip} required/><br/><br/>
            <label htmlFor="email">Email:</label>
            <input onChange={handleChange} type="text" name="email" value={user.email} required/><br/><br/>
            <label htmlFor="phone">Phone:</label>
            <input onChange={handleChange} type="text" name="phone" value={user.phone} required/><br/><br/>
            <input type="submit" value="Add User"/>

            </form>
        </>
    )
}

export default UserForm