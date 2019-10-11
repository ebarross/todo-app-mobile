import AsyncStorage from '@react-native-community/async-storage';

const deviceStorage = {
  saveItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.log(`AsyncStorage Error: ${err.message}`);
    }
  },
  getItem: async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log(`AsyncStorage Error: ${err.message}`);
    }
  },
  removeItem: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(`AsyncStorage Error: ${err.message}`);
    }
  },
};

export default deviceStorage;
