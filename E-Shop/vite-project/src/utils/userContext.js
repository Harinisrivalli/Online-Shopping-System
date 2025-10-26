import { createContext } from "react";
const userContext = createContext({
    loggedInUser: "Harini",
    address: "Delhi"
});
export default userContext;