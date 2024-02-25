import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function RewardsScreen() {
  return (

    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(0,100,0,0.8)', '#ffe993']}
        style={styles.linearGradient}>
          <View>
            <Text style={styles.title}>{'\u26c1'}{'\u267B'} Rewards {'\u267B'}{'\u26c1'}
            You have 110 points, redeem them here</Text>
          </View>
          <View style={styles.container}>
            {data && (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            )}
          </View>



    </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: '3%',
    borderRadius: 5
  },
 title:{
    fontSize : 36,
    fontWeight : '700',
    textAlign: 'center',
    backgroundColor: '#1d2e28',
    borderRadius: 10,
    paddingVertical: 10,
    color: '#efed02',
    textShadowColor : '#ffe993',
    textShadowRadius: 15,
    marginTop : '10%',
    marginBottom: '5%'
  },
  profileDetails:{
    fontSize : 24,
    fontWeight : 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color : '#0f5132',
    borderColor: '#0f5132',
    borderWidth: 5,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: '5%',
  },
  listHeadings:{
    fontSize : 20,
    fontWeight : 'normal',
    textAlign: 'center',
    textAlignVertical: 'center',
    color : '#efed02',
    borderColor: '#0f5132',
    borderWidth: 4,
    borderRadius: 5,
    backgroundColor: '#1d2e28',
    marginTop : '5%',
    marginBottom: '5%',
  },
  descriptionText:{
    fontSize : 14,
    fontWeight : 'normal',
    textAlign: 'left',
    textAlignVertical: 'center',
    color : 'floralwhite'
  }
});

  const data =[
  {
    "title" : "In n' Out",
    "description" : "Free small fries with purchases over 5 dollars",
    "cost" : ["50 points"],
    "id" : 1
  },
  {
    "title" : "Walmart",
    "description" : "Discounted Walmart+",
    "cost" : ["200 points"],
    "id" : 2
  },
  {
    "title" : "Coldstone",
    "description" : "Free waffle cone with any purchase",
    "cost" : ["50 points"],
    "id" : 3
  },
  {
    "title" : "Amazon",
    "description" : "Month of ad-free Amazon Video",
    "cost" : ["1000 points"],
    "id" : 4
  }
]

const Item = ({ title, description, cost }) => (
  <View>
    <Text style={styles.listHeadings}>{title} </Text>
    <Text style={styles.descriptionText}>{description} </Text>
    <Text style={styles.descriptionText}>{cost} </Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.title} description={item.description} cost={item.cost}/>
);