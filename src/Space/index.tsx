import React, { FC, memo, ReactNode } from 'react';
import { Box, BoxProps } from '@material-ui/core';
import useStyles from './styles';

export interface SpaceProps extends BoxProps {
	hide?: boolean;
	direction?: 'horizontal' | 'vertical';
	spaceWidth?: number;
	spaceHeight?: number;
	children: ReactNode;
}

const Space: FC<SpaceProps> = (props) => {
	const {
		hide,
		children,
		spaceHeight,
		spaceWidth,
		direction = 'horizontal',
		...rest
	} = props;
	const classes = useStyles(props);

	if (hide) return null;

	return (
		<Box {...rest} className={classes.root}>
			{children}
		</Box>
	);
};

export default memo(Space);
