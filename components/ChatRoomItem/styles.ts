import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  image: {
    width: 52,
    height: 52,
    borderRadius: 10000,
    alignSelf: "center",
  },
  container: {
    flexDirection: "row",
    width: width,
    paddingRight: 10,
    padding: 10,
    marginBottom: 5,
  },
  textContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 12,
    color: "grey",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text2: {
    fontSize: 14,
    color: "#595260",
  },
  twoText: {
    paddingLeft: width / 30,
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {},
  badge: {
    width: 22,
    height: 22,
    backgroundColor: "#3777f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10000,
    position: "absolute",
    left: 50,
    top: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  badgeText: {
    color: "#fff",
  },
});

export default styles;
