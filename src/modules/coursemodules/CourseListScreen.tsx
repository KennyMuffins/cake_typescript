import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'

const CourseListScreen = () => {
    return (
        <View style={styles.container}>
            <Text h3>
                CourseListScreen
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default CourseListScreen