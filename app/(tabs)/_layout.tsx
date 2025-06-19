import {Tabs} from 'expo-router';
import {Ionicons} from "@expo/vector-icons";
import SetUp from "@/app/(tabs)/SetUp";

export default function TabLayout() {
    return (

            <Tabs initialRouteName="Practice"
                  screenOptions={{
                      tabBarBackground: () => <Practice />,
                      headerShown: false,
                  }}
            >
                <Tabs.Screen
                    name="Pattern"
                    options={{
                        title: "Pattern",

                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <SetUp
                                    name={focused ? 'journal' : 'journal-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
                <Tabs.Screen
                    name="Practice"
                    options={{
                        title: "Practice",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <Ionicons
                                    name={focused ? 'journal' :  'journal-sharp'}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }}
                />

                <Tabs.Screen
                    name="about"
                    options={{
                        title: "אודות",
                        headerStyle: {
                            backgroundColor: 'rgba(54,43,242,0.16)',
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <Ionicons
                                    name={focused ? 'information' : 'information-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
            </Tabs>
    );
}
