import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import styles from "./styles";

const { width } = Dimensions.get("window");
export default function CustomSlider({ goodVibe }) {
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: goodVibe,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
}