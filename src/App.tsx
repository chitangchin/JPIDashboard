import {useContext } from "react"
import { FirstTimeUserContext } from "./context"

import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";

const App = () => {

const { firstTimeUser, setFirstTimeUser} = useContext(FirstTimeUserContext);
//If first time user then render signup page else render dashboard
//if storage is available then set first time user

  return (
    <div>
      {firstTimeUser ? <SignUp/> : <Dashboard/>}
    </div>
  )
}

export default App