import React from 'react';
import { Route, Redirect, useLocation, Switch } from 'react-router-dom';

import { App } from 'layout/app';
import { PageHome } from 'layout/page-home';
import { PageSearchQuestionnaire } from 'layout/page-search-questionnaire';
import { PageQuestionnaire } from 'layout/page-questionnaire';
import { secure } from 'auth';

function Router() {
  const { pathname } = useLocation();
  return (
    <App>
      <Switch>
        <Route exact path="/" component={secure(PageHome)} />
        <Route
          exact
          path="/questionnaire/:id"
          component={secure(PageQuestionnaire)}
        />
        <Route
          exact
          path="/search/questionnaires"
          component={secure(PageSearchQuestionnaire)}
        />
        {!pathname.startsWith('/authentication') && <Redirect to="/" />}
      </Switch>
    </App>
  );
}

export default Router;
