export const WEATHER_INTERPRATIONS = [
  {
    codes: [0],
    label: "Ensoleillé",
    image: require("../assets/weatherImg/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Nuageux",
    image: require("../assets/weatherImg/clouds.png"),
  },
  {
    codes: [
      51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86,
    ],
    label: "Pluvieux",
    image: require("../assets/weatherImg/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Neigeux",
    image: require("../assets/weatherImg/snow.png"),
  },
  {
    codes: [96, 95,99],
    label: "Orageux",
    image: require("../assets/weatherImg/thunder.png"),
  },
];
export const getWeatherInterpretation = (code)=>{
  return WEATHER_INTERPRATIONS.find(w=>w.codes.includes(code))
}