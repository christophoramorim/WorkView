import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-vector-icons/FontAwesome5";

import{
    HomeNavegation,
    LoginNavegation,
    UsuarioNavegation,
    EmpresaNavegation,
}   from "./StackNavigation";

const Tab = createBottomTabNavigator()

export default function ShowBottomTabs()
{
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeNavegation} />
            <Tab.Screen name="LoginTab" component={LoginNavegation} />
            <Tab.Screen name="UsuarioTab" component={UsuarioNavegation} />
            <Tab.Screen name="EmpresaTab" component={EmpresaNavegation} />
        </Tab.Navigator>
    )
}





