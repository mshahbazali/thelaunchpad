import React from "react";
import { PatchCollection, NewPatch, GeminiCollection } from "../../Screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function index() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} name="PatchCollection" component={PatchCollection} />
                <Stack.Screen options={{ headerShown: false }} name="NewPatch" component={NewPatch} />
                <Stack.Screen options={{ headerShown: false }} name="GeminiCollection" component={GeminiCollection} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}