import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (value) => {
    try {
        const id = new Date().getTime()
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(id.toString(), jsonValue);
        alert('Task salva');
    } catch (e) {
        alert(e);
    }
}

const getAll = async (callback) => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const list = [];
        for (k in keys) {
            const jsonValue = await AsyncStorage.getItem(keys[k])
            const jsonObject = JSON.parse(jsonValue)
            jsonObject.key = keys[k];
            list.push(jsonObject)
        }
        return callback(list);
    } catch(e) {
        alert(e)
    }
}

const getTask = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        const jsonObject = JSON.parse(jsonValue)
        return jsonObject;
    } catch(e) {
        alert(e)
    }
}

const deleteTask = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
        alert(e)
    }
}

const clear = async () => {
    try {
        await AsyncStorage.clear();
        alert('Database limpo');
    } catch (e) {
        alert(e);
    }
}

module.exports = {
    storeData,
    getAll,
    getTask,
    deleteTask,
    clear
}