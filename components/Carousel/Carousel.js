import React, {Component} from 'react';
import { SafeAreaView, Text, View, Modal, Dimensions, Button } from 'react-native';
// import data from './data';
import CustomSlider from './CustomSlider';
import propTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import GoodVibeModal from '../Navigation/GoodVibeModal';
import GoodVibeView from '../CarouselCards/GoodVibeCard';
import CheckListView from '../CarouselCards/CheckListCard';
import CalendarView from '../CarouselCards/CalendarView';
import ModalTemplate from '../ModalTemplate';

const { width, height } = Dimensions.get('window');

const Page = props => (
  <View style={[{ backgroundColor: props.color }, { width, height }]}>
    <Text>{props.i}</Text>
    <Button
      onPress={props.onHide}
      title={'Hide Modal'}
      buttonStyle={{ marginTop: 20 }}
    />
  </View>
);

Page.propTypes = {
  i: propTypes.number,
  onHide: propTypes.func,
  color: propTypes.string,
};

  addPage = () => {
    this.setState({
      carouselElements: [
        ...this.state.carouselElements,
        { color: 'lightblue' },
      ],
    });
  };

class HabitualCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      modalVisible: false,
      carouselElements: [{ color: '#BADA55' }],
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

        // <GoodVibeModal />,
        // <GoodVibeView />,
        // <CheckListView />,
        // <CalendarView />
      //   {
          
      //     title:"Item 1",
      //     text: "Text 1",
      // },
      // {
      //     title:"Item 2",
      //     text: "Text 2",
      // },
      // {
      //     title:"Item 3",
      //     text: "Text 3",
      // },
      // {
      //     title:"Item 4",
      //     text: "Text 4",
      // },
      // {
      //     title:"Item 5",
      //     text: "Text 5",
      // },

      ],
    }
      showModal = () => {
        this.setState({ modalVisible: true });
      };
    
      hideModal = () => {
        this.setState({ modalVisible: false });
      };
    
      addPage = () => {
        this.setState({
          carouselElements: [
            ...this.state.carouselElements,
            { color: 'lightblue' },
          ],
        });
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
      // <View style={{flex: 1}}>
      //   <ModalTemplate />
      // </View>,
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
            <View style={{ flex: 1, marginTop: 22 }}>
              <ModalTemplate
                animationType={'slide'}
                transparent={false}
                visible={this.state.modalVisible}>
                <Carousel
                layout={"default"}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={300}
                            itemWidth={300}
                            renderItem={this._renderItem}
                            onSnapToItem = { index => this.setState({activeIndex:index}) } 
                  delay={2000}
                  style={{ flex: 1 }}
                  autoplay={false}
                  pageInfo
                  currentPage={this.state.carouselElements.length - 1}
                  onAnimateNextPage={p => console.log(p)}>
                  {this.state.carouselElements.map((el, i) => (
                    <Page
                      key={i}
                      i={i}
                      color={el.color}
                      onHide={() => this.hideModal()}
                    />
                  ))}
                </Carousel>
              </ModalTemplate>
              <Button
                onPress={() => this.showModal()}
                title={'Show Modal'}
                buttonStyle={{ marginTop: 20 }}
              />
              <Button
                title={'Add Page'}
                onPress={() => {
                  this.addPage();
                }}
                buttonStyle={{ marginTop: 20 }}
              />
            </View>
            </SafeAreaView>
    )  
  }
}

export default HabitualCarousel;