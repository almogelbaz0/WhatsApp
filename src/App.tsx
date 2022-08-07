import './App.css';

import React, { useCallback, useState } from 'react';

import Chat from './Components/Chat/Chat';
import Explorer from './Components/Explorer/Explorer';
import SplitScreen from './Components/LayOut/SplitScreen/SplitScreen';
import { useAppSelector } from './Store/hooks';
import { selectMainUser } from './Store/UserSlice/UserSlice';

const App = () => {
  const user = useAppSelector(selectMainUser);

  return (
    <div className="application-background">
      <SplitScreen weight={["30%", "70%"]}>
        <Explorer user={user}></Explorer>
        <Chat mainUser={user}></Chat>
      </SplitScreen>
      <div className="application-background-styled" />
    </div>
  );
};

export default App;
