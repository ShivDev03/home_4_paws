import { PERMISSION_GRANTED_ENUM } from '@utils/enum';
import { isAndroid } from '@utils/helper';
import { PERMISSIONS, request, requestMultiple, RESULTS } from 'react-native-permissions';

export const PERMISSION_DATA = {
  CAMERA: isAndroid ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA,
  ACCESS_FINE_LOCATION: isAndroid ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_ALWAYS,
  MEDIA_LIBRARY: PERMISSIONS.IOS.MEDIA_LIBRARY,
};
const checkAndRequestMultiplePermissions = async (permissions, callback = () => {}) => {
  !Array.isArray(permissions)
    ? await request(permissions).then((permission) => {
        switch (permission) {
          case RESULTS.DENIED:
            callback({ denied: permission });
            break;
          case RESULTS.GRANTED:
            callback({ granted: permission });
            break;
          case RESULTS.BLOCKED:
            callback({ blocked: permission });
            break;
        }
      })
    : await requestMultiple(permissions).then((permission) => {
        const grantedArray = [];
        const deniedArray = [];
        const blockedArray = [];
        Object.keys(permission).forEach((key) => {
          const status = permission[key];

          switch (status) {
            case RESULTS.DENIED:
              deniedArray.push(key.split('.').pop());
              callback({ denied: deniedArray });
              break;
            case RESULTS.GRANTED:
              grantedArray.push(key.split('.').pop());
              callback({ granted: grantedArray });
              break;
            case RESULTS.BLOCKED:
              blockedArray.push(key.split('.').pop());
              callback({ blocked: blockedArray });
              break;
          }

          if (status === PERMISSION_GRANTED_ENUM.GRANTED) {
          } else {
          }
        });
      });
};

export default checkAndRequestMultiplePermissions;
