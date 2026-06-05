import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white px-6">
      <View className="h-20 w-20 items-center justify-center rounded-full bg-furnito-soft">
        <Feather name="user" size={34} color="#6b4f2f" />
      </View>
      <Text className="mt-5 text-2xl font-semibold text-furnito-ink">Profile Screen</Text>
      <Text className="mt-2 text-center text-neutral-500">Placeholder tab screen for user profile.</Text>
    </SafeAreaView>
  );
}
