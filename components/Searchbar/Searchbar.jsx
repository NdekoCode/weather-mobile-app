import { TextInput, View } from "react-native";
import { s } from "./searchbar.style";
const Searchbar = (value, onSearch) => {
  return (
    <View style={s.searchContainer}>
      <TextInput
        value={value}
        placeholder="Chercher une ville... Ex:Kinshasa" placeholderTextColor={"#999"}
        style={s.searchInput}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default Searchbar;
