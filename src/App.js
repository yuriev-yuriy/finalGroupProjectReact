import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import AuthView from './views/AuthView'
function App() {
  return (
<>
      <Header />

      <Switch>
          <Route path="/auth" component={AuthView} /> 
        </Switch>

 </>
  );
}

export default App;
