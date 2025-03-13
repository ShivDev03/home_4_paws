import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import BackMusicIcon from '@assets/icons/svgIcons/backMusicIcon';
import PauseIcon from '@assets/icons/svgIcons/pauseIcon';
import PlayIcon from '@assets/icons/svgIcons/playIcon';
import RotateIcon from '@assets/icons/svgIcons/rotateIcon';
import SuffleIcon from '@assets/icons/svgIcons/suffleIcon';
import { SvgIcon } from '@component/index';

import style from './style';

const AudioControllerView = ({ suffleIconOnPress, musicBackIconOnPress, playButtonOnPress, playForwardOnPress, rotateOnPress, visibleIcon }) => {
  return (
    <View style={style.container}>
      <SvgIcon svgFile={<SuffleIcon />} onPress={suffleIconOnPress} />
      <SvgIcon svgFile={<BackMusicIcon />} onPress={musicBackIconOnPress} />
      <TouchableOpacity onPress={playButtonOnPress} style={[style.playButton, { paddingLeft: visibleIcon ? 27 : 24 }]}>
        {visibleIcon ? <PlayIcon /> : <PauseIcon />}
      </TouchableOpacity>
      <SvgIcon style={style.forwardButtonOnPress} svgFile={<BackMusicIcon />} onPress={playForwardOnPress} />
      <SvgIcon svgFile={<RotateIcon />} onPress={rotateOnPress} />
    </View>
  );
};
export default AudioControllerView;
