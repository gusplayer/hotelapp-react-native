import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, FlatList } from 'react-native-elements'

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [
        {
          "name": "Gaspar Brasserie",
          "stars": "185 Sutter St, San Francisco, CA 94109",
          "images": [
            { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
            { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
            { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
          ],
          "price" : "50000"
        }, 
        {
          "name": "Gaspar Brasserie",
          "stars": "185 Sutter St, San Francisco, CA 94109",
          "images": [
            { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
            { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
            { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
          ],
          "price" : "50000"
        },        
      ],
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>hola aqui</Text>

        <Card title="CARD WITH DIVIDER">
        {
          this.state.hotels.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.images[0].url }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })
        }
      </Card>
    
      </View>      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 400,
    height: 400
  },
  name:{

  },
  user:{

  }
});
