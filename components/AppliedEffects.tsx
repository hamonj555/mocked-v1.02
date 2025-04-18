import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors } from '@/constants/colors';
import { useVideoStore } from '@/store/videoStore';
import { Plus } from 'lucide-react-native';

export default function AppliedEffects() {
  const { appliedEffects } = useVideoStore();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Effetti applicati:</Text>
      <View style={styles.effectsContainer}>
        {appliedEffects.length > 0 ? (
          <Text style={styles.effectsText}>
            {appliedEffects.join(', ')}
          </Text>
        ) : (
          <Text style={styles.noEffectsText}>Nessun effetto</Text>
        )}
        <TouchableOpacity style={styles.addButton}>
          <Plus color={colors.text} size={8} /> {/* Reduced from 10 to 8 */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 4, // Reduced from 6 to 4
    marginHorizontal: 16,
    marginBottom: 2, // Reduced from 5 to 2
    height: Platform.OS === 'android' ? 36 : 40, // Reduced height on Android
    marginTop: -10,
  },
  label: {
    color: colors.text,
    fontSize: 10, // Reduced from 11 to 10
    marginBottom: 1, // Reduced from 2 to 1
  },
  effectsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 18, // Reduced from 20 to 18
  },
  effectsText: {
    color: colors.primary,
    flex: 1,
    fontSize: 9, // Reduced from 10 to 9
  },
  noEffectsText: {
    color: colors.textSecondary,
    flex: 1,
    fontSize: 9, // Reduced from 10 to 9
  },
  addButton: {
    width: 14, // Reduced from 16 to 14
    height: 14, // Reduced from 16 to 14
    borderRadius: 7, // Reduced from 8 to 7
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});