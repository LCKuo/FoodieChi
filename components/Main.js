import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import ProfileScreen from './ProfileComp/Profile';
import Market from './main/Market';
import Search from './SearchComps/Search';
import FeedV2 from './FeedComps/FeedV2';
import Scan from './main/Scan';
import { View, Image, StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export default function Main(props, navigation) {
    const EmptyScreen = () => {
        return null;
    }
    Combine = () => {
        return (
            <>
                <ProfileScreen
                    doLout={props.doLout}
                    name={props.name ? props.name : "Default user"}
                    picture={props.picture ? props.picture : "http://image.uc.cn/s/wemedia/s/upload/2021/0a9c2211bc7d49468c41e23207d766db.png"}
                    email={props.email}
                    navigation={navigation}
                />
            </>
        );
    }
    const [tabIndex, setTabIndex] = React.useState(0);

    if (Platform.OS === 'ios') {
        return (
            <Tab.Navigator labeled={false}
                barStyle={{
                    backgroundColor: '#F0AB6B',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    overflow: 'hidden',
                    height: 120,
                    bottom: -30,
                    position: 'absolute',  //removes white corners
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                initialRouteName="Feed"
                labelStyle={{ fontSize: 12 }}>
                <Tab.Screen
                    name="Feed"
                    component={FeedV2}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault();
                            setTabIndex(0);
                        },
                    }}
                    options={{
                        activeColor: "#ff0000",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 0 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab1.png')} />
                                        </View>
                                    }
                                    {tabIndex != 0 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab1.png')} />
                                    }
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault();
                            setTabIndex(1);
                        },
                    }}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 1 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab2.png')} />
                                        </View>
                                    }
                                    {tabIndex != 1 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab2.png')} />
                                    }
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="AddContainer" component={Scan}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            setTabIndex(2);
                            //event.preventDefault();
                            //navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 2 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab3.png')} />
                                        </View>
                                    }
                                    {tabIndex != 2 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab3.png')} />
                                    }
                                </View>
                            )
                        }
                    }} />

                <Tab.Screen name="Market" component={Market}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault()
                            setTabIndex(4);
                        },
                    }}
                    options={{
                        tabBarLabel: 'Market',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 4 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab4.png')} />
                                        </View>
                                    }
                                    {tabIndex != 4 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab4.png')} />
                                    }
                                </View>
                            )
                        }
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={Combine}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault()
                            setTabIndex(5);
                        },
                    }}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 5 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab5.png')} />
                                        </View>
                                    }
                                    {tabIndex != 5 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab5.png')} />
                                    }
                                </View>
                            )
                        }
                    }} />
            </Tab.Navigator>
        );
    } else {
        return (
            <Tab.Navigator labeled={false}
                barStyle={{
                    backgroundColor: '#F0AB6B',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    overflow: 'hidden',
                    height: 70,
                    bottom: -1,
                    position: 'absolute',  //removes white corners
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                initialRouteName="Feed"
                labelStyle={{ fontSize: 12 }}>
                <Tab.Screen
                    name="Feed"
                    component={FeedV2}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault();
                            setTabIndex(0);
                        },
                    }}
                    options={{
                        activeColor: "#ff0000",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 0 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab1.png')} />
                                        </View>
                                    }
                                    {tabIndex != 0 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab1.png')} />
                                    }
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault();
                            setTabIndex(1);
                        },
                    }}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 1 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab2.png')} />
                                        </View>
                                    }
                                    {tabIndex != 1 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab2.png')} />
                                    }
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen name="AddContainer" component={Scan}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            setTabIndex(2);
                            //event.preventDefault();
                            //navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 2 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab3.png')} />
                                        </View>
                                    }
                                    {tabIndex != 2 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab3.png')} />
                                    }
                                </View>
                            )
                        }
                    }} />

                <Tab.Screen name="Market" component={Market}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault()
                            setTabIndex(4);
                        },
                    }}
                    options={{
                        tabBarLabel: 'Market',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 4 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab4.png')} />
                                        </View>
                                    }
                                    {tabIndex != 4 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab4.png')} />
                                    }
                                </View>
                            )
                        }
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={Combine}
                    listeners={{
                        tabPress: e => {
                            //e.preventDefault()
                            setTabIndex(5);
                        },
                    }}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <View>
                                    {tabIndex == 5 &&
                                        <View style={{ backgroundColor: '#FDEDFA', borderRadius: 20, width: 40, height: 40, marginTop: -7, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                            <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab5.png')} />
                                        </View>
                                    }
                                    {tabIndex != 5 &&
                                        <Image tintColor='#2d3436' style={[styles.image, { tintColor: "#2d3436" }]} source={require('../assets/tab5.png')} />
                                    }
                                </View>
                            )
                        }
                    }} />
            </Tab.Navigator>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 24,
        height: 24,
        resizeMode: 'stretch'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00f',
    },
    screen: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    },
});