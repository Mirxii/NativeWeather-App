# NativeWeather

Weather forecast app for mobile, developed with React Native and utilizes [OpenWeatherMap API](https://openweathermap.org/api)

**The app is still very much a work in progress.**

## Features

- Can be searched either with a city name or by using location services
  - View current weather in a given location
  - View weather forecast for the next 4 days in a given location

## Getting Started

### Dependencies

- npm
- [Expo Go](https://expo.dev/client) app on your phone (if using the app on mobile)

### Running the app on your phone

> **For now the app doesn't work because there is no API key set.**
>
> **If you would like to test the app you must create free account in OpenWeatherMap and get an API key.**
>
> **Then you have to put the API key in a `.env` file in the root directory. Such as:**
>
> ```
> OPEN_WEATHER_API_KEY=<your_api_key_here>
> ```

- Clone the repository and cd to the cloned directory
  - Run `npm install` while in the root directory to install dependencies
  - Issue `npx expo start` while in the root directory
  - Open _Expo Go_ app on your phone
  - Scan the QR-code displayed in your terminal (If you don't see one try using a different terminal)

### Running the app on web

- TBD

## TODO

- [ ] A lot of work on the UI
- [ ] A lot of error handling
- [ ] Figure out what to do with API key
