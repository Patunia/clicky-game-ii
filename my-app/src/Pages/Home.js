import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Card from "../components/Card";
import Footer from "../components/Footer";
import turtle from "../turtle.json";

class Home extends Component {
    state = {
        turtles: [],
        score: 0,
        topScore: 0,
        selectedturtle: [], 
        scores: '',
    };

    componentDidMount() {
        this.loadDefaultScore();
    };

    loadDefaultScore = () => {
        this.setState({
            turtles: turtle,
            score: 0,
            topScore: 0,
            selectedturtle: [],
            scores: 'Select one image to start game!',
        });
    };

    handleCorrect = newData => {
        const { topScore, score } = this.data;
        const newScore = score + 1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
          data: this.shuffleData(newData),
          score: newScore,
          topScore: newTopScore
        });
      };

      handleIncorrect = data => {
        this.setState({
          data: this.resetData(data),
          score: 0
        });
      };

      handleCardClick = id => {
        let correct = false;
        const newData = this.state.data.map(item => {
          const newItem = { ...item };
          if (newItem.id === id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              correct = true;
            }
          }
          return newItem;
        });
        correct
            ? this.handleCorrect(newData)
            : this.handleIncorrect(newData);
  };

    render() {
        return (
          <div>
            <NavBar score={this.state.score} topScore={this.state.topScore} />
            <Jumbotron />
            <Container>
              {/* {this.state.data.map(item => ( */}
                <Card
                // key = {turtle.id}
                // id = {turtle.id}
                // url = {turtle.url}
                // imgClickFunc = {this.imgClickFunc}
                // name ={turtle.name}
                />
              {/* ))} */}
            </Container>
            <Footer />
          </div>
    );
}
}

export default Home;
