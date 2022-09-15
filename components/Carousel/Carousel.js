import React, {Component} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import CheckListCard from '../CarouselCards/CheckListCard';
import GoodVibeCard from '../CarouselCards/GoodVibeCard';
import ModalTemplate from '../ModalTemplate';

class HabitualCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
        {
          id: 1
        },
      ]
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <View style={{
          backgroundColor:'#3A376F',
          marginTop: 40,
          color: 'white',
          alignItems: 'center',
          borderRadius: 20,
          height: 400,
          width: '100%',
          padding: 40,
          shadowColor: "#000",
          shadowOffset: {
            width: 6,
            height: 6
          },
          shadowOpacity: 0.8,
          shadowRadius: 10,
          elevation: 5
          // marginLeft: 25,
          // marginRight: 25, 
        }}
        >
          <GoodVibeCard />
        
          {/* <Text style={{fontSize: 30}}>{item.title}</Text>
          <Text style={{fontSize: 30}}>{item.icon}</Text>
          <Text>{item.text}</Text> */}
        </View>
        {/* <View style={{
          backgroundColor:'#3A376F',
          color: 'white',
          alignItems: 'center',
          borderRadius: 16,
          height: 400,
          width: '100%',
          padding: 40,
          // marginLeft: 25,
          // marginRight: 25, 
        }}
        >
          <CheckListCard />
        
          <Text style={{fontSize: 30}}>{item.title}</Text>
          <Text style={{fontSize: 30}}>{item.icon}</Text>
          <Text>{item.text}</Text>
        </View> */}
      </View>
    
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1,  }}>

        <View style={{ flex: 1, flexDirection:'column', justifyContent: 'center', alignContents: 'center' }}>
        <Carousel
            layout={"column"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={350}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem = { index => this.setState({activeIndex:index}) } 
          />
        </View>
      </SafeAreaView>
    )
  }
}

// const styles = StyleSheet.create({
//   textStyle: {
//       fontSize: 30,
//       color: 'FFFFFF',
//       alignItems: 'center'
//   }
// })

export default HabitualCarousel



// export default function Carousel() {

//     return (
//       <View>
//         <CustomSlider goodVibe={<GoodVibeModal />} />
//       </View>
//     );
//   }


        // <GoodVibeCard 
        //     // id: {1}
        //     // title: {"Tell Me Something Good"}
        //     // icon:"🪷",
        //     // text: "Click here for a random compliment",
        // />,
        // <CheckListView />,
        // <CalendarView />
      //   {
      //     id: 1,
      //     // title: "Tell Me Something Good",
      //     // icon:"🪷",
      //     // text: "Click here for a random compliment",
      // },
      // {
      //   id: 2,
      //   // title: "Check your to do list",
      //   // icon:"📑",
      //   // text: "Click here to view your daily list",
      // },
      // {
      //   id: 3,
      //   // title: "Calendar View",
      //   // icon:"📆",
      //   // text: "Click here to see your calendar",
      // },
      // {
      //   id: 4,
      //   // title: "Favorite Vibes",
      //   // icon:"🥰",
      //   // text: "Click here to see your favorite vibes",
      // },