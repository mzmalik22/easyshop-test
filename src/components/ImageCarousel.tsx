import { Colors } from '@styles'
import React, { useRef } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,
} from 'react-native'

interface Props {
  images: string[]
}

const ImageCarousel = ({ images }: Props) => {
  const scrollX = useRef(new Animated.Value(0)).current

  const { width: windowWidth } = useWindowDimensions()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={1}>
          {images?.map((image, imageIndex) => {
            return (
              <View
                style={{
                  width: windowWidth,
                  height: 250,
                  backgroundColor: 'black',
                }}
                key={imageIndex}>
                <Image source={{ uri: image }} style={styles.card} />
              </View>
            )
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images?.map((_, imageIndex) => {
            const backgroundColor = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [
                Colors.primaryGray,
                Colors.primaryYellow,
                Colors.primaryGray,
              ],
              extrapolate: 'clamp',
            })
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { backgroundColor }]}
              />
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  normalDot: {
    height: 4,
    width: 20,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    left: 10,
  },
})

export { ImageCarousel }
