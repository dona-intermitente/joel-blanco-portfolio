import Layout from 'components/Layout'
import Home from 'pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </Layout>
  );
}