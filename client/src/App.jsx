import {Route, Redirect} from "react-router-dom";
//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import BooksLayoutHOC from "./HOC/Books.HOC";
// Component
import Temp from "./Components/temp";
import Homepage from "./Components/Homepage";

//page
import Books from "./Page/Books";

function App() {
  return (
  <>
   {/* <HomeLayoutHOC path="/" exact component={Temp} />*/}
    {/*<HomeLayoutHOC path="/" exact component={Homepage} />*/}
    <Route path="/"exact>
      <Redirect to="/:type" />
    </Route>
    <HomeLayoutHOC path="/:type" exact component={Homepage} />
    <BooksLayoutHOC path="/books/:id" exact component={Temp} /> 

  </>
  );
}

export default App;