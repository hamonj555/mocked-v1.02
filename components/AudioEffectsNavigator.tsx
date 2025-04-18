import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { audioCategories, getEffectsByCategory } from '@/constants/audioEffects';
import { colors } from '@/constants/colors';
import { Play } from 'lucide-react-native';

export default function AudioEffectsNavigator() {
  const [selectedCategory, setSelectedCategory] = useState(audioCategories[0].id);
  const [effects, setEffects] = useState(getEffectsByCategory(audioCategories[0].id));

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setEffects(getEffectsByCategory(categoryId));
  };

  // Helper to get abbreviated category name
  const getAbbreviation = (name: string) => {
    return name.substring(0, 2);
  };

  return (
    <View style={styles.container}>
      {/* Horizontal category selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryScrollContent}
      >
        {audioCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategoryButton
            ]}
            onPress={() => handleCategoryPress(category.id)}
          >
            <View style={styles.categoryTextContainer}>
              <Text style={styles.categoryInitial}>
                {category.name.charAt(0)}
              </Text>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.id && styles.selectedCategoryText
                ]}
              >
                {getAbbreviation(category.name)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Vertical effects list */}
      <FlatList
        data={effects.slice(0, 10)}
        keyExtractor={(item) => item.id}
        style={styles.effectsList}
        renderItem={({ item }) => (
          <View style={styles.effectItem}>
            <View style={styles.effectContent}>
              <Text style={styles.effectName}>{item.name}</Text>
              <Text style={styles.effectDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Play color="#FFFFFF" size={10} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 4,
    height: 160,
    paddingHorizontal: 4,
  },
  categoryScroll: {
    maxHeight: 20,
  },
  categoryScrollContent: {
    paddingVertical: 0,
    gap: 3,
  },
  categoryButton: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 45,
  },
  categoryTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCategoryButton: {
    backgroundColor: colors.primary,
  },
  categoryInitial: {
    fontSize: 8,
    marginRight: 2,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  categoryText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 8,
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  effectsList: {
    flex: 1,
    marginTop: 2,
  },
  effectItem: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 4,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
  },
  effectContent: {
    flex: 1,
  },
  effectName: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },
  effectDescription: {
    color: '#AAAAAA',
    fontSize: 7,
    marginTop: 1,
  },
  playButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});