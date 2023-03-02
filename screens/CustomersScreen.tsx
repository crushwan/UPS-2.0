import { Text, ScrollView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect, useState } from 'react'
import {useTailwind} from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Customers">,
NativeStackNavigationProp<RootStackParamList>
>

const CustomersScreen = () => {
  const t = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <ScrollView style={{ backgroundColor: "#90D4A1"}}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1632884333982-e3b4f9fddd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}}
        containerStyle={t("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input 
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        containerStyle={t("bg-white pt-5 pb-0 px-10")}
      />
    </ScrollView>
  )
}

export default CustomersScreen