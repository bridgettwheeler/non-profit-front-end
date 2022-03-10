import MembershipCard from "./MembershipCard";

const MembershipsList = ({memberships}) => {
    const renderMemberships = () => {
        return (
            <table>  
                <thead>    
                    <tr>      
                        <th>User ID</th>      
                        <th>First Name</th>      
                        <th>Last Name</th>      
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Year</th>    
                    </tr>  
                </thead>  
                <tbody>    
                    {memberships.map(membership => <MembershipCard key={membership.id} membership={membership}/>)}
                </tbody>
            </table>
        )
    }
        


        
    return (
        <div>{renderMemberships()}</div>
    )
}

export default MembershipsList