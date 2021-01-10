import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

const Spacer = ({ children }: IProps) => {
    return <View style={styles.spacer}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
})

export default Spacer

