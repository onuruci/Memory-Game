import React, {useState} from 'react';
import "./App.css";
import cards from './components/cards/cards';
import Card from './Card';

function App() {
  const [score, setScore] = useState(0);
  const [allCards, setCards] = useState(cards);
  const [highScore, setHighScore] = useState(0);

  function handleClick(e) {
    let id = e.target.closest('li').value;
    let card = cards.find(element => element.id === id);
    console.log(id);
    console.log(card);
    if(card.clicked){
      alert('Game Over');
      cards.map(element => element.clicked = false);
      if(score > highScore) setHighScore(score);
      setScore(0);
    }
    else {
      card.clicked = true;
      setScore(score+1);
      if(score === cards.length-1)
      {
        alert("WIN");
        cards.map(element => element.clicked = false);
        setHighScore(12);
        setScore(0);
      }
    }
    shuffle();
  }

  function shuffle() {
    let a = [], al = [...allCards];
    let ran, i;
    while(al.length > 0)
    {
      i = al.length;
      console.log(i);
      ran =  Math.floor(Math.random() * Math.floor(i));
      a.push(al[ran]);
      al.splice(ran,1);
    }
    setCards(a);
    console.log(a);
  }

  return ( 
    <div id="app">
      <div id="gameName">
        <h1>MEMORY GAME</h1>
      </div>
      <div id="score">
        <h1 id="head"> Score: {score} </h1>
        <h1>High Score: {highScore}</h1>
      </div>
      <div id="cardBoard">
        <ul id="board">
        {allCards.map(card => {
          return <li value={card.id} key={card.id} className="card">
            <Card 
            key={card.id} 
            obj={card}
            handleClick={handleClick}
            />
            </li>
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
