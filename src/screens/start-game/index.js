import { Button, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card, Input } from '../../components';
import React, { useState } from 'react';

import colors from '../../constants/colors';
import { styles } from './styles';

const StartGame = () => {
    const [number, setNumber] = useState('');
    const onHandleChange = (value) =>{
        setNumber (value.replace(/[^0-9]/g, ''));
    }
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
                            title=' Reset '
                            onPress={() => null}
                            color={colors.primary}
                        />
                        <Button
                            title='Confirm'
                            onPress={() => null}
                            color={colors.primary}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default StartGame;