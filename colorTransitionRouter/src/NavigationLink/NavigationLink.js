import React from "react";
import styles from "../styles";
import { Link } from "react-router-dom";

const NavigationLink = props => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: "inherit" }} />
  </li>
);

export default NavigationLink;
