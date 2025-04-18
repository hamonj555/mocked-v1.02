import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

interface RecordButtonProps {
  onPress: () => void;
  isRecording?: boolean;
}

export default function RecordButton({ onPress, isRecording = false }: RecordButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.container, isRecording && styles.recording]} 
      onPress={onPress}
    >
      <View style={styles.innerCircle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: colors.recordButtonOuter,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40, // Moved higher as requested
  },
  recording: {
    backgroundColor: colors.secondary,
  },
  innerCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.recordButtonInner,
  },
});