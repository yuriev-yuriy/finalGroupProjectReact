import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path={'/something'}>
        <Switch></Switch>
      </Route>
    </BrowserRouter>
  );
}

export default App;
