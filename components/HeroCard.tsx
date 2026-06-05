import { ImageBackground, Text, View } from 'react-native';

const heroImage =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop';

export default function HeroCard() {
  return (
    <View className="mx-5 mt-4 h-64 overflow-hidden rounded-3xl bg-furnito-soft">
      <ImageBackground source={{ uri: heroImage }} resizeMode="cover" className="h-full w-full justify-end">
        <View className="h-full w-full justify-end bg-white/30 px-5 pb-8">
          <Text className="max-w-[300px] text-3xl font-semibold leading-9 text-furnito-ink">
            Find Furniture You'll Love – Delivered to Your Door.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
