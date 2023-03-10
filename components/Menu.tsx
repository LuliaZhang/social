import {StyleSheet, Text, View} from 'react-native';

const Menu = () => {
    return  <View style={styles.menu}>
        <Text style={styles.menu_a}>News Feed</Text>
        <Text style={styles.menu_a}>Messenger</Text>
        <Text style={styles.menu_a}>Watch</Text>
        <Text style={styles.menu_a}>Marketplace</Text>
        <Text style={styles.menu_a}>Groups</Text>
        <Text style={styles.menu_a}>Events</Text>
        <Text style={styles.menu_a}>Memories</Text>
        <Text style={styles.menu_a}>Saved</Text>
    </View>


}

const styles = StyleSheet.create({
    menu: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        padding: 10,
        flex: 1,
    },
    menu_a: {
        display: 'flex',
        marginTop: 10,
        color: '#3B5998',
        fontSize: 14,
        // textDecoration: 'none',
        transition: 'color 0.2s ease-in-out',
    },
    menu_a_hover: {
        color: '#fff',
        backgroundColor: '#3B5998',
    },
});

export default Menu;