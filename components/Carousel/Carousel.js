import React, {Component} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
// import data from './data';
// import CustomSlider from './CustomSlider';

import GoodVibeModal from '../Navigation/GoodVibeModal';
import Carousel from 'react-native-snap-carousel'
import GoodVibeView from '../CarouselCards/GoodVibeCard';
import CheckListCard from '../CarouselCards/CheckListCard';
import CalendarView from '../CarouselCards/CalendarView';
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
      ]
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <View style={{
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
          <GoodVibeCard />
        
          <Text style={{fontSize: 30}}>{item.title}</Text>
          <Text style={{fontSize: 30}}>{item.icon}</Text>
          <Text>{item.text}</Text>
        </View>
        <View style={{
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
        </View>
      </View>
    
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1,  }}>

        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignContents: 'center' }}>
        <Carousel
            layout={"row"}
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