import {Navigate} from "react-router-dom";

export default function ProtectedRoutes({user, children}) {
    if(!user) {
        <Navigate to="/login" replace/>
    }
    return children;
}