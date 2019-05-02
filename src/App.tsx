import React, { Component, SyntheticEvent } from "react";
//import CharacterList, { Character } from "./CharacterList";

import "./App.css";
import { Button, Statistic, Card } from "semantic-ui-react";

// class App extends Component {
//   render() {
//     const characters: Character[] = [
//       {
//         id: 1,
//         name: "羽咲　綾乃",
//         age: 16,
//         height: 151
//       },
//       {
//         id: 2,
//         name: "荒垣　なぎさ",
//         age: 18,
//         height: 174
//       },
//       {
//         id: 3,
//         name: "泉　理子",
//         age: 18
//       }
//     ];

//     return (
//       <div className="container">
//         <header>
//           <h1>はねバド！ キャラクター一覧</h1>
//         </header>
//         <CharacterList school="北小町高校" characters={characters} />
//       </div>
//     );
//   }
// }
interface AppState {
  count: number;
}
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increment = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.decrement}>
                -1
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
