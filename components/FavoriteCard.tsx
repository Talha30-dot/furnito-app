import { Feather } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../data/products';

type Props = {
  product: Product;
  onPress?: () => void;
};

export default function FavoriteCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} className="mb-7 flex-1">
      <View className="relative h-40 overflow-hidden rounded-2xl bg-furnito-soft">
        <Image source={{ uri: product.image }} className="h-full w-full" resizeMode="cover" />
        <View className="absolute right-3 top-3 h-8 w-8 items-center justify-center rounded-full bg-white/90">
          <Feather name="heart" size={19} color="#ef4444" />
        </View>
      </View>

      <Text numberOfLines={2} className="mt-3 min-h-[40px] text-base font-medium leading-5 text-furnito-ink">
        {product.name}
      </Text>
      <Text className="mt-2 text-lg font-semibold text-furnito-ink">${product.price.toLocaleString()}.00</Text>

      <TouchableOpacity activeOpacity={0.8} className="mt-3 h-10 items-center justify-center rounded-full border border-furnito-brown">
        <Text className="text-sm font-semibold text-furnito-brown">Add to cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
