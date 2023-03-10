import {Image, StyleSheet, Text, View} from 'react-native';


const Header = () => {
    return <View style={styles.header}>
        <Text style={styles.logo}>Facebook</Text>
        <View style={styles.tabs}>
            <Text style={styles.tab}>Home</Text>
            <Text style={styles.tab}>Profile</Text>
            <Text style={styles.tab}>Messages</Text>
            <Text style={styles.tab}>Notifications</Text>
        </View>
        <View style={styles.profile}>
            <Image source={{uri: "https://picsum.photos/40/40"}} alt={"Profile picture"} style={styles.profileImage}/>
            <span>John Doe</span>
        </View>
    </View>
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3b5998',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tab: {
        marginRight: 20,
        fontSize: 14,
        color: '#999',
        cursor: 'pointer',
        transition: 'color 0.2s ease-in-out',
    },
    tabHover: {
        color: '#3b5998',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    }
});
export default Header;