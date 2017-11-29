import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Route, Redirect } from "react-router-dom";
import styles from "../styles";
import NavigationLink from "../NavigationLink";
import HSL from "../HSL";
import EnhanceAnimationExample from "./EnhanceAnimationExample";

const AnimationExample = props => (
  <Route
    render={({ location }) => (
      <div style={styles.fill}>
        <Route exact path="/" render={() => <Redirect to="/10/90/50" />} />

        <ul style={styles.nav}>
          <NavigationLink to="/10/90/50">Red</NavigationLink>
          <NavigationLink to="/120/100/40">Green</NavigationLink>
          <NavigationLink to="/200/100/40">Blue</NavigationLink>
          <NavigationLink to="/310/100/50">Pink</NavigationLink>
        </ul>

        <div style={styles.content}>
          <ReactCSSTransitionGroup
            transitionName="translate"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {/* no different than other usage of
                CSSTransitionGroup, just make
                sure to pass `location` to `Route`
                so it can match the old location
                as it animates out
            */}
            <HSL location={location} key={location.key} path="/:h/:s/:l">
              <Route
                path="/10/90/50"
                key={props.key}
                location={props.location}
                render={({ match: { params } }) => <div>Red</div>}
              />
              <Route
                path="/120/100/40"
                key={props.key}
                location={props.location}
                render={({ match: { params } }) => <div>Green</div>}
              />
              <Route
                path="/200/100/40"
                key={props.key}
                location={props.location}
                render={({ match: { params } }) => <div>Blue</div>}
              />
              <Route
                path="/310/100/50"
                key={props.key}
                location={props.location}
                render={({ match: { params } }) => <div>Pink</div>}
              />
            </HSL>
            {/*<MousePosition mouseCoordinate={{ x: 5, y: 5 }} />*/}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )}
  />
);

export default EnhanceAnimationExample(AnimationExample);
