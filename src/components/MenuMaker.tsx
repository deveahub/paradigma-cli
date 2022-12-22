import { Box, Spacer } from 'ink';
import React, { ReactNode, useMemo } from 'react';

import BackTo from './BackTo';
import Menu, { MenuProps } from './Menu';
import useRouter from './router/useRouter';
import Text from './Text';

interface MenuMakerProps extends MenuProps {
	children?: ReactNode;
	topChildren?: ReactNode;
	backURL?: string;
	breadcrumb?: boolean;
}

const MenuMaker = ({
	children,
	topChildren,
	backURL,
	breadcrumb = true,
	...props
}: MenuMakerProps) => {
	const { currentURL } = useRouter();
	const breadcrumbText = useMemo(
		() => currentURL
				.match(/\/(\w+)/g)
				?.join(' > ')
				.replace(/\//g, '') || '',
		[currentURL]
	);

	return (
  <BackTo {...(backURL && { path: backURL })}>
    <Box display="flex" flexDirection="column">
      {breadcrumb && <Text>{breadcrumbText}</Text>}
      {topChildren && (
      <>
        {topChildren}
        <Spacer />
      </>
				)}
      <Menu {...props} />
      {children && (
      <>
        {children}
        <Spacer />
      </>
				)}
    </Box>
  </BackTo>
	);
};

export const makeMenuMaker = (props: MenuMakerProps) => () => <MenuMaker {...props} />;

export default MenuMaker;
