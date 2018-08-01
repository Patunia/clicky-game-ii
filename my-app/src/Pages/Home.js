import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Card from "../components/Card";
import Footer from "../components/Footer";
import data from "../../turtle.json";

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

    render() {
        return (
          <div>
            <NavBar score={this.state.score} topScore={this.state.topScore} />
            <Jumbotron />
            <Container>
              {this.state.data.map(item => (
                <Card
                key = {turtle.id}
                id = {turtle.id}
                url = {turtle.url}
                imgClickFunc = {this.imgClickFunc}
                name ={turtle.name}
                />
              ))}
            </Container>
            <Footer />
          </div>

export default Home;
