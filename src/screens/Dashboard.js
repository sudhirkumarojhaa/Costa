import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import { styles } from "../design/style";
import { useSelector, useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import FixedButton from "../components/FixedButton";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import TextButton from "../components/TextButton";
import { colorCode } from "../design/colorCode";

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const database = useSelector((state) => state.appData.database);

  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../fonts/Poppins-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const isSelected =
    database !== null
      ? database.filter((item) => item.val).map((item) => item.val)
      : [];

  const totalPrice =
    isSelected !== null ? isSelected.map(Number).reduce((a, b) => a + b, 0) : 0;

  const sortedData = database.sort(function (a, b) {
    return b.key - a.key;
  });

  return (
    <View style={styles.container}>
      <View style={[styles.bt, styles.pv]}>
        <View style={styles.card}>
          <Text style={styles.title}>You spent:</Text>
          <Text style={styles.lg}>Rs {totalPrice}/-</Text>
        </View>
        <View style={styles.ard}>
          <Text style={styles.sm}>Last synced: </Text>
          <Text style={styles.sm}>{moment().format("LLL")}</Text>
        </View>
      </View>
      <View style={styles.btw}>
        <Text style={styles.sm}>Recent Payments</Text>
        <TextButton
          title="See All"
          onPress={() => navigation.navigate("Listings")}
        />
      </View>
      <FlatList
        contentContainerStyle={{
          height: 150,
          marginTop: 10,
        }}
        showHorizontalScrollIndicator={false}
        data={sortedData}
        horizontal
        ListEmptyComponent={
          <View style={styles.noData}>
            <MaterialIcons
              name="do-not-disturb-alt"
              size={30}
              color={colorCode.alert}
            />
            <Text style={styles.mt}>No entries found</Text>
          </View>
        }
        renderItem={(item) => (
          <View style={styles.hCard}>
            <Text style={[styles.lg, { fontSize: 26 }]}>
              Rs. {item.item.val}
            </Text>
            <Text style={styles.sm}>{moment(item.item.key).format("LL")}</Text>
            <Text style={styles.sm}>
              {moment(item.item.key).format("hh:mm a")}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
      <FixedButton
        title="Add New Entry"
        onPress={() => navigation.navigate("Options")}
      />
    </View>
  );
}
