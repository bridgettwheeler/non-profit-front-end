import {useState, useEffect} from "react";
import DonationsList from "../components/DonationsList";


const DonationsContainer = () => {
    const [donations, setDonations] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/")
                const data = await resp.json()
                setDonations(data)
            } catch (error) {
                alert(error)
            }
        }
    
},[]);

    return (
        <>
            <h2>Donations:</h2>
            <DonationsList donations={donations}/>
        </>
    ) 
}

export default DonationsContainer