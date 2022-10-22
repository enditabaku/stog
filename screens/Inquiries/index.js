import React  from 'react';
import { View, StyleSheet, useWindowDimensions, Text  } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Startups from './components/Startups';
import Education from './components/Education';
import { MainContainer } from "./styles"
const renderScene = SceneMap({
    education: Education,
    startups: Startups,
  });

const Inquiries = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'education', title: 'Education' },
      { key: 'startups', title: 'Startups' },
    ]);

    return (
        <MainContainer>
            <View style={{ flex: 2 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={props => (
                        <TabBar
                          {...props}
                          renderLabel={({ route }) => (
                            <View>
                              <Text style={{fontSize: '18px'}}>
                              {route.title}
                              </Text>
                              </View>
                          )}
                          style={{backgroundColor: '#A9F0D1', borderRadius: 20, marginLeft: 10, marginRight: 10, top: 10}}
                        />
                      )}                 
                />
            </View>
        </MainContainer>
    );
}


const styles = StyleSheet.create({
    tabStyle: {
        borderBottomColor: '#00a0af',
        borderBottomWidth: 0,
    },
    underlineStyle: {
        height: 3,
        backgroundColor: '#00a0af',
        width: 100,
    },
});


export default Inquiries;