import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Home, Empresa, Usuario } from "../Screens";

const Stack = createNativeStackNavigator()

export function HomeNavegation()
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}
export function LoginNavegation()
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}
export function EmpresaNavegation()
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Empresa" component={Empresa}/>
        </Stack.Navigator>
    )
}
export function UsuarioNavegation()
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Usuario" component={Usuario}/>
        </Stack.Navigator>
    )
}


