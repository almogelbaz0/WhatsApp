import './App.css';

import React, { useCallback, useState } from 'react';
import { Provider } from 'react-redux';

import Chat from './Components/Chat/Chat';
import Explorer from './Components/Explorer/Explorer';
import SplitScreen from './Components/LayOut/SplitScreen/SplitScreen';
import { UserType } from './Modals/User/User';
import store from './Store/store';

const ThisUser: UserType = {
  name: "almogie",
  phoneNumber: "0524488432",
  id: "123",
  lastSync: new Date(),
};

const App = () => {
  const [user] = useState<UserType>(ThisUser);

  return (
    <Provider store={store}>
      <div className="application-background">
        <SplitScreen weight={["30%", "70%"]}>
          <Explorer user={user}></Explorer>
          <Chat mainUser={user}></Chat>
        </SplitScreen>
        <div className="application-background-styled" />
      </div>
    </Provider>
  );
};

export default App;
