const UserCard = ({user}) => {
    return (
        <tr>
            <td>{user.user_id}</td>
            <td>{user.first_name ||" first name not assigned"}</td>
            <td>{user.last_name ||" last name not assigned"}</td>
            <td>{user.address_1}</td>
            <td>{user.address_2}</td>
            <td>{user.city}</td>
            <td>{user.state}</td>
            <td>{user.zip_code}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
            <td>{user.created_at}</td>
            <td>{user.updated_at}</td>
        </tr>
    )
}

export default UserCard