import '../App.css';
import { Container } from '@material-ui/core';
import {BrowserRouter, Route} from "react-router-dom";
import Upload from "./Upload";
import Home from "./Home";

function App() {
  return (
    <Container>
        <BrowserRouter>
             Cat Page
            <Route path={'/'} exact component={Home} />
            <Route path={'/upload'} exact component={Upload} />
        </BrowserRouter>
    </Container>
  );
}

export default App;
