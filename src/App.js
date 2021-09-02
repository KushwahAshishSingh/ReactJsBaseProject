import { Route, Switch } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import Todo from "./components/Todo";
import AllMeetUpPages from "./pages/AllMeatups";
import FavoritesPages from "./pages/Favorites";
import NewMeetUpsPage from "./pages/NewMeetUps";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpPages />
        </Route>
        <Route path="/favorite">
          <FavoritesPages />
        </Route>
        <Route path="/newMeetUps">
          <NewMeetUpsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
