import Menu from 'components/Menu'
import Home from 'pages/Home'
import About from 'pages/About'
import Projects from 'pages/Projects'
import Contact from 'pages/Contact'
import Layout from 'components/Layout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App() {
  return (
    <Layout>
      <Router>
      <Menu/>
      <Switch>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
      </Router>
    </Layout>
  );
}