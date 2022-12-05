import * as React from "react";
import {
  BrowserRouter as Router,
  match,
  Route,
  Switch,
} from "react-router-dom";
import { getAllTeams } from "@shlack/data";
import { ITeam } from "@shlack/types";
import { useAsyncDataEffect } from "@shlack/utils";
import Loading from "./components/Loading";
import SelectedTeam from "./components/SelectedTeam";
import TeamSelector from "./components/TeamSelector";

const { useState } = React;

const App: React.FunctionComponent = () => {
  const [teams, setTeams] = useState<ITeam[]>();

  useAsyncDataEffect(() => getAllTeams(), {
    setter: setTeams,
    stateName: "teams",
  });
  if (!teams) return <Loading message="Loading teams" />;
  return (
    null
  );
};
export default App;
