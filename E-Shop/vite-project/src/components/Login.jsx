import { useContext, useState } from "react";
import userContext from "../utils/userContext";

function Login() {
    const { loggedInUser, setLoggedInUser, address, setAddress } = useContext(userContext);

    function handleClick() {
        // values are already bound in state, just update context
        setLoggedInUser(userInput);
        setAddress(addressInput);
    }

    const [userInput, setUserInput] = useState(loggedInUser);
    const [addressInput, setAddressInput] = useState(address);

    return (
        <div>
            <h3>UserName:</h3>
            <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
            <h3>Address:</h3>
            <input type="text" value={addressInput} onChange={e => setAddressInput(e.target.value)} /><br/><br/>
            <button onClick={handleClick}>Save</button>
        </div>
    );
}

export default Login;
