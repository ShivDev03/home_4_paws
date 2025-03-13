import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native';

import Heart from '@assets/icons/svgIcons/heart';
import { AudioControllerView, Button, PlayScreenHeader, SvgIcon } from '@component/index';
import Slider from '@react-native-community/slider';
import { colors } from '@utils/colors';
import { DUMMY_VOICE } from '@utils/enum';
import { formatTime } from '@utils/helper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import TrackPlayer, { RepeatMode, State, usePlaybackState, useProgress } from 'react-native-track-player';

import style from './style';
import UseColors from '../../theme/useColors';

const PlayScreen = ({ route }) => {
  const swiperListRef = useRef(null);

  const routeData = route?.params?.data;

  const { themeColors } = UseColors();

  const playState = usePlaybackState();

  const [visibleIcon, setVisibleIcon] = useState(false);

  const [name, setName] = useState(null);

  const [isShuffleEnabled, setIsShuffleEnabled] = useState(false);

  const [repeatMode, setRepeatMode] = useState(false);

  const progress = useProgress();

  useEffect(() => {
    let isMounted = true;
    const onTrackChange = async () => {
      if (isMounted) {
        const newTrack = await TrackPlayer.getCurrentTrack();
        swiperListRef.current?.scrollToIndex({ index: newTrack, animated: true });
      }
    };

    TrackPlayer.addEventListener('playback-track-changed', onTrackChange);
    return () => {
      isMounted = false;
    };
  }, []);

  const togglePlayBackState = async (playBackState) => {
    if (playBackState.state === State.Paused) {
      await TrackPlayer.play();

      setVisibleIcon(false);
    } else {
      await TrackPlayer.pause();

      setVisibleIcon(true);
    }
  };

  const handlePrevPress = async () => {
    const currentIndex = swiperListRef.current.getCurrentIndex() || 0;

    const nextIndex = currentIndex - 1;

    swiperListRef.current?.scrollToIndex({ index: nextIndex >= 0 ? nextIndex : 0 });

    await TrackPlayer.skipToPrevious();

    await TrackPlayer.play();
  };
  const handleNextPress = async () => {
    const currentIndex = swiperListRef.current.getCurrentIndex() || 0;

    const nextIndex = currentIndex + 1;

    swiperListRef.current?.scrollToIndex({ index: nextIndex });

    await TrackPlayer.skipToNext();

    await TrackPlayer.play();
  };
  const renderItem = useCallback((item) => {
    return (
      <View key={item.index} style={{ width: Dimensions.get('window').width }}>
        <Image source={{ uri: routeData?.item?.personId?.thumbnail }} style={style.imageStyle} />
      </View>
    );
  }, []);

  const rotateOnPress = async () => {
    if (repeatMode) {
      await TrackPlayer.setRepeatMode(RepeatMode.Track);

      setRepeatMode(false);
    } else {
      await TrackPlayer.setRepeatMode(RepeatMode.Off);

      setRepeatMode(true);
    }
  };

  const suffleIconOnPress = async () => {
    if (isShuffleEnabled) {
      const shuffledAudioTracks = DUMMY_VOICE.sort(() => Math.random() - 0.5);

      await TrackPlayer.add(shuffledAudioTracks);

      await TrackPlayer.play();

      setIsShuffleEnabled(false);
    } else {
      await TrackPlayer.add(DUMMY_VOICE);

      await TrackPlayer.play();

      setIsShuffleEnabled(true);
    }
  };
  return (
    <SafeAreaView style={[style.container, { backgroundColor: themeColors.screenBackground }]}>
      <PlayScreenHeader />

      <View>
        <SwiperFlatList
          renderAll={false}
          onChangeIndex={async (currentIndex) => {
            if (currentIndex.index !== name) {
              setName(currentIndex.index);
              await TrackPlayer.skip(currentIndex.index);
              await TrackPlayer.play();
            }
          }}
          ref={swiperListRef}
          style={style.swiperFlatListStyle}
          horizontal={true}
          data={[...Array(DUMMY_VOICE.length)]}
          renderItem={renderItem}
        />
      </View>

      <View style={style.artistNameView}>
        <Text style={style.artistNameTextStyle}>{DUMMY_VOICE?.[name]?.personId?.name}</Text>

        <SvgIcon svgFile={<Heart />} />
      </View>

      <Slider
        minimumTrackTintColor={colors.DodgerBlue}
        maximumTrackTintColor={colors.lightGray}
        style={style.sliderStyle}
        value={progress.position}
        maximumValue={progress.duration}
        minimumValue={0}
        onValueChange={async (value) => {
          await TrackPlayer.seekTo(value);
        }}
      />

      <View style={style.timeView}>
        <Text style={style.timeText}>{formatTime((progress?.position / 60).toFixed(0), progress?.position.toFixed(0))}</Text>

        <Text style={style.timeText}>{formatTime((progress?.duration / 60).toFixed(0), progress?.duration.toFixed(0))}</Text>
      </View>

      <AudioControllerView
        rotateOnPress={rotateOnPress}
        suffleIconOnPress={suffleIconOnPress}
        playForwardOnPress={handleNextPress}
        musicBackIconOnPress={handlePrevPress}
        visibleIcon={visibleIcon}
        playButtonOnPress={async () => {
          await togglePlayBackState(playState);
        }}
      />

      <Button buttonName={'Share'} buttonStyle={style.shareButtonStyle} />
    </SafeAreaView>
  );
};
export default PlayScreen;
