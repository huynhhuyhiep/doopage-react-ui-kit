import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: (props: any) =>
				props?.direction === 'vertical' ? 'column' : 'row',
			'& > *': {
				marginRight: (props: any) =>
					props?.direction === 'vertical'
						? 0
						: props?.spaceWidth || theme.spacing(1),
				marginBottom: (props: any) =>
					props?.direction === 'vertical'
						? props?.spaceHeight || theme.spacing(1)
						: 0,
			},
			'& > *:last-child': {
				marginRight: 0,
				marginBottom: 0,
			},
		},
	})
);

export default useStyles;
