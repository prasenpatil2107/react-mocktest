/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Switch, Route } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import AutoComplete from "../pages/AutoComplete";
import MockInterview from "../pages/MockInterview";

export default function BaseLayout() {
  return (
    <div>
      <Switch>
        <Route path="/mocktest">
          <MockInterview />
        </Route>
        <Route path="/autocomplete">
          <AutoComplete />
        </Route>
        {/* <Route path="/">
            <MockInterview />
        </Route> */}
      </Switch>
      <BottomNav />
    </div>
  );
}
