import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '@/constants/colors';
import { useVideoStore } from '@/store/videoStore';

export default function VideoPlayer() {
  const { isPlaying, currentTime, duration, setCurrentTime } = useVideoStore();
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Update progress bar when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(currentTime + 0.1);
      }, 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentTime, duration]);

  // Handle progress bar touch
  const handleProgressBarTouch = (event: any) => {
    if (containerWidth === 0) return;
    
    const touchX = event.nativeEvent.locationX;
    const percentage = touchX / containerWidth;
    const newTime = percentage * duration;
    
    setCurrentTime(Math.max(0, Math.min(newTime, duration)));
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoPreview}>
        <Text style={styles.videoText}>Video pronto</Text>
      </View>
      
      <View 
        style={styles.progressContainer}
        onLayout={(event) => {
          setContainerWidth(event.nativeEvent.layout.width);
        }}
      >
        <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
        
        <Pressable 
          style={styles.progressBarContainer}
          onPress={handleProgressBarTouch}
        >
          <View style={styles.progressBarBackground} />
          <View 
            style={[
              styles.progressBar, 
              { width: `${(currentTime / duration) * 100}%` }
            ]} 
          />
          <View 
            style={[
              styles.progressDot,
              { left: `${(currentTime / duration) * 100}%` }
            ]}
          />
        </Pressable>
        
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  videoPreview: {
    width: '100%',
    height: 200,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  videoText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '500',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  timeText: {
    color: colors.textSecondary,
    fontSize: 12,
    width: 30,
  },
  progressBarContainer: {
    flex: 1,
    height: 20,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: colors.progressBarBackground,
    borderRadius: 2,
    position: 'absolute',
    width: '100%',
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.progressBar,
    borderRadius: 2,
    position: 'absolute',
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.progressBar,
    position: 'absolute',
    top: -4,
    marginLeft: -6,
  },
});