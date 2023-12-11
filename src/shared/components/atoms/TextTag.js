import {Text} from 'react-native';
import React, {useContext} from 'react';
import typography from '../../theme/typography';
import {AppContext} from '../../../services/context/app';

/**
 * A custom text component with additional styling options
 * @function TextTag
 * @param {Object} props - The properties for the TextTag component
 * @param {number} [props.size=12] - The font size of the text
 * @param {string} [props.tint] - The color tint of the text
 * @param {string} [props.weight=typography.regular] - The font weight of the text
 * @param {string} [props.alignment='left'] - The text alignment
 * @param {React.ReactNode} props.children - The content to be displayed within the TextTag
 * @returns {JSX.Element} - The TextTag component
 */
export default function TextTag({
  size = 12,
  tint,
  weight = typography.regular,
  alignment = 'left',
  children,
}) {
  // Access the color from the global AppContext
  const {color} = useContext(AppContext);

  return (
    <Text
      style={{
        fontSize: typography.scaleFont(size),
        color: tint ? tint : color.text,
        fontFamily: weight,
        textAlign: alignment,
      }}>
      {children}
    </Text>
  );
}
