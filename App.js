import React, { useEffect, useState } from 'react';
import { Alert } from "react-native";
import { Loading } from "./Loading"
import * as Location from 'expo-location';

const getLocation = async () => {
  try {
    await Location.requestForegroundPermissionsAsync()
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
    console.log(latitude, longitude)
  } catch (error) {
    Alert.alert("현재 위치를 가져올 수 없습니다")
  }
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getLocation()
  }, [])

  return (
      isLoading && <Loading />
  );
}
