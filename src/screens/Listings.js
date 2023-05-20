import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../design/style";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import * as wpActions from "../store/actions";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { colorCode } from "../design/colorCode";
import TextButton from "../components/TextButton";

export default function Listings({ navigation }) {
  const dispatch = useDispatch();
  const database = useSelector((state) => state.appData.database);
  const sortedData = database.sort(function (a, b) {
    return b.key - a.key;
  });

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={sortedData}
        ListEmptyComponent={
          <View style={[styles.ctr, { height: 200 }]}>
            <MaterialIcons
              name="do-not-disturb-alt"
              size={30}
              color={colorCode.alert}
            />
            <Text style={styles.pv}>No entries found</Text>
            <TextButton
              title="Add New Entry"
              onPress={() => navigation.navigate("Options")}
            />
          </View>
        }
        renderItem={(item) => (
          <View
            style={[
              styles.btw,
              {
                borderBottomWidth: 1,
                padding: 2,
                marginVertical: 2,
              },
            ]}
          >
            <View style={[styles.card, { width: "90%" }]}>
              <View style={styles.btw}>
                <Text style={styles.xs}>Amount Spent:</Text>
                <Text style={styles.title}>Rs. {item.item.val}</Text>
              </View>
              <View style={styles.btw}>
                <Text style={styles.xs}>Filling Date: </Text>
                <Text style={styles.sm}>
                  {moment(item.item.key).format("LLL")}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(wpActions.removeExpense(item.item.key))}
            >
              <Feather name="delete" size={16} color={colorCode.alert} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
