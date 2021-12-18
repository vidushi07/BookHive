import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import BooksLayoutHOC from "./HOC/Books.HOC";
import NewspaperLayoutHOC from "./HOC/Newspaper.HOC";
import IndividualBookLayoutHOC from "./HOC/IndividualBook.HOC";
import TeachersLayoutHOC from "./HOC/Teachers.HOC";
import QuestionPaperLayoutHOC from "./HOC/QuestionPaper.HOC";

// Component
import Temp from "./Components/temp";
import Homepage from "./Components/Homepage";
import Newspaper from "./Components/Newspaper";

// Redirects
import RedirectTeacher from "./Components/Teachers/Redirect";

//page
import Books from "./Page/Books";
import TextBook from "./Page/BooksType/Textbook";
import Fiction from "./Page/BooksType/Fiction";
import ScFi from "./Page/BooksType/ScFi";
import ScTech from "./Page/BooksType/ScTech";
import Romance from "./Page/BooksType/Romance";
import SpecificBook from "./Page/SpecificBook/SpecificBook";
import Teachers from "./Page/Teachers";

function App() {
  return (
    <>

      <Switch>
        <Route path="/newspaper">
          <NewspaperLayoutHOC component={Newspaper} />
        </Route>
      </Switch>

      <Route path="/books" exact>
        <Redirect to="/books/textbook" />
      </Route>
      <HomeLayoutHOC path="/" exact component={Homepage} />

      <BooksLayoutHOC path="/books/textbook" exact component={TextBook} />
      <BooksLayoutHOC path="/books/fiction" exact component={Fiction} />
      <BooksLayoutHOC path="/books/science-fic" exact component={ScFi} />
      <BooksLayoutHOC path="/books/romance" exact component={Romance} />
      <BooksLayoutHOC path="/books/science-tech" exact component={ScTech} />

      <IndividualBookLayoutHOC path="/books/category/:id" exact component={SpecificBook} />

      <TeachersLayoutHOC path="/quespaper" exact component={Teachers} />

      <QuestionPaperLayoutHOC path="/quespaper/teacher/:id" exact component={RedirectTeacher} />
      <QuestionPaperLayoutHOC path="/quespaper/teacher/:id/termend" exact component={Temp} />
      <QuestionPaperLayoutHOC path="/quespaper/teacher/:id/midsem" exact component={Temp} />
    </>
  );
}

export default App;