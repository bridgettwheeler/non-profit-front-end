const DonationCard = ({donation}) => {
    return (
        <>
            <h3>First Name{donation.first_name}</h3>
            <h3>Last Name{donation.last_name}</h3>
            <h3>Year{donation.year}</h3>
            <h3>Amount{donation.amount}</h3>
        </>
    )
}

export default DonationCard