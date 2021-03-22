import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState("/mocktest");
  const history = useHistory();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
      style={{
        position: "fixed",
        bottom: "0px",
        left: "2px",
        right: "2px",
      }}
    >
      <BottomNavigationAction
        label="Mock Test"
        value="/mocktest"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Auto Complete"
        value="/autocomplete"
        icon={<FavoriteIcon />}
      />
    </BottomNavigation>
  );
}
