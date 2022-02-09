import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Color from '../theme/Color';

import ArrowBackSVG from '../assets/svg/arrow.svg';
import MarksSVG from '../assets/svg/mark.svg';
import LifeStyleSVG from '../assets/svg/lifestyle.svg';
import LogoSVG from '../assets/svg/cipay-media.svg';
import {Button} from 'react-native-elements';

const ArticleDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      title: '',
    });
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.ImageView}>
        <LinearGradient
          start={{x: 0.5, y: 1.2}}
          end={{x: 0.5, y: 0.312}}
          locations={[0, 0.044, 0.163, 1]}
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.957)',
            'rgba(0, 0, 0, 0.839)',
            'rgba(0, 0, 0, 0)',
          ]}
          style={styles.LinearGradient}>
          <View style={styles.IconView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowBackSVG />
            </TouchableOpacity>
            <MarksSVG />
          </View>
          <View style={{paddingBottom: 60, paddingHorizontal: 16}}>
            <View style={{paddingTop: 110}}>
              <LifeStyleSVG />
            </View>
            <Text style={styles.HeaderStyle}>{item.title}</Text>
            <View
              style={{
                paddingTop: 16,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <LogoSVG width={24} height={24} />
              <Text style={styles.AuthorTextStyle}>By {item.author}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 25, marginTop: 29}}>
          <Text style={styles.DescriptionStyle}>{item.description}</Text>
        </View>
        <View style={{margin: 25}}>
          <Text style={styles.ContentStyle}>{item.content}</Text>
        </View>
        <Button
          title="Read More"
          buttonStyle={styles.ButtonStyle}
          titleStyle={styles.ButtonTitle}
          containerStyle={styles.ButtonContainer}
          type="outline"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleDetailScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
  },
  ImageView: {
    width: 327,
    height: 380,
    marginHorizontal: 24,
    marginTop: 24,
  },
  LinearGradient: {
    flex: 1,
    borderRadius: 28,
    backgroundColor: '#C4C4C4',
  },
  IconView: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  DescriptionStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 28,
    color: '#040507',
    opacity: 0.6,
  },
  ContentStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 28,
  },
  HeaderStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    lineHeight: 30,
    color: Color.colorPrimary,
  },
  AuthorTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 21,
    color: Color.colorPrimary,
    paddingLeft: 5,
    textAlign: 'left',
    paddingRight: 10,
  },
  ButtonStyle: {
    backgroundColor: Color.colorOrange,
    borderRadius: 100,
    width: 280,
    height: 50,
    marginHorizontal: 48,
  },
  ButtonTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: Color.colorPrimary,
  },
});
