const DonationCard = ({donation}) => {
    return (
        <tr>
            <td>{donation.user.user_id}</td>
            <td>{donation.user.first_name ||" first name not assigned"}</td>
            <td>{donation.user.last_name ||" last name not assigned"}</td>
            <td>{donation.year}</td>
            <td>{donation.donation_amount}</td>
        </tr>
    )
}

export default DonationCard