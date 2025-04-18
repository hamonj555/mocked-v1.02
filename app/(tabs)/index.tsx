import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '@/constants/colors';
import ModeSelector from '@/components/ModeSelector';
import VideoPlayer from '@/components/VideoPlayer';
import ControlButton from '@/components/ControlButton';
import RecordButton from '@/components/RecordButton';
import AppliedEffects from '@/components/AppliedEffects';
import AudioEffectsNavigator from '@/components/AudioEffectsNavigator';
import { useVideoStore } from '@/store/videoStore';

export default function VideoEditorScreen() {
  const [currentMode, setCurrentMode] = useState('VIDEO');
  const { 
    speed, 
    volume, 
    isPlaying, 
    togglePlay, 
    increaseSpeed, 
    decreaseSpeed, 
    increaseVolume, 
    decreaseVolume 
  } = useVideoStore();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      
      {/* Header with app name and status */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MOCKED</Text>
        <View style={styles.headerRight}>
          <Text style={styles.batteryText}>99%</Text>
          <ControlButton 
            icon="Pause" 
            onPress={() => {}} 
            style={styles.pauseButton} 
            iconSize={16}
          />
        </View>
      </View>
      
      {/* Mode selector */}
      <ModeSelector currentMode={currentMode} onModeChange={setCurrentMode} />
      
      {/* Scrollable content area */}
      <ScrollView style={styles.scrollContent}>
        {/* Video player */}
        <VideoPlayer />
        
        {/* Main content container with flex to push controls up */}
        <View style={styles.mainContent}>
          {/* Controls section */}
          <View style={styles.controlsContainer}>
            {/* Speed controls */}
            <View style={styles.controlGroup}>
              <ControlButton 
                icon="ChevronUp" 
                onPress={increaseSpeed} 
                style={styles.controlButton}
              />
              <Text style={styles.controlValue}>{speed}%</Text>
              <ControlButton 
                icon="ChevronDown" 
                onPress={decreaseSpeed} 
                style={styles.controlButton}
              />
            </View>
            
            {/* Record button - centered between side controls */}
            <RecordButton onPress={() => {}} />
            
            {/* Volume controls */}
            <View style={styles.controlGroup}>
              <ControlButton 
                icon="ChevronUp" 
                onPress={increaseVolume} 
                style={styles.controlButton}
              />
              <Text style={styles.controlValue}>{volume}%</Text>
              <ControlButton 
                icon="ChevronDown" 
                onPress={decreaseVolume} 
                style={styles.controlButton}
              />
            </View>
          </View>
          
          {/* Playback controls */}
          <View style={styles.playbackControls}>
            <View style={styles.playbackButtonsContainer}>
              <ControlButton 
                icon="Play" 
                onPress={togglePlay} 
                style={[styles.playButton, isPlaying && styles.activeButton]}
                iconColor={isPlaying ? colors.background : colors.text}
              />
              <ControlButton 
                icon="Square" 
                onPress={() => togglePlay()} 
                style={styles.stopButton}
              />
            </View>
          </View>
          
          {/* Applied effects */}
          <AppliedEffects />
          
          {/* Audio Effects Navigator - new component */}
          <AudioEffectsNavigator />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryText: {
    color: colors.text,
    marginRight: 8,
  },
  pauseButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.buttonBackground,
  },
  scrollContent: {
    flex: 1,
  },
  mainContent: {
    paddingTop: 0,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 5,
    marginTop: 0,
  },
  controlGroup: {
    alignItems: 'center',
  },
  controlButton: {
    width: 40,
    height: 40,
  },
  controlValue: {
    color: colors.text,
    fontSize: 14,
    marginVertical: 4,
  },
  playbackControls: {
    marginTop: -45,
    marginBottom: 15,
  },
  playbackButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  playButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  stopButton: {
    width: 40,
    height: 40,
  }
});