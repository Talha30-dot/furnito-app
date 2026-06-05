import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Category, categories } from '../data/products';

type SelectedCategory = Category | 'all';

type Props = {
  selectedCategory: SelectedCategory;
  onSelect: (value: SelectedCategory) => void;
};

export default function CategoryTabs({ selectedCategory, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-5"
      contentContainerStyle={{ paddingHorizontal: 20, gap: 28 }}
    >
      {categories.map((category) => {
        const isActive = selectedCategory === category.value;

        return (
          <TouchableOpacity
            key={category.value}
            activeOpacity={0.8}
            onPress={() => onSelect(category.value)}
            className="pb-3"
          >
            <Text className={isActive ? 'text-sm font-semibold text-furnito-ink' : 'text-sm text-neutral-400'}>
              {category.label}
            </Text>
            {isActive && <View className="mt-3 h-[1.5px] rounded-full bg-furnito-ink" />}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
