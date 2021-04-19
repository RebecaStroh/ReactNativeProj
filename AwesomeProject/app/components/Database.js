import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (value) => {
    try {
        const id = new Date().getTime()
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(id.toString(), jsonValue);
        alert('Task salva');
    } catch (e) {
        alert('eroou'+e);
    }
}

module.exports = {
    storeData
}