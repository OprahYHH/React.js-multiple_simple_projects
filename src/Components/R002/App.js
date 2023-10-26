import React from 'react';
import { jsonData } from "../../Data/data";

const players = [
  {
    name: "Guil",
    score: 50,
    id: 1,
  },
  {
    name: "Treasure",
    score: 85,
    id: 2,
  },
  {
    name: "Ashley",
    score: 95,
    id: 3,
  },
  {
    name: "James",
    score: 80,
    id: 4,
  },
];

/**
 * Using JSX to return the header element
 * h1 and span to display score boards
 * Using Arrow functions instead of functions
 * But it doesn't keep track of 'this' keyword
 */

/* function Header() {
    return (
        <header>
            <h1>ScoreBoard</h1>
            <span className="stats">
                Players: 1
            </span>
        </header>
    );
} */

/* const Header = () => (
    <header>
        <h1>ScoreBoard</h1>
        <span className="stats">
            Players: 1
        </span>
    </header>
); */

// display contents with props to get data into
const Header = (props) => {
  return (
    <header style={{backgroundColor: "#8063FA", borderBottom: "solid 2px #D4CAFF"}}>
      <h1>{props.title}</h1>
      {/*{props.totalPlayers(5)}*/}
      <span className="stats">Platers: {props.totalPlayers}</span>
    </header>
  );
};

/**
 * create the player component of scoreboard app
 * display the name and score with button to change
 * use Props to create reusable components
 */
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player"
        onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.name}
      </span>
      <Counter />
      {/*<Counter score={props.score} />*/}
    </div>
  );
};

/* const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}; */

/**
 * build setState() method to update components
 * button with onClick set the value to handleClick
 * have used arrow function to bind the even handler
 */
class Counter extends React.Component {
  state = {
    score: 0,
  };

  // incrementScore = () => {
  //     this.setState({
  //         score: this.state.score + 1
  //     });
  // }

  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

/**
 * parent components with many child components
 * pass function to the props, call it from Header
 */
// const App = (props) => {
//   return (
//     <div className="scoreboard">
//       {/* <Header title="Scoreboard" totalPlayers={(n) => n + 10} /> */}
//       <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

//       {/* players list */}
//       {/*<Player name="Guil" score={50} />
//       <Player name="Treasure" score={90} />
//       <Player name="Ashley" score={85} />
//       <Player name="James" score={80} />*/}

//       {/* 'key' to identify a list for error */}
//       {props.initialPlayers.map((player) => (
//         <Player
//         name={player.name}
//         key={player.id.toString()} />
//       ))}
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
      },
      {
        name: "Treasure",
        id: 2,
      },
      {
        name: "Ashley",
        id: 3,
      },
      {
        name: "James",
        id: 4
      }
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
        return {
            players: prevState.players.filter(
                p => p.id !== id 
            )
        }
    })
  }

  render() {
    return (
        <div className="scoreboard">
           <Header 
           title="Scoreboard" 
           totalPlayers={this.state.players.length} />

           {this.state.players.map( player =>
                <Player 
                name={player.name}
                key={player.id.toString()}
                id={player.id}
                removePlayer={this.handleRemovePlayer} />
            )}
        </div>
    );
  }
}



/**
 * rendering the header into the DOM
 */
// ReactDOM.render(
//   <App initialPlayers={players} />,
//   document.getElementById("root")
// );
// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
//   );

export default function R002() {
  return (
    <div>
      <h3 className='center subtitle'>Project: {jsonData[1].projectName}</h3>
      <App initialPlayers={players} />
    </div>
  )
}