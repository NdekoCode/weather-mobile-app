import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  weatherAdvanced: {
    flex: 1,
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding:10,
    gap: 20,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderWidth: 2,
    borderColor: "#f1f1f1",
    borderRadius: 15,
  },
  view: {
    width: "100%",
    alignItems:'center',
    flexShrink: 1,
  },
  firstText: {
    marginBottom: 5,
    fontSize: 20,
  },
  text: {
    fontSize: 15,
  },
});
export { s };
