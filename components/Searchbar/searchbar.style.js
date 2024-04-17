import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  searchContainer: {
    flex: 2,
    marginVertical:50,
  },
  searchInput: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    fontSize:15,
    fontWeight:'500',
    shadowColor: "#acacac",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
export { s };
