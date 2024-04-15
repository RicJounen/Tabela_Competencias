import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function ActionModal({handleClose, handleCriar, handleVer}) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={handleClose}></TouchableOpacity>

            <View style={styles.content}>
                <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={handleCriar}
                >
                    <Text style={styles.actionText}>Criar Competências</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={handleVer}
                >
                    <Text style={styles.actionText}>Ver Competências</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    content: {
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    actionButton: {
        zIndex: 99,
        backgroundColor: '#FFF',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.2)',

        shadowColor: 'rgba(0,0,0, 0.3)',
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,    
    },
    actionText: {
        textAlign:'center',
        fontWeight: 'bold', 
    },

})