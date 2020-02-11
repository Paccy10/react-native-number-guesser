import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import DefaultStyles from '../../constants/default-styles';
import colors from '../../constants/colors';
import MainButton from '../MainButton';

const GameOver = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={DefaultStyles.titleText}>Game is over</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/success.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </Text>
        </View>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 550 ? 16 : 20
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOver;
