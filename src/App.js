import React, { useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friends from "../src/friends.json";
import Header from "./components/Header";

function App() {
  const [friendState, setFriendState] = useState(friends)
  const [scoreState, setScoreState] = useState(0)
  const [highScoreState, setHighState] = useState(0)
  const [answerState, setAnswerState] = useState("Click images to play!")

  function clickCount(id) {
    return friendState.find((j, i) => {
    if (j.id === id) {
      if(friends[i].clicked === 0) {
        friends[i].clicked = friends[i].clicked + 1;
        setScoreState(scoreState + 1)
        setAnswerState("Correct!")
        setFriendState(friendState.sort(() => Math.random() - 0.5))
      } else {
        if (scoreState > highScoreState) {
          setHighState(scoreState)
          setAnswerState("Incorrect!")
        }
        friendState.forEach(friends => {
          friends.clicked = 0;
        });
        alert(`Game Over! \nScore: ${scoreState}`);
        setScoreState(0);
        setFriendState(friendState.sort(() => Math.random() - 0.5))
      }
      return true;
    }
    })
  }
  return (
    <div>
      <Nav answer={answerState} score={scoreState} highscore={highScoreState}/>
      <Header />
      <Wrapper>
        {friends.map(friend => (
          <Card onClick={()=>clickCount(friend.id)} image={friend.image} />
        ))}
      </Wrapper>
    </div>
  );
}
export default App;
