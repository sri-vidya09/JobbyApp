import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import Job from './Components/Job'
import ProtectedRoute from './Components/ProtectedRoute'
import NotFound from './Components/NotFound'
import JobItemDetails from './Components/JobItemDetails'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Job} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
