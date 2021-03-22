/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import "./App.css";
export default function App() {
  return (
    <Router>
      <BaseLayout />
    </Router>
  );
}
