import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: (props: any) => (props?.spaceHeight ? 'column' : 'row'),
			'& > *': {
				marginRight: (props: any) => props?.spaceWidth || theme.spacing(1),
				marginBottom: (props: any) => props?.spaceHeight,
			},
			'& > *:last-child': {
				marginRight: 0,
				marginBottom: 0,
			},
		},
	})
);

export default useStyles;
