import React from "react";
import axios from "axios";
import HOC from "./HOC";
import List from "./List";
import "./styles.css";

const WrappedList = HOC(List);

class App extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const users = res.data;
    this.setState({ loading: false, users: users });

    // this.setState({ loading: true });
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((json) => json.json())
    //   .then((users) => {
    //     this.setState({ loading: false, users: users });
    //   });
  }

  render() {
    // console.log(this.state.users);
    return (
      <div className="App">
        <WrappedList users={this.state.users} isLoading={this.state.loading} />
      </div>
    );
  }
}

export default App;
