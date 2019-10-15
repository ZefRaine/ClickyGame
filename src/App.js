import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Wrapper>
        {friends.map(friend => (
          <Card image={friend.image} />
        ))}
      </Wrapper>
    </div>
  );
}
export default App;
