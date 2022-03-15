import DonationsContainer from "../containers/DonationsContainer";
import MembershipsContainer from "../containers/MembershipsContainer";
import UsersContainer from "../containers/UsersContainer";
import useState from 'react';


const Search = () => {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked);
        };

    return (
        <>
            <div>Search</div>
            <div>
                <h3>Search By:</h3>
                <select>
                <option value="lastName">Last Name</option>
                <option value="email">Email Address</option>
                <option value="phone">Phone Number</option>
                <option value="id">User ID</option>   
                </select>
            </div>
            <div>
                <label>
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                Show Me Account Information
                </label>

                <label>
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                Show Me Donation History
                </label>

                <label>
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                Show Me Membership Details
                </label>
            </div>
            <br/>
            <UsersContainer />
            <br/>
            <DonationsContainer />
            <br/>
            <MembershipsContainer />
            
        </>
    )
}

export default Search