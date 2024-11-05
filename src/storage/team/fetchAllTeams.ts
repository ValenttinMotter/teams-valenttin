import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchAllTeams = async () => {
  try {
    const storage = await AsyncStorage.getItem("@cesul-teams:teams");
    const teams = storage ? JSON.parse(storage) : [];

    return teams;
  } catch (error) {
    throw error;
  }
};
