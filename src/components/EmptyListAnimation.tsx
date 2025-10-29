import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

interface EmptyListAnimationProps {
  title: string;
  btnText?: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({
  title,
  btnText,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{title}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.LottieText}>{btnText} some coffee</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  LottieStyle: {
    height: 300,
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default EmptyListAnimation;
