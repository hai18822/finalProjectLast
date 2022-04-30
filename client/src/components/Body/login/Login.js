import { Link } from "react-router-dom"

function Login(){
return (
    <div>
        <Link to='loginRoomRenter'>Login for room renter</Link><br></br>
        <Link to='loginRoomOwner'>Login for room owner</Link>
    </div>
)
}

export default Login