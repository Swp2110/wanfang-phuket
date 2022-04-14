import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense } from 'react'
import './App.css'
import { Home } from 'pages/Home'

function App() {
  return (
    <Router>
      <Suspense fallback="...loading">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
