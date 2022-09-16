import React, {Component} from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import CheckListCard from '../CarouselCards/CheckListCard';
import GoodVibeCard from '../CarouselCards/GoodVibeCard';
import ModalTemplate from '../ModalTemplate';


const SLIDER_1_FIRST_ITEM = 1;
class HabitualCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
  };
  }

 

  _renderItem = ({ item, index }) => {
    <GoodVibeCard data={item} even={(index + 1) % 2 === 0} />,
    <CheckListCard data={item} even={(index + 1) % 2 === 0} />,
    <ModalTemplate data={item} even={(index + 1) % 2 === 0} />
  }


    carouselTest (number, title){
      const { slider1ActiveSlide } = this.state;
      return (
        <View style={styles.carouselContainer}>
          <View style={styles.slideCard}>
             <Carousel
                layout={"column"}
                ref={ref => this.carousel = ref}
                data={this.state.slider1ActiveSlide}
                sliderWidth={350}
                itemWidth={300}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } 
              >
             </Carousel>
          
            {/* <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text style={{fontSize: 30}}>{item.icon}</Text>
            <Text>{item.text}</Text> */}
          </View>
          <View style={styles.slideCard} > 
            <CheckListCard/> 
          </View>
        </View>
      
      )
    }
  

  render() {
    const example1 = this.carouselTest(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
  
    return (
      <SafeAreaView >
      
        {/* <View style={{ flex: 1, flexDirection:'column', justifyContent: 'center', alignContents: 'center' }}> */}
        {example1}
        {/* </View> */}
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

const styles = StyleSheet.create({
    carouselContainer: {
      height: '60%',
      width: '100%',
      flexDirection: 'row'
    },
    slideCard:{ 
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
    elevation: 5,
    // marginLeft: 25,
    marginRight: 25,
 },
 carouselThings: {
    flex: 1, 
    flexDirection:'column', 
    justifyContent: 'center', 
    alignContents: 'center' 
 }
})


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