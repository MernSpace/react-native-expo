import { Image, ScrollView, View } from "react-native";
import { useState } from "react";
import { Text } from "./ui/text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react-native";
import { Products } from "@/Constant";
import { Card } from "./ui/card";

export default function SearchComponent() {
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(Products);

    const handleSearch = () => {
        const result = Products.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(result);
    };

    return (
        <SafeAreaView>
            <View className="mt-16 flex flex-row justify-between items-center px-4 pb-4">
                <Input
                    className="w-80"
                    placeholder="Search Product's"
                    value={query}
                    onChangeText={setQuery}
                />

                <Button className="bg-pink-500 ml-2" onPress={handleSearch}>
                    <Search color="white" />
                </Button>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="px-4 mt-4">
                    {filteredProducts.map((item, i) => (
                        <Card className=' overflow-hidden py-0 mb-5'>
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
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
