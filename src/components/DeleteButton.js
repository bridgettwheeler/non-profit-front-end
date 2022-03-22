


const DeleteButton = () => {
    const [users, setUsers] = useState([]);

    const handleSubmit = e => {
        e.preventDefault()
    };

    const fetchData = async () => {
            const resp = await fetch("http://127.0.0.1:9393/users/:id", {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(users)
            })     

                const data = await resp.json()

                setUsers(data)
    }
      fetchData()
}

export default DeleteButton
