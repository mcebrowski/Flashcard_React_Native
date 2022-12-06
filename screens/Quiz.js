import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { getDeck } from '../utilities/api';
import Styles from '../utilities/styles';

export class StartQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      correct: 0,
      indexAt: 0,
      showQuestion: true,
    };
  }

  componentDidMount() {
    const { route } = this.props;
    const deckID = route.params.deck.id;

    getDeck(deckID).then((deck) => {
      const questions = deck.questions;
      this.setState({ questions: questions });
    });
  }

  render() {
    if (this.state.questions === null || this.state.questions === undefined) {
      return null;
    } else if (this.state.questions.length === 0) {
      return (
        <View style={Styles.VerticalAlignCenter}>
          <Text style={Styles.deckTexts}>
            There is no question card in the{' '}
            {this.props.route.params.deck.title} deck Please go back and add a
            card.
          </Text>
        </View>
      );
    } else if (this.state.questions.length !== this.state.indexAt) {
      const question = this.state.questions[this.state.indexAt];
      return (
        <View style={Styles.VerticalAlignCenter}>
          <Text style={Styles.deckTexts}>
            Odpowiadasz na pytanie {this.state.indexAt + 1} z{' '}
            {this.state.questions.length}
          </Text>
          <View style={Styles.VerticalAlignCenter}>
            <View style={styles.cardContainer}>
              {this.state.showQuestion ? (
                <Text style={Styles.deckTexts}>{question.question}</Text>
              ) : (
                <Text style={Styles.deckTexts}>{question.answer}</Text>
              )}
            </View>

            <TouchableOpacity onPress={this.flipQA}>
              {this.state.showQuestion ? (
                <Text style={Styles.subButton}>Pokaż odpowiedź</Text>
              ) : (
                <Text style={Styles.subButton}>Pokaż pytanie</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 50 }}>
            <TouchableOpacity onPress={this.markAsCorrect}>
              <Text style={Styles.button}>Poprawna</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.pushIncorrect}>
              <Text
                style={[Styles.button, { color: 'red', borderColor: 'red' }]}
              >
                Nieprawidłowa
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={Styles.VerticalAlignCenter}>
          <Text style={Styles.deckTexts}>
            Gratulacje! Udało Ci się ukończyć fiszki na tamat{' '}
            {this.props.route.params.deck.title} z kategorii{' '}
            {this.props.route.params.deck.category}!
          </Text>
          <Text style={Styles.deckTexts}>
            Twój wynik:{' '}
            {Math.round(
              (this.state.correct / this.state.questions.length) * 100
            )}
            % prawidłowych odpowiedzi!
          </Text>

          <TouchableOpacity
            onPress={() => {
              this.setState({
                correct: 0,
                indexAt: 0,
                showQuestion: true,
              });
            }}
          >
            <Text style={Styles.button}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Deck Detail', {
                deck: this.props.route.params.deck,
              });
            }}
          >
            <Text
              style={[Styles.button, { color: 'gray', borderColor: 'gray' }]}
            >
              Powrót
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  flipQA = () => {
    this.setState((prevState) => ({
      showQuestion: !prevState.showQuestion,
      correct: prevState.correct,
      indexAt: prevState.indexAt,
      questions: prevState.questions,
    }));
  };
  markAsCorrect = () => {
    this.setState((prevState) => ({
      correct: prevState.correct + 1,
      indexAt: prevState.indexAt + 1,
      questions: prevState.questions,
      showQuestion: true,
    }));
  };
  pushIncorrect = () => {
    this.setState((prevState) => ({
      correct: prevState.correct,
      indexAt: prevState.indexAt + 1,
      questions: prevState.questions,
      showQuestion: true,
    }));
  };
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
  },
});

export default StartQuiz;
