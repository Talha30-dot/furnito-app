# Furnito App

Hafta 15 ödevi için hazırlanmış React Native / Expo Router mobilya e-ticaret uygulaması.

## Kullanılan Yapılar

- Expo Router Tabs
- Stack Navigation
- Dynamic Route: `app/product/[id].tsx`
- FlatList
- Custom Header
- NativeWind
- TypeScript

## Ekranlar

- Home
- Favorites
- Discover
- Bag
- Profile
- Product Detail

## Çalıştırma

```bash
npm install
npx expo start -c
```

Telefonla çalıştırmak için Expo Go uygulamasından terminalde çıkan QR kodu okut.

## Klasör Yapısı

```txt
app/
  _layout.tsx
  (tabs)/
    _layout.tsx
    index.tsx
    favorites.tsx
    discover.tsx
    bag.tsx
    profile.tsx
  product/
    [id].tsx
components/
  PromoBanner.tsx
  HeroCard.tsx
  CategoryTabs.tsx
  ProductCard.tsx
  FavoriteCard.tsx
  ThumbnailGallery.tsx
data/
  products.ts
```

## Screenshotlar

### Home
![Home](assets/screenshots/home.png)

### Product Detail
![Product Detail](assets/screenshots/detail.png)

### Favorites
![Favorites](assets/screenshots/favorites.png)
