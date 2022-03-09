import DonationCard from "./DonationCard";
import Search from "./Search";

const DonationsList = () => {
    const renderDonations = donations.map(donation => <DonationCard key={donation.id} donation={donation}/>)
    return (
        <div>{renderDonations}</div>
    )
}

export default DonationsList