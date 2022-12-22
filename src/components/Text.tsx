import React from 'react';
import { Text as InkText, TextProps as InkTextProps } from 'ink';

import colors from '@/pods/theme/colors';

interface TextProps extends InkTextProps {
	color?: keyof typeof colors;
}

const Text = ({ color = 'text', children, ...props }: TextProps) => (
  <InkText color={colors[color]} {...props}>
    {children}
  </InkText>
);

export default Text;
