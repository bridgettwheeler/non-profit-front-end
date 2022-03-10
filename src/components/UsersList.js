import UserCard from "./UserCard";

const UsersList = ({users}) => {
    const renderUsers = () => {
        return (
            <table>  
                <thead>    
                    <tr>      
                        <th>User ID</th>
                        <th>First Name</th>      
                        <th>Last Name</th>      
                        <th>Year</th>      
                        <th>Amount</th>    
                    </tr>  
                </thead>  
                <tbody>    
                    {users.map(user => <UserCard key={user.id} user={user}/>)}
                </tbody>
            </table>
        )
    }
        


        
    return (
        <div>{renderUsers()}</div>
    )
}

export default UsersList