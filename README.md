# WeatherApp

A mobile weather application developed with React Native to learn in depth how this framework works.

## Description

This application was created to deepen my knowledge of React Native and to train me in the creation of cross-platform mobile applications. It uses a weather API to retrieve current weather data and forecasts for any city in the world.

## Features

- Auto-complete city search
- Current weather display (temperature, weather icon, description)
- Weather forecast for the next 7 days
- Temperature unit management (Celsius/Fahrenheit)

## Technologies used

- React Native
- Expo
- OpenWeatherMap API (or other weather API)
- React Navigation
- Redux (optional for state management)

## Learning objectives

- Understand how React Native works
- Working with React Native components
- Use a REST API and make HTTP requests
- Manage navigation in a mobile application
- Apply responsive designs with React Native
- Potentially using Redux for state management

## Resources

API_URL= <https://api.open-meteo.com/v1/forecast>
API_CITY = <https://nominatim.openstreetmap.org/reverse>

Exemple:

1. <https://api.open-meteo.com/v1/forecast?latitude=-1.94&longitude=30.06&daily=weathercode,temperature_2m_max,sunrise,sunset,wind_speed_10m_max&timezone=auto&current_weather=true>
2. <https://nominatim.openstreetmap.org/reverse?format=json&lat=-1.94&lon=30.06>
