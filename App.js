import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "Tim A";
  const teamB = "Tim B";

  const handleAddScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamA} menang!`);
      }
    } else if (team === 'B') {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamB} menang!`);
      }
    }
  };

  const handleSubtractScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Skor Pertandingan Futsal</Text>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => handleAddScore('A')} />
          <Button title="-" onPress={() => handleSubtractScore('A')} />
        </View>
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => handleAddScore('B')} />
          <Button title="-" onPress={() => handleSubtractScore('B')} />
        </View>
      </View>
      <View style={styles.resetButtonContainer}>
        <Button title="Reset Pertandingan" onPress={resetScores} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF', 
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: '#00008B',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  teamContainer: {
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1E90FF', 
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  teamName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // Teks putih
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginVertical: 10,
    textShadowColor: '#00008B',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 10,
  },
  resetButtonContainer: {
    marginTop: 30,
    width: '60%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
