const DonationCard = ({donation, setDonations}) => {
    const handleClick = e => {
        const fetchData = async () => {
            const resp = await fetch(`http://127.0.0.1:9393/donations/${donation.id}`, {
                method: "DELETE",
            })     
    
                const data = await resp.json()
                
    
                setDonations(currentDonations => currentDonations.filter(donationObj=> donationObj.id !== donation.id))
    }
      fetchData()
    };

    


    return (
        <tr>
            <td>{donation.user.id}</td>
            <td>{donation.user.first_name ||" first name not assigned"}</td>
            <td>{donation.user.last_name ||" last name not assigned"}</td>
            <td>{donation.year}</td>
            <td>{donation.donation_amount}</td>
            <td><button onClick={handleClick}>Delete Donation</button></td>
        </tr>
    )
}

export default DonationCard