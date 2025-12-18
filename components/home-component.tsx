import { FlatList, Image, ScrollView, View } from "react-native";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { Products } from '@/Constant';


export default function HomeComponent() {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="mt-16 p-4">
                    <Text className="font-bold text-2xl mb-4 mt-4">Hello App</Text>

                    <FlatList
                        horizontal
                        data={Products}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 16 }}
                        renderItem={({ item }) => (
                            <Card className="w-56 overflow-hidden pt-0 pb-0">
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: '100%', aspectRatio: 1 }}
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
                <View className='mt-15 p-4 pb-34'>
                    <Text className='text-2xl font-bold'>
                        Propuler Product's
                    </Text>
                    <FlatList
                        data={Products}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 16, paddingBottom: 20 }}
                        columnWrapperStyle={{ gap: 16 }}
                        renderItem={({ item }) => (
                            <Card className='w-[180px] overflow-hidden pt-0'>
                                <Image source={{ uri: item.image }}
                                    style={{ width: '100%', aspectRatio: 1 }}
                                    resizeMode="cover"
                                />
                                <View className='p-3'>
                                    <Text className='font-semibold'>{item.title}</Text>
                                    <Text className='font-muted-foreground'>{item.title}</Text>
                                    <Button className='mt-2'>
                                        <Text>Buy Now</Text>
                                    </Button>
                                </View>
                            </Card>
                        )}
                    />
                    <Text>Get More</Text>
                </View>

            </ScrollView>

        </View>
    )
}