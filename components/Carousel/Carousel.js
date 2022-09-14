import React, {Component} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
// import data from './data';
// import CustomSlider from './CustomSlider';
import GoodVibeModal from '../Navigation/GoodVibeModal';
import Carousel from 'react-native-snap-carousel'
import GoodVibeView from '../CarouselCards/GoodVibeCard';
import CheckListView from '../CarouselCards/CheckListCard';
import CalendarView from '../CarouselCards/CalendarView';

class HabitualCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
        // <GoodVibeView />,
        // <CheckListView />,
        // <CalendarView />
        {
          id: 1,
          title: "Tell Me Something Good",
          icon:"🪷",
          text: "Click here for a random compliment",
      },
      {
        id: 2,
        title: "Check your to do list",
        icon:"📑",
        text: "Click here to view your daily list",
      },
      {
        id: 3,
        title: "Calendar View",
        icon:"📆",
        text: "Click here to see your calendar",
      },
      {
        id: 4,
        title: "Favorite Vibes",
        icon:"🥰",
        text: "Click here to see your favorite vibes",
      },
      ]
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
          <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text style={{fontSize: 30}}>{item.icon}</Text>
        <Text>{item.text}</Text>
    </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1,  }}>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
        <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem = { index => this.setState({activeIndex:index}) } 
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default HabitualCarousel

// export default function Carousel() {

//     return (
//       <View>
//         <CustomSlider goodVibe={<GoodVibeModal />} />
//       </View>
//     );
//   }