import {useState, useEffect} from "react";
import MembershipsList from "../components/MembershipsList";


const MembershipsContainer = () => {
    const [memberships, setMemberships] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/memberships")
                const data = await resp.json()
                setMemberships(data)
            } catch (error) {
                alert(error)
            }
        }
      fetchData()
},[]);

    return (
        <>
            <h2>Memberships:</h2>
            <MembershipsList memberships={memberships}/>
        </>
    ) 
}

export default MembershipsContainer