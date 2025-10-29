import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Alert,
} from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcons from './CustomIcons';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  // const navigation = useNavigation<any>();
  return (
    <ImageBackground
      source={imagelink_portrait}
      style={styles.ItemBackgroundImage}
      imageStyle={{
        borderBottomLeftRadius: BORDERRADIUS.radius_20 * 2,
        borderBottomRightRadius: BORDERRADIUS.radius_20 * 2,
      }}
      resizeMode="cover"
    >
      {EnableBackHandler ? (
        <View style={styles.ImageHeaderBarContainerWithBack}>
          <TouchableOpacity
            onPress={() =>{
              BackHandler()}}
              style={styles.backButton}
          >
           <Ionicons name="arrow-back" size={20} color={COLORS.primaryLightGreyHex} />
            
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              ToggleFavourite(favourite, type, id);
            }}
            style={styles.backButton}
          >
            <AntDesign name={'heart'} size={20} color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex} /> 
           
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.ImageHeaderBarContainerWithoutBack}>
          <TouchableOpacity
            onPress={() => {
              ToggleFavourite(favourite, type, id);
            }}
          >
            <AntDesign name={'heart'} size={20} color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex} />  
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.ImageInfoOuterContainer}>
        <View style={styles.ImageInfoInnerContainer}>
          <View style={styles.InfoContainerRow}>
            <View>
              <Text style={styles.ItemTitleText}>{name}</Text>
              <Text style={styles.ItemSubtitleText}>{special_ingredient}</Text>
            </View>
            <View style={styles.ItemPropertiesContainer}>
              <View style={styles.ProperFirst}>
                <CustomIcons
                  name={type == 'Bean' ? 'bean' : 'beans'}
                  size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                  color={COLORS.primaryOrangeHex}
                />
                <Text
                  style={[
                    styles.PropertyTextFirst,
                    {
                      marginTop:
                        type == 'Bean' ? SPACING.space_4 + SPACING.space_2 : 0,
                    },
                  ]}
                >
                  {type}
                </Text>
              </View>
              <View style={styles.ProperFirst}>
                <CustomIcons
                  name={type == 'Bean' ? 'location' : 'drop'}
                  size={FONTSIZE.size_16}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.PropertyTextLast}>{ingredients}</Text>
              </View>
            </View>
          </View>
          <View style={styles.InfoContainerRow}>
            <View style={styles.RatingContainer}>
              <CustomIcons
                name={'star'}
                color={COLORS.primaryOrangeHex}
                size={FONTSIZE.size_20}
              />
              <Text style={styles.RatingText}>{average_rating}</Text>
              <Text style={styles.RatingCountText}>({ratings_count})</Text>
            </View>
            <View style={styles.RoastedContainer}>
              <Text style={styles.RoastedText}>{roasted}</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  InfoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  ProperFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  PropertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  PropertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  RoastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  backButton: {
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryBlackHex,
    alignItems: 'center',
    justifyContent: 'center', 
    opacity: 0.9,
  },
});

export default ImageBackgroundInfo;
