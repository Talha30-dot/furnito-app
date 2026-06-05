import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteCard from '../../components/FavoriteCard';
import { products } from '../../data/products';

const favoriteProducts = products.filter((product) => product.isFavorite);

export default function FavoritesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-row items-center justify-between px-5 py-4">
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white">
          <Feather name="search" size={23} color="#111111" />
        </TouchableOpacity>

        <Text className="text-base font-semibold text-furnito-ink">My Favorites</Text>

        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-neutral-300">
          <Feather name="plus" size={20} color="#111111" />
        </TouchableOpacity>
      </View>

      <View className="mb-5 flex-row items-start justify-between px-5">
        <View>
          <Text className="text-3xl font-semibold text-furnito-ink">Favorites</Text>
          <Text className="mt-2 text-base text-furnito-ink">{favoriteProducts.length} Items</Text>
        </View>

        <TouchableOpacity className="mt-2 h-10 w-10 items-center justify-center rounded-full">
          <Feather name="more-horizontal" size={23} color="#111111" />
        </TouchableOpacity>
      </View>

      {favoriteProducts.length === 0 ? (
        <View className="flex-1 items-center justify-center px-6">
          <Feather name="heart" size={44} color="#d1d5db" />
          <Text className="mt-4 text-base text-neutral-500">Henüz favori yok</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ gap: 14, paddingHorizontal: 20 }}
          contentContainerStyle={{ paddingBottom: 28 }}
          renderItem={({ item }) => (
            <FavoriteCard product={item} onPress={() => router.push({ pathname: '/product/[id]', params: { id: item.id } })} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
