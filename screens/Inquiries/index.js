import React  from 'react';
import { View, StyleSheet, useWindowDimensions  } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Startup from './components/Startup';
import Student from './components/Student';

const renderScene = SceneMap({
    first: Student,
    second: Startup,
  });

const Inquiries = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ]);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </View>
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