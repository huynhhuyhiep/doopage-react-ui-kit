import React, { FC, memo, ReactNode } from 'react';
import { Box, BoxProps } from '@material-ui/core';
import useStyles from './styles';

export interface Props extends BoxProps {
	show?: boolean;
	spaceWidth?: number;
	spaceHeight?: number;
	children: ReactNode;
}

const Space: FC<Props> = (props) => {
	const { show = true, children, spaceHeight, spaceWidth, ...rest } = props;
	const classes = useStyles(props);
	if (!show) return null;

	return (
		<Box {...rest} className={classes.root}>
			{children}
		</Box>
	);
};

export default memo(Space);
