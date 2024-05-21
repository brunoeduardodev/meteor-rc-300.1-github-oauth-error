import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Meteor } from 'meteor/meteor';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <button onClick={() => Meteor.loginWithGithub()}>Login with GitHub</button>
    <Hello/>
    <Info/>
  </div>
);
