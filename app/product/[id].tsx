import { Feather } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThumbnailGallery from '../../components/ThumbnailGallery';
import { products } from '../../data/products';

export default function ProductDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((item) => item.id === id);

  const galleryImages = useMemo(() => {
    if (!product) return [];
    return [product.image, ...product.thumbnails.slice(1)];
  }, [product]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!product) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-xl font-semibold text-furnito-ink">Ürün bulunamadı</Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-5 rounded-full bg-furnito-brown px-6 py-3">
          <Text className="font-semibold text-white">Geri dön</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const imageToShow = selectedImage ?? galleryImages[0];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              className="ml-2 h-10 w-10 items-center justify-center rounded-full bg-white/90"
            >
              <Feather name="chevron-left" size={24} color="#111111" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="mr-2 flex-row items-center gap-3">
              <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white/90">
                <Feather name="share" size={20} color="#111111" />
              </TouchableOpacity>
              <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white/90">
                <Feather name="heart" size={21} color={product.isFavorite ? '#ef4444' : '#111111'} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 112 }}>
        <View className="h-[420px] bg-furnito-soft">
          <Image source={{ uri: imageToShow }} className="h-full w-full" resizeMode="cover" />
        </View>

        <View className="mt-5">
          <ThumbnailGallery
            images={galleryImages}
            selectedImage={imageToShow}
            onSelect={setSelectedImage}
          />
        </View>

        <View className="px-5 pt-6">
          <Text className="text-center text-2xl font-medium leading-8 text-furnito-ink">{product.name}</Text>
          <Text className="mt-3 text-center text-3xl font-semibold text-furnito-ink">
            ${product.price.toLocaleString()}.00
          </Text>

          <Text className="mt-7 text-center text-base leading-6 text-neutral-700">{product.description}</Text>

          <View className="mt-7 border-t border-neutral-100">
            <View className="flex-row items-center justify-between border-b border-neutral-100 py-5">
              <Text className="text-base text-furnito-ink">Reviews</Text>
              <View className="flex-row items-center">
                <Text className="mr-2 text-base text-yellow-400">★★★★★</Text>
                <Text className="text-base text-furnito-ink">({product.reviewCount})</Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between border-b border-neutral-100 py-5">
              <Text className="text-base text-furnito-ink">Size</Text>
              <Text className="text-base font-medium text-furnito-ink">{product.size}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pb-8 pt-4">
        <TouchableOpacity activeOpacity={0.85} className="h-14 items-center justify-center rounded-full bg-furnito-brown">
          <Text className="text-base font-semibold text-white">Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
