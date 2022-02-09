import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Input, Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import Color from '../theme/Color';
import {mediaSelectors} from '../stores/slices/mediaSlice';
import {fetchMedia} from '../stores/middleware/media';

import SidebarSVG from '../assets/svg/sidebar.svg';
import NotificationSVG from '../assets/svg/notifcation.svg';
import NewsSVG from '../assets/svg/ayo-media.svg';

const MediaScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const MediaArr = useSelector(mediaSelectors.medias);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Media',
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
    dispatch(fetchMedia());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.ItemCard}>
        <NewsSVG />
        <Text>{item.name}</Text>
        <Button
          title="Follow"
          buttonStyle={styles.ButtonStyle}
          titleStyle={styles.ButtonTitle}
          containerStyle={styles.ButtonContainer}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={{marginTop: 24, marginHorizontal: 10}}>
        <Input
          inputContainerStyle={styles.InputContainer}
          inputStyle={styles.TextStyle}
          placeholder="Search news, articles, etc"
          leftIcon={{
            type: 'feather',
            name: 'search',
            color: '#B7B7B7',
            size: 24,
          }}
        />
      </View>
      <View style={{marginTop: 4, marginHorizontal: 28}}>
        <Text style={styles.GroupHeader}>Medias</Text>
      </View>
      <FlatList
        columnWrapperStyle={styles.columnWrapper}
        data={MediaArr}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(_, index) => index}
        style={{marginTop: 15, marginHorizontal: 24}}
      />
    </SafeAreaView>
  );
};

export default MediaScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
  },
  InputContainer: {
    backgroundColor: Color.colorInput,
    borderRadius: 100,
    borderBottomWidth: 0,
    paddingHorizontal: 14,
    width: 350,
    height: 48,
  },
  TextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: Color.colorTextGray,
  },
  ButtonContainer: {
    paddingTop: 9,
  },
  ButtonStyle: {
    backgroundColor: Color.colorOrange,
    borderRadius: 100,
    width: 72,
  },
  ButtonTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: Color.colorPrimary,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },
  ItemCard: {
    height: 133,
    width: 98,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 13,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 13,
  },
  GroupHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    lineHeight: 27,
  },
  RecosButtonStyle: {
    backgroundColor: Color.colorPrimary,
    borderRadius: 100,
    width: 72,
    borderColor: Color.colorOrange,
  },
  RecosButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: Color.colorOrange,
  },
});

{
  /* <View style={{marginTop: 15, marginHorizontal: 28}}>
        <Text style={styles.GroupHeader}>Recommendation</Text>
      </View>
      <View style={{marginTop: 15, marginHorizontal: 24}}>
        <FlatList
          columnWrapperStyle={styles.columnWrapper}
          data={MediaArr}
          renderItem={recommendation}
          numColumns={3}
          keyExtractor={(_, index) => index}
        />
      </View> */
}

// const recommendation = ({item}) => {
//   return (
//     <View style={styles.ItemCard}>
//       {item.logo}
//       <Text>{item.media}</Text>
//       <Button
//         title="Follow"
//         buttonStyle={styles.RecosButtonStyle}
//         titleStyle={styles.RecosButtonText}
//         containerStyle={styles.ButtonContainer}
//         type="outline"
//       />
//     </View>
//   );
// };
