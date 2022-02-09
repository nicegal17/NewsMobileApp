import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';

import Color from '../theme/Color';
import {ARTICLES} from '../constants/data';

import SidebarSVG from '../assets/svg/sidebar.svg';
import NotificationSVG from '../assets/svg/notifcation.svg';
import ProfileSVG from '../assets/svg/profile-img.svg';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [Article, setArticles] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
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
    setArticles(ARTICLES);
  }, []);

  const renderItem = ({item}) => {
    return (
      <ListItem>
        {item.image}
        <ListItem.Content>
          <ListItem.Title style={styles.Title}>{item.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.SubTextStyle}>
            {item.author}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View>
        <View style={styles.ProfileView}>
          <ProfileSVG />
        </View>
        <View style={{marginTop: 16, alignItems: 'center'}}>
          <Text style={styles.ProfileNameStyle}>Robert Williams</Text>
          <Text style={styles.SubTextStyle}>UI Designer</Text>
        </View>
      </View>
      <View style={styles.GridView}>
        <View>
          <Text style={styles.NumberTextStyle}>42</Text>
          <Text style={styles.SubTextStyle}>Saved</Text>
        </View>
        <View>
          <Text style={styles.NumberTextStyle}>84</Text>
          <Text style={styles.SubTextStyle}>Followers</Text>
        </View>
        <View>
          <Text style={styles.NumberTextStyle}>40</Text>
          <Text style={styles.SubTextStyle}>Following</Text>
        </View>
      </View>
      <View style={{marginTop: 18, marginHorizontal: 24}}>
        <FlatList
          data={ARTICLES}
          renderItem={renderItem}
          keyExtractor={item => item.index}
          horizontal={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
  },
  ProfileView: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ProfileNameStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    lineHeight: 27,
  },
  GridView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 14,
    borderWidth: 1.2,
    borderColor: '#F2F2F2',
    paddingVertical: 12,
    paddingHorizontal: 17,
    marginHorizontal: 24,
    marginTop: 25,
  },
  SubTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: Color.colorTextGray,
  },
  NumberTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
  },
  Title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
  },
});
