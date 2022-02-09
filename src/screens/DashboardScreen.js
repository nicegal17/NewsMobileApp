import React, {useEffect, useLayoutEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Input, ListItem} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';

import Color from '../theme/Color';
import {mediaSelectors} from '../stores/slices/mediaSlice';
import {fetchGeneral, fetchTopHeadlines} from '../stores/middleware/media';

import SidebarSVG from '../assets/svg/sidebar.svg';
import NotificationSVG from '../assets/svg/notifcation.svg';
import moment from 'moment';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const MediaArr = useSelector(mediaSelectors.general);
  const HeadlinesArr = useSelector(mediaSelectors.topHeadlines);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <TouchableOpacity>
          <SidebarSVG />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity>
          <NotificationSVG />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    dispatch(fetchGeneral());
    dispatch(fetchTopHeadlines());
  }, []);

  const onArticlePress = item => {
    navigation.navigate('ArticleDetailScreen', {
      item: item,
    });
  };

  const truncateTitle = (title, count) => {
    return title.slice(0, count) + (title.length > count ? '...' : '');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onArticlePress(item)}
        activeOpacity={0.8}>
        <ImageBackground
          source={{uri: item.urlToImage}}
          resizeMode="cover"
          imageStyle={{borderRadius: 28}}
          style={styles.ImageView}>
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
            <View style={{marginTop: 40, margin: 16}}>
              <Text style={styles.PopularTitleStyle}>
                {truncateTitle(item.title, 60)}
              </Text>
              <View style={styles.ViewStyle}>
                <Text style={styles.AuthorTextStyle}>
                  By {truncateTitle(item.author, 15)}
                </Text>
                <Text
                  style={{
                    ...styles.AuthorTextStyle,
                    marginLeft: 15,
                  }}>
                  {moment(item.publishedAt).fromNow()}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const LatestNews = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onArticlePress(item)}
        activeOpacity={0.8}>
        <ListItem>
          <Avatar
            source={{uri: item.urlToImage}}
            width={80}
            height={87}
            rounded={true}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.TitleStyle}>
              {item.title}
            </ListItem.Title>
            <ListItem.Subtitle
              style={[styles.GrayTextStyle, styles.SubTitleView]}>
              <Text>By </Text>
              {item.author}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <View style={styles.TitleView}>
                <Text style={styles.TitleText}>
                  What hot news {'\n'} interested today?
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 20,
                  marginEnd: 24,
                }}>
                <Input
                  inputContainerStyle={styles.InputContainer}
                  inputStyle={styles.GrayTextStyle}
                  placeholder="Search news, articles, etc"
                />
              </View>
              <View style={styles.HeaderView}>
                <Text style={styles.HeaderText}>Most popular</Text>
                <Text style={styles.ViewAllText}>View All</Text>
              </View>
              <FlatList
                data={MediaArr?.slice(0, 5)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flex: 1, marginTop: 18}}
              />
              <View style={{marginTop: 24}}>
                <Text style={styles.HeaderText}>Latest today</Text>
              </View>
            </>
          );
        }}
        data={HeadlinesArr?.slice(0, 5)}
        renderItem={LatestNews}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        style={{flex: 1, marginStart: 24}}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
  },
  TitleView: {
    marginTop: 24,
    // marginHorizontal: 24,
  },
  TitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    lineHeight: 35,
  },
  InputContainer: {
    backgroundColor: Color.colorInput,
    borderRadius: 100,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    // width: 327,
    height: 48,
  },
  GrayTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    color: Color.colorTextGray,
    textAlign: 'center',
  },
  ImageView: {
    width: 250,
    height: 160,
    marginHorizontal: 8,
    position: 'relative',
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 24,
    marginTop: -10,
  },
  HeaderText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    lineHeight: 27,
  },
  ViewAllText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: Color.colorOrange,
  },
  LinearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
  },
  TitleStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
  },
  PopularTitleStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 21,
    fontWeight: '600',
    color: Color.colorPrimary,
  },
  ViewStyle: {
    marginTop: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  AuthorTextStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
    color: Color.colorPrimary,
    opacity: 0.8,
  },
  SubTitleView: {
    paddingTop: 5,
  },
});
