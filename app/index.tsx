import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { FlatList, Image, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Products } from '@/Constant';
import { Card } from '@/components/ui/card';

const SCREEN_OPTIONS = {
  title: 'React Native Sifat',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

export default function Screen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <SafeAreaProvider>
        <View className="mt-16 p-4">
          <Text className="font-bold text-2xl mb-4 mt-4">Hello App</Text>

          <FlatList
            horizontal
            data={Products}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
            renderItem={({ item }) => (
              <Card className="w-56 overflow-hidden pt-0">
                <Image
                  source={{ uri: item.image }}
                  style={{ width: '100%',aspectRatio:1}}
                  resizeMode="cover"
                />
               <View className='p-2'>
                 <Text className="font-semibold mt-2 dark:text-white">{item.title}</Text>
                <Text className="text-muted-foreground">${item.price}</Text>
                <Button className="mt-2">
                  <Text>Buy Now</Text>
                </Button>
               </View>
              </Card>
            )}
          />
        </View>
      </SafeAreaProvider>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="rounded-full mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
