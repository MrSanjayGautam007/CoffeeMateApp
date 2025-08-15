import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BubbleWithBottomTriangle = ({ message = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum sed excepturi iste minus blanditiis, voluptates, deleniti voluptate dignissimos optio corrupti ipsa qui natus maiores ipsum dolore id. Deserunt eveniet alias ' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <Text style={styles.text}>{message}</Text>
        </View>
        <View style={styles.triangle} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 10,
    paddingTop: 50
  },
  bubbleContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  bubble: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 50,
    maxWidth: '85%',
    overflow:'hidden'
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  triangle: {
    position: 'absolute',
    bottom: -8,
    left: '50%',
    marginLeft: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'green', // same as bubble background
  },
});

export default BubbleWithBottomTriangle;
