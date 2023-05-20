import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../design/style";
import { useDispatch } from "react-redux";
import * as wpActions from "../store/actions";
import { MaterialIcons } from "@expo/vector-icons";
import TextInputBox from "../components/TextInputBox";
import FixedButton from "../components/FixedButton";

export default function Payment({ navigation, route }) {
  const { value, costValue } = route.params;
  const margin = costValue / value;
  const [showCost, setShowCost] = useState(false);
  const [cost, setCost] = useState(costValue);
  const dispatch = useDispatch();
  const averageAmount = (cost / margin).toFixed(2);

  const saveData = () => {
    if (value) {
      let user = {
        val: cost ? cost : value,
        key: Date.now(),
      };
      console.log(user);
      dispatch(wpActions.saveToDatabase(user));
      navigation.navigate("Dashboard");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ctr}>
        <MaterialIcons name="cloud-done" size={80} color="#0c9" />
        {costValue ? (
          <Text
            style={[styles.sm, styles.mt, { padding: 20, textAlign: "center" }]}
          >
            {`You have selected ${averageAmount} litres of fuel for a payment of`}
          </Text>
        ) : (
          <Text
            style={[styles.sm, styles.mt, { padding: 20, textAlign: "center" }]}
          >
            {`You have selected a payment of`}
          </Text>
        )}
        <View style={styles.btw}>
          <Text style={[styles.lg, { fontSize: 64 }]}>
            Rs. {cost ? cost : Math.round(value, 0)}
          </Text>
          <TouchableOpacity onPress={() => setShowCost(!showCost)}>
            <MaterialIcons name="edit" size={24} color="#0c9" />
          </TouchableOpacity>
          {showCost ? (
            <TextInputBox
              type="numeric"
              max={5}
              value={cost ? cost : Math.round(value, 0)}
              title={"Enter new value"}
              onSubmit={() => setShowCost(false)}
              onChangeText={(text) => setCost(Number(text))}
            />
          ) : (
            false
          )}
        </View>
      </View>
      <FixedButton title={"Make Payment"} onPress={() => saveData()} />
    </View>
  );
}
