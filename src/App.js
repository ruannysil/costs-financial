import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
        <Navbar />
        <Container customClass="min-height">
          <Switch>
              <Route exact path='/'>
              <Home />
              </Route>
              <Route path='/company'>
                <Company />
              </Route>
              <Route path='/Projects'>
                <Projects />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/newproject'>
                <NewProject />
              </Route>
              <Route path='/project/:id'>
                <Project />
              </Route>
          </Switch>
        </Container>
        <Footer />
    </Router>
  );
}

export default App;
