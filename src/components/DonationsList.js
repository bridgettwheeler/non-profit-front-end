import DonationCard from "./DonationCard";

const DonationsList = ({donations, setDonations}) => {
    const renderDonations = () => {
        return (
            <table>  
                <thead>    
                    <tr>      
                        <th>User ID</th>
                        <th>First Name</th>      
                        <th>Last Name</th>      
                        <th>Year</th>      
                        <th>Amount</th>
                        <th>Delete</th>    
                    </tr>  
                </thead>  
                <tbody>    
                    {donations.map(donation => <DonationCard key={donation.id} donation={donation} setDonations={setDonations}/>)}
                </tbody>
            </table>
        )
    }
        


        
    return (
        <div>{renderDonations()}</div>
    )
}

export default DonationsList