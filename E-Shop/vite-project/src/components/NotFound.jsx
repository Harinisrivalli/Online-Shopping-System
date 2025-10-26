import { useRouteError } from "react-router-dom";
function NotFound(){
    const err = useRouteError();
    return(
        <div style={{textAlign:"center"}}>
            <h1>OOPS!!!</h1>
            <label>{err.status}</label><br/>
            <label>{err.statusText}</label><br/>
            <label>{err.data}</label>
        </div>
    );
}
export default NotFound;