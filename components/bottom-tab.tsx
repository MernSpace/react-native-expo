import React, { useState } from 'react';
import { View, Text, Pressable, useColorScheme } from 'react-native';
import { Home, Search, Heart, User, PlusCircle } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '@/app/screen/home-screen';
import SearchScreen from '@/app/screen/search-screen ';
import AddScreen from '@/app/screen/add-screen';

// Import your screen components


export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('home');
  const { bottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const tabs = [
    { id: 'home', icon: Home, label: 'Home', component: HomeScreen },
    { id: 'search', icon: Search, label: 'Search', component: SearchScreen },
    { id: 'add', icon: PlusCircle, label: 'Add', component: AddScreen },
    { id: 'favorites', icon: Heart, label: 'Favorites', component: HomeScreen },
    { id: 'profile', icon: User, label: 'Profile', component: SearchScreen },
  ];

  // Get the active screen component
  const ActiveScreen = tabs.find(tab => tab.id === activeTab)?.component || HomeScreen;

  return (
    <View className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Screen Content */}
      <View className="flex-1">
        <ActiveScreen />
      </View>

      {/* Bottom Navigation */}
      <View
        style={{ paddingBottom: bottom }}
        className="absolute bottom-0 left-0 right-0 px-6 pb-4"
      >
        <View className={`rounded-3xl shadow-lg px-6 py-4 ${
          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
        }`}>
          <View className="flex-row items-end justify-between">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const isCenter = tab.id === 'add';

              return (
                <Pressable
                  key={tab.id}
                  onPress={() => setActiveTab(tab.id)}
                  className={`items-center justify-center ${
                    isCenter ? '-mt-8' : ''
                  }`}
                  android_ripple={{ color: isDark ? '#374151' : '#f3f4f6', radius: 28 }}
                >
                  {/* Center Button */}
                  {isCenter ? (
                    <View
                      className={`p-4 rounded-full shadow-xl ${
                        isActive
                          ? 'bg-purple-600'
                          : isDark ? 'bg-gray-700' : 'bg-gray-900'
                      }`}
                    >
                      <Icon size={28} color="white" strokeWidth={2} />
                    </View>
                  ) : (
                    <>
                      {/* Active Indicator */}
                      {isActive && (
                        <View className="absolute -top-1 w-12 h-1 bg-purple-600 rounded-full" />
                      )}

                      {/* Icon */}
                      <View
                        className={`p-3 rounded-2xl ${
                          isActive 
                            ? isDark ? '#374151' : 'bg-purple-50'
                            : ''
                        }`}
                      >
                        <Icon
                          size={24}
                          color={
                            isActive 
                              ? '#7c3aed' 
                              : isDark ? '#9ca3af' : '#9ca3af'
                          }
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                      </View>

                      {/* Label */}
                      <Text
                        className={`text-xs mt-1 font-medium ${
                          isActive 
                            ? 'text-purple-600' 
                            : isDark ? 'text-gray-400' : 'text-gray-400'
                        }`}
                      >
                        {tab.label}
                      </Text>
                    </>
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}