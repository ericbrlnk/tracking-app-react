import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1> Home Page</h1>
            <Link to="eingang"> Eingang </Link>
            <Link to="umbuchung"> Umbuchung </Link>
        </div>
    );
}