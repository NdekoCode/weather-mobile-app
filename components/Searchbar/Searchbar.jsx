import { TextInput, View } from "react-native";
import { s } from "./searchbar.style";
const Searchbar = ({ onSubmit }) => {
  return (
    <View style={s.searchContainer}>
      <TextInput
        placeholder="Chercher une ville... Ex:Kinshasa"
        placeholderTextColor={"#999"}
        style={s.searchInput}
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      />
    </View>
  );
};

export default Searchbar;
