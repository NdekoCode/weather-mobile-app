import { Text, View } from 'react-native'
import { s } from './home.style'
const Home = () => {
    console.log("Load")
  return (
    <View style={s.container}>
        <View style={s.header}>
            <Text>Home Header meteo Basic</Text>
        </View>

        <View style={s.body}>
            <Text>Home Body Search Bar</Text>
        </View>

        <View style={s.footer}>
            <Text>Home footer Meto Avancer Bar</Text>
        </View>
    </View>
  )
}

export default Home
