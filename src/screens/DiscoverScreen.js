import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SidebarSVG from '../assets/svg/sidebar.svg';
import NotificationSVG from '../assets/svg/notifcation.svg';
import {Avatar, Button, Input, ListItem} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import Color from '../theme/Color';
import {mediaSelectors} from '../stores/slices/mediaSlice';
import {fetchByCategory} from '../stores/middleware/media';
import {CATEGORY} from '../constants/data';

const DiscoverScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [Category, setCategory] = useState([]);
  const [activeState, setActiveState] = useState({});

  const GeneralArr = useSelector(mediaSelectors.discover);
  const isLoadingDiscover = useSelector(mediaSelectors.isLoadingDiscover);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Discover',
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
    let newData = CATEGORY.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          selected: true,
        };
      } else {
        return {
          ...item,
          selected: false,
        };
      }
    });

    const activeData = newData.find(item => item.selected);
    setActiveState(activeData);
    setCategory(newData);
  }, []);

  useEffect(() => {
    if (activeState) {
      dispatch(fetchByCategory(activeState.key));

      let newData = CATEGORY.map(item => {
        if (item.key === activeState.key) {
          return {
            ...item,
            selected: true,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      });
      setCategory(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeState]);

  const onPress = category => {
    setActiveState(category);
  };

  const truncateTitle = (title, count) => {
    return title.slice(0, count) + (title.length > count ? '...' : '');
  };

  const category = ({item}) => {
    return (
      <Button
        title={item.category}
        buttonStyle={
          item.selected ? styles.ButtonActiveStyle : styles.ButtonStyle
        }
        titleStyle={item.selected ? styles.TitleActiveStyle : styles.TitleStyle}
        containerStyle={styles.ButtonContainer}
        onPress={() => onPress(item)}
      />
    );
  };

  const onArticlePress = item => {
    navigation.navigate('ArticleDetailScreen', {
      item: item,
    });
  };

  const renderItem = ({item}) => {
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
            <ListItem.Title style={styles.Title}>
              {truncateTitle(item.title, 60)}
            </ListItem.Title>
            <ListItem.Subtitle style={[styles.TextStyle, styles.SubtitleView]}>
              By {item.author}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
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
        <View>
          <FlatList
            data={Category}
            renderItem={category}
            keyExtractor={item => item.index}
            horizontal={true}
          />
        </View>
        {isLoadingDiscover && <ActivityIndicator size={'large'} />}
        {!isLoadingDiscover && (
          <FlatList
            data={GeneralArr}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

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
  TitleStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: Color.colorTextGray,
  },
  Title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#040507',
  },
  TitleActiveStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: Color.colorPrimary,
  },
  ButtonStyle: {
    borderColor: '#F2F2F2',
    backgroundColor: Color.colorPrimary,
    borderWidth: 1,
    borderRadius: 20,
    width: 75,
  },
  ButtonActiveStyle: {
    borderColor: '#F2F2F2',
    backgroundColor: Color.colorOrange,
    borderWidth: 1,
    borderRadius: 20,
    width: 75,
  },
  ButtonContainer: {
    padding: 4,
  },
  SubtitleView: {
    paddingTop: 8,
  },
});
