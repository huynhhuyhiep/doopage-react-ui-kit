import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: (props: any) =>
				typeof props?.size === 'number' ? props?.size : undefined,
			height: (props: any) =>
				typeof props?.size === 'number' ? props?.size : undefined,
		},
		tiny: {
			width: theme.spacing(2),
			height: theme.spacing(2),
			fontSize: 12,
			'& .MuiSvgIcon-root': {
				width: theme.spacing(1),
				height: theme.spacing(1),
			},
		},
		small: {
			width: theme.spacing(3),
			height: theme.spacing(3),
			fontSize: 18,
			'& .MuiSvgIcon-root': {
				width: theme.spacing(2),
				height: theme.spacing(2),
			},
		},
		normal: {
			fontSize: 25,
		},
		large: {
			width: theme.spacing(7),
			height: theme.spacing(7),
			fontSize: 40,
			'& .MuiSvgIcon-root': {
				width: theme.spacing(6),
				height: theme.spacing(6),
			},
		},
		shadow: {
			boxShadow:
				'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
		},
		cursor: {
			cursor: 'pointer',
		},
		shadowBadge: {
			boxShadow:
				'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		},
		border: (props: any) => ({
			border: `2px solid ${theme.palette.background.paper}`,
			backgroundColor: theme.palette.background.paper,
			...props?.borderStyle,
		}),
	})
);

export default useStyles;
