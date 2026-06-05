import { ScrollView, Text, View } from 'react-native';

export default function PromoBanner() {
  const message = 'Save 10% off full-price items*';

  return (
    <View className="h-9 bg-furnito-brown">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Text key={index} className="mx-5 text-xs font-medium text-white">
            {message}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
