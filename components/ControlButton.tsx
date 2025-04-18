import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '@/constants/colors';
import * as LucideIcons from 'lucide-react-native';

// Define the allowed icon names
type IconName = keyof typeof LucideIcons;

interface ControlButtonProps {
  icon?: IconName;
  text?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconColor?: string;
  iconSize?: number;
  children?: React.ReactNode;
}

export default function ControlButton({
  icon,
  text,
  onPress,
  style,
  textStyle,
  iconColor = colors.text,
  iconSize = 24,
  children,
}: ControlButtonProps) {
  // Safely render the icon component
  const renderIcon = () => {
    if (icon && icon in LucideIcons) {
      const IconComponent = LucideIcons[icon] as React.ComponentType<{
        color: string;
        size: number;
      }>;
      return <IconComponent color={iconColor} size={iconSize} />;
    }
    return null;
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {renderIcon()}
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
});