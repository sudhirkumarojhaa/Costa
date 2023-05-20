import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../design/style";
import { quickOptions, rateOptions } from "../utils/dataSource";
import TextInputBox from "../components/TextInputBox";

export default function Options({ navigation }) {
  const [cost, setCost] = useState(0);

  const renderRateOptions = (item) => {
    return (
      <TouchableOpacity
        style={styles.tab}
        activeOpacity={0.6}
        onPress={() => {
          Keyboard.dismiss();
          navigation.navigate("Payment", { value: item.item.value });
        }}
      >
        <Text style={styles.sm}>Rs. {item.item.value}</Text>
      </TouchableOpacity>
    );
  };

  const renderNearestOptions = (item) => {
    return (
      <TouchableOpacity
        style={styles.tab}
        activeOpacity={0.6}
        onPress={() => {
          Keyboard.dismiss();
          navigation.navigate("Payment", {
            value: item.item.value,
            costValue: Math.round(item.item.value * cost),
          });
        }}
      >
        <Text style={styles.sm}>
          Rs. {Math.round(item.item.value * cost, 0)}
        </Text>
        <Text style={styles.xs}>{item.item.value} Litres</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.md, styles.pv]}>Quick Options</Text>
      <ScrollView
        contentContainerStyle={{ zIndex: 100 }}
        keyboardShouldPersistTaps={"handled"}
      >
        <FlatList
          keyboardShouldPersistTaps="handled"
          data={quickOptions}
          numColumns={3}
          horizontal={false}
          renderItem={(item) => renderRateOptions(item)}
          keyExtractor={(item) => item.id}
        />
        {cost.length >= 2 ? (
          <View style={styles.mt}>
            <Text style={[styles.md, styles.pv]}>Nearest Options</Text>
            <FlatList
              data={rateOptions}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{ paddingBottom: 100 }}
              numColumns={3}
              horizontal={false}
              renderItem={(item) => renderNearestOptions(item)}
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : null}
      </ScrollView>
      <TextInputBox
        type={"decimal-pad"}
        max={5}
        title="Enter fuel price*"
        onChangeText={(text) => setCost(text)}
      />
    </View>
  );
}
