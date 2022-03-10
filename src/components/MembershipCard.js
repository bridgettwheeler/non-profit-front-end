const MembershipCard = ({membership}) => {
    return (
        <tr>
            <td>{membership.user.user_id}</td>
            <td>{membership.user.first_name ||" first name not assigned"}</td>
            <td>{membership.user.last_name ||" last name not assigned"}</td>
            <td>{membership.start_date}</td>
            <td>{membership.end_date}</td>
            <td>{membership.year}</td>
        </tr>
    )
}

export default MembershipCard