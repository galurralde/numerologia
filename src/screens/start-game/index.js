import { Alert, Button, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card, Input, NumberContainer } from '../../components';
import React, { useState } from 'react';

import colors from '../../constants/colors';
import { styles } from './styles';

const StartGame = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [confirmed, setConfirmed] = useState(false);


    const onHandleChange = (value) =>{
        setNumber (value.replace(/[^0-9]/g, ''));
    }
    const onHandleReset = () => {
        setNumber('');
        setConfirmed(false);
    }
    const onHandleConfirm = () => {
        const chosenNumber = parseInt(number,10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Numero Invalido','El numero ingresado debe estar entre 1 y 99',[{text:'Okey', style: 'destructive', onPress: onHandleReset}]);
        } else {
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumber('');
        }
    
    }
    


    const confirmedOutput = () => confirmed ?(
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Your selected number</Text>
            <NumberContainer number={selectedNumber}/>
            <Button
                title= "Start Game"
                onPress={() => onStartGame(selectedNumber)}
                color={colors.primary}
            />

        </Card>        
    ) : null;

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            
            <View style={styles.container}>
                <Text style={styles.title}>Let's start!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.label}>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        placeholder="0"
                        maxLength={2}
                        keyboardType="number-pad"
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={onHandleChange}
                        value={number}
                    />            
                    <View style={styles.buttonContainer}>
                        <Button
                            title=' Restart '
                            onPress={onHandleReset}
                            color={colors.primary}
                        />
                        <Button
                            title='Confirm'
                            onPress={onHandleConfirm}
                            color={colors.primary}
                        />
                    </View>
                </Card>
                {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
}
export default StartGame;