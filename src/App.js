import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Dimensions, Image } from 'react-native';
import NewsCard from './Components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

export default function App() {
const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <View>
      <Text style = {styles.headerText}>News</Text>
      <FlatList
      ListHeaderComponent={() => (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {news_banner_data.map(bannerNews => (
                    <Image
                      style={styles.banner_image}
                      source={{uri: bannerNews.imageUrl}}
                    />
                  ))}
                </ScrollView>
              )}
      keyExtractor = {item => item.u_id.toString()}
      data = {news_data}
      renderItem = {renderNews}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    alignItems: 'center',
    justifyContent: 'center',
    },
      banner_image: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 50,
      },
});
