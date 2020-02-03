import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.headerText}>Game Over!</Text>
            <Text style={styles.statsText}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={styles.statsText}>Number was: {props.userNumber}</Text>
            <View style={styles.buttonContainer}>
                <Button title="NEW GAME" onPress={props.onNewGame} color={Colors.accent} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 30,
        marginBottom: "25%"
    },
    statsText: {
        fontSize: 15,
        margin: 10
    },
    buttonContainer: {
        marginTop:30,
        width:"40%",
        paddingRight:10
    }
})

export default GameOverScreen;