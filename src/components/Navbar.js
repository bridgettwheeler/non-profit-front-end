import { NavLink } from "react-router-dom"

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    backgroundColor: "rgb(110, 52, 235)",
    fontWeight: "bold",
    verticleAlign: "center"
}

const Navbar = () => {
    return (
        <div>
            <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "black"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>

            <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "black"
            }}
                exact
                style={style}
                to="/mermberships/new"
            >New Member</NavLink>

            <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "black"
            }}
                exact
                style={style}
                to="/donations/new"
            >New Donation</NavLink>

            <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "black"
            }}
                exact
                style={style}
                to="/users/new"
            >New User</NavLink>

            <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "black"
            }}
                exact
                style={style}
                to="/search/new"
            >Search</NavLink>
        </div>
    )
}

export default Navbar