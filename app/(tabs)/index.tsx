import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryTabs from '../../components/CategoryTabs';
import HeroCard from '../../components/HeroCard';
import ProductCard from '../../components/ProductCard';
import PromoBanner from '../../components/PromoBanner';
import { Category, products } from '../../data/products';

type SelectedCategory = Category | 'all';

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>('all');
  const [favoriteIds, setFavoriteIds] = useState<string[]>(
    products.filter((product) => product.isFavorite).map((product) => product.id)
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const toggleFavorite = (productId: string) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(productId)
        ? currentIds.filter((id) => id !== productId)
        : [...currentIds, productId]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 14, paddingHorizontal: 20 }}
        contentContainerStyle={{ paddingBottom: 28 }}
        ListHeaderComponent={
          <View>
            <PromoBanner />
            <HeroCard />

            <View className="mx-5 mt-4 h-12 flex-row items-center rounded-full bg-white px-4 shadow-sm shadow-black/10">
              <Feather name="search" size={20} color="#111111" />
              <TextInput
                placeholder="Search anything..."
                placeholderTextColor="#9ca3af"
                className="ml-3 flex-1 text-sm text-furnito-ink"
              />
            </View>

            <CategoryTabs selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </View>
        }
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
            onPress={() => router.push({ pathname: '/product/[id]', params: { id: item.id } })}
          />
        )}
      />
    </SafeAreaView>
  );
}
