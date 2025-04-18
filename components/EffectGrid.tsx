import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/colors';
import { videoEffects } from '@/constants/effects';
import { useVideoStore } from '@/store/videoStore';
import * as LucideIcons from 'lucide-react-native';

// Define the allowed icon names
type IconName = keyof typeof LucideIcons;

export default function EffectGrid() {
  const { addEffect, addToRecent } = useVideoStore();

  const handleEffectPress = (effectName: string) => {
    addEffect(effectName);
    addToRecent(effectName);
  };

  // Safely render an icon by name
  const renderIcon = (iconName: string, color: string) => {
    if (iconName in LucideIcons) {
      const Icon = LucideIcons[iconName as IconName] as React.ComponentType<{
        color: string;
        size: number;
      }>;
      return <Icon color={color} size={18} />; // Reduced from 24 to 18
    }
    return null;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {videoEffects.slice(0, 15).map((effect) => (
          <TouchableOpacity
            key={effect.id}
            style={styles.effectButton}
            onPress={() => handleEffectPress(effect.name)}
          >
            {renderIcon(effect.icon, effect.color || colors.text)}
            <Text style={styles.effectText}>{effect.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60, // Space for tab bar
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 4, // Added to give a bit more space at the top
  },
  effectButton: {
    width: '20%', // 5 columns
    aspectRatio: 1,
    backgroundColor: colors.effectButtonBackground,
    borderRadius: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  effectText: {
    color: colors.text,
    fontSize: 9, // Reduced from 10 to 9
    marginTop: 3, // Reduced from 4 to 3
    textAlign: 'center',
  },
});