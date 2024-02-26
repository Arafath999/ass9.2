import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-5xl"><span className="text-blue-700">404</span>Not Found</h2>
            <Link to="/"><button className="btn btn-secondary">Go Back home</button></Link>
        </div>
    );
};

export default ErrorPage;