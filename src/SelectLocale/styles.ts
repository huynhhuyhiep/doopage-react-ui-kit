import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			width: '100%',
		},
		action: {
			marginBottom: '-10px !important',
			display: 'flex',
			justifyContent: 'flex-end',
		},
		defaultLocale: {
			width: 160,
			display: 'flex',
			justifyContent: 'flex-end',
		},
	})
);

export default useStyles;
