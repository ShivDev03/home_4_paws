import React from 'react';

import Svg, { Path } from 'react-native-svg';

const HistoryTabIcon = ({ iconColor }) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22.5 12.1999C22.5 14.9847 21.3938 17.6554 19.4246 19.6245C17.4555 21.5937 14.7848 22.6999 12 22.6999C9.21523 22.6999 6.54451 21.5937 4.57538 19.6245C2.60625 17.6554 1.5 14.9847 1.5 12.1999C1.5 12.001 1.57902 11.8102 1.71967 11.6696C1.86032 11.5289 2.05109 11.4499 2.25 11.4499C2.44891 11.4499 2.63968 11.5289 2.78033 11.6696C2.92098 11.8102 3 12.001 3 12.1999C2.99692 14.2084 3.66478 16.1605 4.8976 17.7461C6.13041 19.3318 7.85753 20.4603 9.80483 20.9525C11.7521 21.4446 13.808 21.2723 15.6462 20.4628C17.4844 19.6533 18.9995 18.253 19.9511 16.4842C20.9028 14.7154 21.2363 12.6795 20.8989 10.6995C20.5614 8.71948 19.5723 6.90893 18.0886 5.55518C16.6048 4.20144 14.7114 3.38206 12.7088 3.22712C10.7063 3.07217 8.70935 3.59053 7.035 4.69991H7.5C7.69891 4.69991 7.88968 4.77893 8.03033 4.91958C8.17098 5.06024 8.25 5.251 8.25 5.44991C8.25 5.64883 8.17098 5.83959 8.03033 5.98024C7.88968 6.1209 7.69891 6.19991 7.5 6.19991H5.25C5.05109 6.19991 4.86032 6.1209 4.71967 5.98024C4.57902 5.83959 4.5 5.64883 4.5 5.44991V3.19991C4.5 3.001 4.57902 2.81024 4.71967 2.66958C4.86032 2.52893 5.05109 2.44991 5.25 2.44991C5.44891 2.44991 5.63968 2.52893 5.78033 2.66958C5.92098 2.81024 6 3.001 6 3.19991V3.58541C7.5741 2.48839 9.41875 1.84374 11.3335 1.72152C13.2483 1.5993 15.1599 2.00417 16.8607 2.89215C18.5615 3.78012 19.9865 5.11724 20.9807 6.75821C21.9749 8.39919 22.5004 10.2813 22.5 12.1999ZM18.75 12.1999C18.75 13.5349 18.3541 14.84 17.6124 15.95C16.8707 17.06 15.8165 17.9252 14.5831 18.4361C13.3497 18.947 11.9925 19.0807 10.6831 18.8202C9.37377 18.5598 8.17103 17.9169 7.22703 16.9729C6.28302 16.0289 5.64015 14.8261 5.3797 13.5168C5.11925 12.2074 5.25292 10.8502 5.76381 9.6168C6.2747 8.3834 7.13987 7.32919 8.2499 6.58749C9.35993 5.84579 10.665 5.44991 12 5.44991C13.7896 5.4519 15.5053 6.1637 16.7708 7.42914C18.0362 8.69458 18.748 10.4103 18.75 12.1999ZM14.6663 13.0759L12.75 11.7987V8.44991C12.75 8.251 12.671 8.06024 12.5303 7.91958C12.3897 7.77893 12.1989 7.69991 12 7.69991C11.8011 7.69991 11.6103 7.77893 11.4697 7.91958C11.329 8.06024 11.25 8.251 11.25 8.44991V12.1999C11.25 12.3234 11.2804 12.4449 11.3387 12.5538C11.3969 12.6626 11.4811 12.7554 11.5837 12.8239L13.8337 14.3239C13.9992 14.4343 14.2018 14.4744 14.3969 14.4355C14.592 14.3965 14.7636 14.2817 14.874 14.1162C14.9844 13.9507 15.0245 13.7481 14.9856 13.553C14.9466 13.3579 14.8317 13.1863 14.6663 13.0759Z"
        fill={iconColor}
        fill-opacity="0.6"
      />
    </Svg>
  );
};
export default HistoryTabIcon;
