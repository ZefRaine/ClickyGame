import React, { useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friendslist from "./friends.json";
import Header from "./components/Header";
// import Shuffle from "./components/Shuffle";

function App() {
  // const [friends, setFriends] = useState(friendsjson);

  return (
    <div>
      <Nav />
      <Header />
      <Wrapper>
        {friendslist.map(friend => (
          <Card image={friend.image} />
        ))}
      </Wrapper>
    </div>
  );
}
export default App;
