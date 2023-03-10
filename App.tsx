import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Menu from "./components/Menu";
import Post from "./components/Post";
import Popup from "./components/Popup";

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <View style={styles.bottom}>
         <Menu></Menu>
          <View style={styles.postList}>
              <Post name="John Doe" des={"description here"} date={"2 hours ago"}></Post>
              <Post name="Jane Smith" des={"description here"} date={"2 hours ago"}></Post>
              <Post name="John Doe" des={"description here"} date={"2 hours ago"}></Post>
          </View>
          <View style={styles.friends}>
                <Text style={styles.friendTitle}>Friends</Text>
              <View style={styles.friendList}>
                  <Image source={{uri:"https://picsum.photos/30/30",}} alt={"Friend image"} style={styles.friendImage}/>
                  <Text style={styles.friendName}>Jane Smith</Text>
              </View>
              <View style={styles.friendList}>
                  <Image source={{uri:"https://picsum.photos/30/30",}} alt={"Friend image"} style={styles.friendImage}/>
                  <Text style={styles.friendName}>Mark Johnson</Text>
              </View>
              <View style={styles.friendList}>
                  <Image source={{uri:"https://picsum.photos/30/30",}} alt={"Friend image"} style={styles.friendImage}/>
                  <Text style={styles.friendName}>Sarah Lee</Text>
              </View>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: 'auto',
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 20,
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
    },
    postList: {
        display: 'flex',
        flex: 2,
    },
    friends: {
        display: 'flex',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        padding: 10,
        flex: 1,
    },
    friendTitle: {
        marginTop: 0,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3B5998',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 10,
    },
    friendList: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    friendImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10,
    }

});

export default App;