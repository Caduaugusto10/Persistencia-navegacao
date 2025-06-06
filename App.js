import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Stack from "./Navigation/StackNavigator";


export default function App() {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    );
}