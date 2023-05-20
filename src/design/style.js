import { StyleSheet } from "react-native";
import { colorCode } from "./colorCode";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  lg: {
    fontSize: 48,
    fontFamily: "Poppins-Black",
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Medium",
  },
  md: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  sm: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  xs: {
    fontSize: 16,
    fontFamily: "Poppins-Light",
  },
  ard: {
    flexDirection: "row",
  },
  mt: {
    marginTop: 15,
  },
  pv: {
    paddingTop: 25,
  },
  bt: {
    borderBottomColor: colorCode.black,
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 30,
    marginBottom: 15,
  },
  btw: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ctr: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pad: {
    padding: 20,
  },
  card: {
    marginVertical: 5,
  },
  input: {
    borderWidth: 2,
    borderRadius: 4,
    paddingLeft: 10,
    width: "100%",
    padding: 10,
    fontSize: 16,
    alignSelf: "center",
    fontFamily: "Poppins-Medium",
  },
  tab: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#999",
    margin: 1,
    width: "33%",
    paddingVertical: 10,
    display: "flex",
    // backgroundColor: colorCode.tab,
    justifyContent: "center",
    alignItems: "center",
  },
  hCard: {
    borderRadius: 10,
    backgroundColor: colorCode.brand,
    marginRight: 10,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  noData: {
    width: "100%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
});
