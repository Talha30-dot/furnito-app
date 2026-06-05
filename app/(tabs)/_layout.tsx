import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const icons = {
  index: 'home',
  favorites: 'heart',
  discover: 'compass',
  bag: 'shopping-bag',
  profile: 'user',
} as const;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#111111',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          height: 76,
          paddingTop: 10,
          borderTopWidth: 0.5,
          borderTopColor: '#eeeeee',
          backgroundColor: '#ffffff',
        },
        tabBarIcon: ({ color, focused }) => {
          const iconName = icons[route.name as keyof typeof icons] ?? 'circle';
          return <Feather name={iconName as any} size={focused ? 23 : 22} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="favorites" options={{ title: 'Favorites' }} />
      <Tabs.Screen name="discover" options={{ title: 'Discover' }} />
      <Tabs.Screen name="bag" options={{ title: 'Bag' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
