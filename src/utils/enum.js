export const screenName = {
  BOTTOM_BAR: 'BottomBar',
  BOOKING: 'Booking',
  EXPLORE: 'Explore',
  ADD_STATION: 'AddStation',
  CHARGING: 'Charging',
  PREMIUM: 'Premium',
  SIGN_IN: 'SignIn',
  SIGNUP: 'SignUp',
  FORGOT_PASSWORD: 'ForgotPassword',
  PLAY_SCREEN: 'PlayScreen',
};
//enum for language
export const tabStackName = {
  CREATE_STACK: 'CREATE_STACK',
  HISTORY_STACK: 'HISTORY_STACK',
  CLONE_STACK: 'CLONE_STACK',
  HOME_STACK: 'HOME_STACK',
};

export const ScreenTitle = {
  BOTTOM_BAR: 'BOTTOM_BAR',
  BOOKING: 'BOOKING',
  EXPLORE: 'Explore',
  ADD_STATION: 'ADD_STATION',
  CHARGING: 'CHARGING',
  PLANNER: 'PLANNER',
  SIGN_IN: 'SIGN_IN',
  SIGNUP: 'SIGNUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
};
export const textInputLabel = {
  FULL: 'FULL',
  EMAIL_ADDRESS: 'EMAIL_ADDRESS',
  MOBILE_NUMBER: 'MOBILE_NUMBER',
  PASSWORD: 'PASSWORD',
  CONFIRM_PASSWORD: 'CONFIRM_PASSWORD',
};

export const textInputPlaceHolder = {
  ENTER_YOUR_NAME: 'ENTER_YOUR_NAME',
  ENTER_YOUR_EMAIL: 'ENTER_YOUR_EMAIL',
  ENTER_YOUR_NUMBER: 'ENTER_YOUR_NUMBER',
  ENTER_YOUR_PASSWORD: 'ENTER_YOUR_PASSWORD',
  ENTER_YOUR_CONFIRM_PASSWORD: 'ENTER_YOUR_CONFIRM_PASSWORD',
};

export const buttonName = {
  SIGNUP: 'SIGNUP',
  SIGNIN: 'SIGNIN',
  RESET_PASSWORD: 'RESET_PASSWORD',
};
export const errorMessage = {
  INVALID_EMAIL: 'INVALID_EMAIL',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
};

export const otherAuthLines = {
  DONT_HAVE_A_ACCOUNT: 'DONT_HAVE_A_ACCOUNT',
  ALREADY_HAVE_A_ACCOUNT: 'ALREADY_HAVE_A_ACCOUNT',
};
export const USER_DUMMY_DATA = [
  {
    _id: 1,
    text: 'Hello, how are you?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Selmon Bhoi',
    },
  },
  {
    _id: 2,
    text: 'Hello, how are you?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'aiswariya rai',
    },
    image: 'https://raw.githubusercontent.com/progresso-group/react-giphy-picker/master/example/preview.gif',
  },
];

export const PERMISSION_GRANTED_ENUM = {
  GRANTED: 'granted',
};

export const HISTORY_TEXT = {
  TEXT: "It's famous for its historic architecture and charming cafes. Plus, there's a beautiful lake nearby.",
};

export const DUMMY_VOICE = [
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704276781192_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'This is the sample speech for testing',
    id: '659533643e4891956c889895',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704277007343_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Khanjan',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'another speech',
    id: '659534443e4891956c8898ae',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704277671366_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Smit',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'another speech',
    id: '659536d43e4891956c8898bd',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704282756518_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Kaushik',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'This is the sample speech for testing',
    id: '65954ac589250cbf923a4df5',
  },
  {
    time: 6,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704282892293_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Sharavan',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'This is the sample speech for testing',
    id: '65954b49c1318f3ce1788ef3',
  },
  {
    time: 6,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704283148303_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Deep',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'This is the sample speech for testing',
    id: '65954c41c1318f3ce1788f02',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704283515438_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Yasir',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'This is the sample speech for testing',
    id: '65954dbec1318f3ce1788f23',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704709127511_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'This is the sample speech for testing',
    id: '659bcc4cea90ac58f870dc01',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704710398214_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Hello how are you?',
    id: '659bd12fea90ac58f870dc1c',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704710588653_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Hello how are you?',
    id: '659bd1ecea90ac58f870dc2b',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704710871761_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'What is your name?',
    id: '659bd303ea90ac58f870dc3a',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704715044837_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'What is your name?',
    id: '659be355ea90ac58f870dcdf',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704715164100_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'What is your name?',
    id: '659be3c6ea90ac58f870dcee',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704866974133_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Hello Vinit',
    id: '659e34cb4985046cf4e00f06',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704867436421_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Good Afternoon.',
    id: '659e36924985046cf4e00f30',
  },
  {
    time: 22,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704870505570_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Note that the handler is used to post a delayed runnable that updates the SeekBar and TextViews every 100 milliseconds. This ensures that the UI components are updated regularly while the audio is playing. Additionally, the onDestroy() method removes callbacks to prevent memory leaks when the activity is destroyed.',
    id: '659e43634985046cf4e00fb4',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704871001291_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'आपका क्या नाम है',
    id: '659e449e4985046cf4e00fd6',
  },
  {
    time: 22,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704870853074_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Note that the handler is used to post a delayed runnable that updates the SeekBar and TextViews every 100 milliseconds. This ensures that the UI components are updated regularly while the audio is playing. Additionally, the onDestroy() method removes callbacks to prevent memory leaks when the activity is destroyed.',
    id: '659e44d14985046cf4e00fe4',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704876633347_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Test message',
    id: '659e5a871090808d7d613939',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704876907510_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'a',
    id: '659e5ba11090808d7d61395a',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704877280132_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: "What's up buddy.",
    id: '659e5d0b1090808d7d613972',
  },
  {
    time: 2,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704878000820_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Hello sir.',
    id: '659e5fd71090808d7d61399c',
  },
  {
    time: 6,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704967325551_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: "Happy Birthday! Another year, and you're just getting sweeter",
    id: '659fbce321a8a0e4e5b95ce4',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704976646485_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Happy Birthday to you dear...',
    id: '659fe13c21a8a0e4e5b95e30',
  },
  {
    time: 3,
    url: 'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/outputs/656eea18680f439f0f542941/6579458849092d6e8b5f699c/1704976800456_generated-audio.wav',
    userId: '656eea18680f439f0f542941',
    personId: {
      name: 'Christiano Ronaldo',
      thumbnail:
        'https://ndsvtuewuwhwwopvbgwu.supabase.co/storage/v1/object/public/voice-clone-develop/thumbnails/65aa3cee1e9f126d16ede3c1/65ab8be82f81c1059ae69dfc/ronaldo.png',
      id: '65ab71292f81c1059ae69d7f',
    },
    text: 'Happy Birthday to you dear...',
    id: '659fe1d421a8a0e4e5b95e5a',
  },
];
export const PREMIUM_DETAILS = [
  'Full access to all AI Voices.',
  'Expanded export formats (MP3, WAV,\n' + 'FLAC, AAC, WMA, OGG.)',
  'Export audio in high quality.',
  'Advance features for AI Text to Speech,\n' + 'AI Voice Changer, and AI Voice Translate.',
];
