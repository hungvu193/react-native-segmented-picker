import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './ToolbarStyles';
import { TEST_IDS } from '../../config/constants';

interface Props {
  confirmText: string;
  cancelText: string;
  middleText: string;
  middleTextColor: string;
  cancelTextColor: string;
  confirmTextColor: string;
  toolbarBackground: string;
  toolbarBorderColor: string;
  cancelTextStyle: object;
  middleTextStyle: object;
  confirmTextStyle: object;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default ({
  confirmText,
  cancelText,
  middleText,
  middleTextColor,
  cancelTextColor,
  onCancel,
  confirmTextColor,
  toolbarBackground,
  toolbarBorderColor,
  onConfirm,
  cancelTextStyle,
  confirmTextStyle,
  middleTextStyle,
}: Props): ReactElement => (
  <View
    style={[
      styles.toolbarContainer,
      {
        backgroundColor: toolbarBackground,
        borderBottomColor: toolbarBorderColor,
      },
    ]}
  >
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onCancel}
      testID={TEST_IDS.CONFIRM_BUTTON}
      style={{ flex: 1 }}
    >
      <View style={styles.toolbarCancelContainer}>
        <Text style={[styles.toolbarCancelText, cancelTextStyle, { color: cancelTextColor}]}>
          {cancelText}
        </Text>
      </View>
    </TouchableOpacity>
    <View style={styles.toolbarMiddleContainer}>
      <Text style={[styles.toolbarMiddleText, middleTextStyle, { color: middleTextColor }]}>
        {middleText}
      </Text>
    </View>
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onConfirm}
      testID={TEST_IDS.CONFIRM_BUTTON}
    >
      <View style={styles.toolbarConfirmContainer}>
        <Text style={[styles.toolbarConfirmText, confirmTextStyle, { color: confirmTextColor }]}>
          {confirmText}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
