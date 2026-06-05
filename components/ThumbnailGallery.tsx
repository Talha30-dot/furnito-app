import { FlatList, Image, TouchableOpacity } from 'react-native';

type Props = {
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
};

export default function ThumbnailGallery({ images, selectedImage, onSelect }: Props) {
  return (
    <FlatList
      horizontal
      data={images}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
      renderItem={({ item }) => {
        const selected = item === selectedImage;

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onSelect(item)}
            className={selected ? 'h-16 w-16 overflow-hidden rounded-xl border-2 border-furnito-brown' : 'h-16 w-16 overflow-hidden rounded-xl border border-neutral-200'}
          >
            <Image source={{ uri: item }} className="h-full w-full" resizeMode="cover" />
          </TouchableOpacity>
        );
      }}
    />
  );
}
