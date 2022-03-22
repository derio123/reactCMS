import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../../global-styles";
import Menu from "../menu";
import routesConfig from "../../routes";
import './index.css';

export default function Layout() {
  return (
    <div className="app">
      <div className="menu">
        <main className="app_content">
        <Menu></Menu>
        { routesConfig.map((value) => {
            return (
              <Switch key={value.id}>
                <Route 
                exact={value.exact} 
                path={value.path} 
                component={value.component} />
              </Switch>
            )
          })
        }

        <GlobalStyle />
        </main>
      </div>
    </div>
  );
}