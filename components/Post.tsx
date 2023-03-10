import {Button, Image, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import Popup from "./Popup";
const Post = ({name, des, date}) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const handlePopup = () => {
        setPopupVisible(() => !popupVisible);
    }
    const handleSubmit = () => {
        setPopupVisible(() => !popupVisible);
    }

    return (
    <View style={styles.container}>
        <Text><Text style={styles.author}>{name}</Text>posted a new photo</Text>
        <Text style={styles.description}>{des}</Text>
        <Image source={{uri:"https://picsum.photos/800/600",}} alt={"Random image"} style={styles.postImage}/>
        <Text style={styles.date}>{date}</Text>
        <Button title={"forward"} onPress={handlePopup}/>

        <Modal visible={popupVisible} animationType={"slide"}>
            <View style={styles.popup}>
                <View style={styles.popupContainer}>
                    <Text style={styles.popupHeader}>Forward The Post</Text>
                    <Text style={styles.popupLine}>
                        <Text>To: </Text>
                        <Text style={styles.popupAuthor}>Friend Name</Text>
                    </Text>
                    <Text style={styles.popupDescription}>{des}</Text>
                    <Image source={{uri:"https://picsum.photos/800/600",}} alt={"Random image"} style={styles.popupImage}/>
                    <Text style={styles.popupDate}>{date}</Text>
                    <Button title={"submit"} onPress={handleSubmit}/>
                </View>
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        flex: 2,
        position: 'relative',
        // alignItems: 'center',
        flexDirection: 'column',
    },
    author: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    date: {
        color: '#999',
        fontSize: 12,
    },
    postImage: {
        display: 'flex',
        height: 200,
        marginBottom: 10,
    },
    description: {
        margin: 10,
    },
    popup: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    popupContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        maxWidth: 500,
        width: '100%',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',

    },
    popupHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3b5998',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 20,
    },
    popupImage: {
        display: 'flex',
        minHeight: 150,
        birderRadius: 50,
        marginRight: 10,
    },
    popupLine: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    popupDescription: {
        margin: 10,
    },
    popupAuthor: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5,
    },
    popupDate: {
        color: '#999',
        fontSize: 12,
    },
});

export default Post;
