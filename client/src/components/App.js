import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamShow from "./Streams/StreamShow";
import StreamDelete from "./Streams/StreamDelete";
import StreamList from "./Streams/StreamList";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      {/* Having the header outside of the browserRouter means that it will
     always be shown, independent of the url. Also, if its outside of the a Route, 
     it will always show */}

      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
