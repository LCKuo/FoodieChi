import { StatusBar } from 'expo-status-bar';
import { Component, React } from 'react';
import { View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import MainScreen from './components/Main';
import ScanScreen from './components/main/Scan';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from './components/SearchComps/Search';
import SearchLevel2 from './components/SearchComps/SearchLevel2';
import SearchLevel3 from './components/SearchComps/SearchLevel3';

import Feed from './components/FeedComps/Feed';
import FeedLevel2 from './components/FeedComps/FeedLevel2';

import Main from './components/Main';
import { Registration, login, data, restoreToken, GetReward } from './components/lib'

const Stack = createStackNavigator();
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
      name: '',
      picture: '',
      email: ''
    }
  }

  checkLogin = async () => {
    this.doLoading()
    try {
      User_Token = await AsyncStorage.getItem("User_Token")
      if (User_Token) {
        this.getInfo()
      } else {
        this.setState({
          loggedIn: false
        })
      }
    } catch (err) {
      alert(err)
    }
    this.setState({
      loaded: true
    })

  };


  componentDidMount() {
    this.checkLogin();
  }

  doLin = () => {
    this.getInfo()
  }

  doLout = (bool) => {
    if (bool) {
      this.setState({
        loggedIn: false
      })
    }
  }
  doLoading = () => {
    this.setState({ loaded: false })

  }
  getInfo = async () => {
    try {
      // const _id = "Chi123..."
      // const _username = 'Chi_Test1'
      // const _invitation = ""
      // const _email="Chi7771@gmail.com"


      //const _id = await AsyncStorage.getItem("local")
      const _name = await AsyncStorage.getItem("name")
      const _picture = await AsyncStorage.getItem("picture")
      const _email = await AsyncStorage.getItem("email")
      login("lucifer87222@gmail.com", "容泡泡123...")


      //拿站台東西寫這，拿完再 loggedIn: true 

      //test(_id)
      //Registration(_username, _id, _email, _invitation)

      //PostInvitationcode(_secret)
      //GetReward()  

      this.setState({
        loggedIn: true,
        name: _name,
        picture: _picture,
        email: _email
      })
      this.setState({ loaded: true })
    } catch (err) {
      alert(err)
    }
  }

  Combine = () => {
    return (
      <>
        <MainScreen
          doLout={this.doLout}
          name={this.state.name}
          picture={this.state.picture}
          email={this.state.email}
        />
      </>
    );
  }
  render() {

    if (!this.state.loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    if (!this.state.loggedIn) {
      return (
        <LandingScreen doLin={this.doLin} doLout={this.doLout} doLoading={this.doLoading} />
      )
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Main"
              component={this.Combine}
              options={{ headerShown: false }}
              initialParams={{ doLout: this.doLout }}
            />
            <Stack.Screen name="Add" component={ScanScreen} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="SearchLevel2" component={SearchLevel2} options={{ headerShown: false }} />
            <Stack.Screen name="SearchLevel3" component={SearchLevel3} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      )
    }


  }
}

export default App
