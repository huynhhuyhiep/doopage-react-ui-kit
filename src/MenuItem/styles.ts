import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			padding: (props: any) =>
				props?.justContent ? 0 : props?.icon ? '6px 12px' : 'auto',
			'& .MuiListItemIcon-root': {
				minWidth: 35,
			},
			'& .MuiListItemText-primary': {
				fontSize: 15,
			},
		},
	})
);

export default useStyles;
