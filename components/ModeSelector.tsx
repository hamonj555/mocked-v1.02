import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

interface ModeSelectorProps {
  currentMode: string;
  onModeChange: (mode: string) => void;
}

const modes = ['AUDIO', 'VIDEO', 'MEME', 'AI ZONE'];

export default function ModeSelector({ currentMode, onModeChange }: ModeSelectorProps) {
  return (
    <View style={styles.container}>
      {modes.map((mode) => (
        <TouchableOpacity
          key={mode}
          style={[
            styles.modeButton,
            currentMode === mode && styles.activeMode
          ]}
          onPress={() => onModeChange(mode)}
        >
          <Text style={[
            styles.modeText,
            currentMode === mode && styles.activeModeText
          ]}>
            {mode}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  modeButton: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeMode: {
    backgroundColor: colors.primary,
  },
  modeText: {
    color: colors.text,
    fontWeight: '500',
  },
  activeModeText: {
    fontWeight: 'bold',
  },
});