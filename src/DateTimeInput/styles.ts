import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { theme } from '../Theme';
import { getHoverShadow, getShadow } from '../utils/constants';

const createActiveShadow = (backgroundColor: string) => ({
	boxShadow: getShadow(backgroundColor),
	color: '#fff',
	backgroundColor: `${backgroundColor} !important`,
	'&:hover,&:focus': {
		boxShadow: getHoverShadow(backgroundColor),
	},
});

const useStyles = makeStyles((muiThem: Theme) => {
	const { primaryColor } = theme.colors;

	return createStyles({
		root: {
			'& .rdtOpen': {
				'& .rdtPicker': {
					display: 'block',
					opacity: 1,
					visibility: 'visible',
					marginTop: 0,
				},
			},
			'& .rdt': {
				position: 'relative',
				'& .rdtPicker': {
					borderRadius: muiThem.shape.borderRadius,
					opacity: 0,
					visibility: 'hidden',
					position: 'absolute',
					minWidth: '250px',
					padding: '4px',
					marginTop: '1px',
					zIndex: '99999 !important',
					background: muiThem.palette.background.paper,
					boxShadow: muiThem.shadows[3],
					border: '1px solid #f9f9f9',
					transition: 'all 150ms linear',
					'& .rdtTimeToggle': {
						textAlign: 'center',
						'&:hover': {
							background: muiThem.palette.action.hover,
							cursor: 'pointer',
						},
					},
					'& table': { width: '100%', margin: '0' },
					'& td': {
						textAlign: 'center',
						height: '28px',
						cursor: 'pointer',
						borderRadius: muiThem.shape.borderRadius,
						'& span.rdtOld': { color: '#999999' },
						'& span.rdtDisabled': {
							background: 'none',
							color: '#999999',
							cursor: 'not-allowed',
							'&:hover': {
								background: 'none',
								color: '#999999',
								cursor: 'not-allowed',
							},
						},
					},
					'& th': {
						textAlign: 'center',
						height: '28px',
						borderBottom: '1px solid #f9f9f9',
					},
					'& td.rdtDay': {
						'&:hover': {
							background: muiThem.palette.action.hover,
							cursor: 'pointer',
						},
					},
					'& td.rdtHour': {
						'&:hover': {
							background: muiThem.palette.action.hover,
							cursor: 'pointer',
						},
					},
					'& td.rdtMinute': {
						'&:hover': {
							background: muiThem.palette.action.hover,
							cursor: 'pointer',
						},
					},
					'& td.rdtSecond': {
						'&:hover': {
							background: muiThem.palette.action.hover,
							cursor: 'pointer',
						},
					},
					'& td.rdtOld': { color: '#999999' },
					'& td.rdtNew': { color: '#999999' },
					'& td.rdtToday': {
						border: '1px solid #999999',
						position: 'relative',
						'&:before': {
							content: "''",
							display: 'inline-block',
							borderLeft: '7px solid transparent',
							borderBottom: `7px solid ${primaryColor}`,
							borderTopColor: 'rgba(0, 0, 0, 0.2)',
							position: 'absolute',
							bottom: '4px',
							right: '4px',
						},
					},
					'& td.rdtActive': createActiveShadow(primaryColor),
					'& td.rdtActive.rdtToday': {
						'&:before': { borderBottomColor: '#fff' },
					},
					'& td.rdtDisabled': {
						background: 'none',
						color: '#999999',
						cursor: 'not-allowed',
						'&:hover': {
							background: 'none',
							color: '#999999',
							cursor: 'not-allowed',
						},
					},
					'& .dow': {
						width: '14.2857%',
						borderBottom: 'none',
						cursor: 'default',
					},
					'& th.rdtSwitch': { width: '100px', cursor: 'pointer' },
					'& th.rdtNext': { fontSize: '21px', verticalAlign: 'top' },
					'& th.rdtPrev': { fontSize: '21px', verticalAlign: 'top' },
					'& th.rdtDisabled': {
						background: 'none',
						color: '#999999',
						cursor: 'not-allowed',
						'&:hover': {
							background: 'none',
							color: '#999999',
							cursor: 'not-allowed',
						},
					},
					'& thead': {
						'& tr': {
							'&:first-of-type': {
								th: {
									cursor: 'pointer',
									'&:hover': { background: muiThem.palette.action.hover },
								},
							},
						},
						'& button': { width: '100%', height: '100%' },
					},
					'& tfoot': { borderTop: '1px solid #f9f9f9' },
					'& button': {
						border: 'none',
						background: 'none',
						cursor: 'pointer',
						'&:hover': { background: muiThem.palette.action.hover },
					},
				},
				'& .rdtStatic': {
					'& .rdtPicker': { boxShadow: 'none', position: 'static' },
				},
				'& .rdtPrev': {
					cursor: 'pointer',
					width: 28,
					borderRadius: muiThem.shape.borderRadius,
					'&:hover': { background: muiThem.palette.action.hover },
					'& span': {
						display: 'block',
						WebkitTouchCallout: 'none',
						userSelect: 'none',
					},
				},
				'& .rdtNext': {
					cursor: 'pointer',
					width: 28,
					borderRadius: muiThem.shape.borderRadius,
					'&:hover': { background: muiThem.palette.action.hover },
					'& span': {
						display: 'block',
						WebkitTouchCallout: 'none',
						userSelect: 'none',
					},
				},
				'& td.rdtMonth': {
					height: '50px !important',
					width: '25%',
					cursor: 'pointer',
					'&:hover': { background: muiThem.palette.action.hover },
				},
				'& td.rdtYear': {
					height: '50px !important',
					width: '25%',
					cursor: 'pointer',
					'&:hover': { background: muiThem.palette.action.hover },
				},
				'& .rdtCounters': {
					display: 'inline-block',
					'& > div': { float: 'left' },
				},
				'& .rdtCounter': {
					height: '100px',
					width: '40px',
					'& .rdtBtn': {
						height: '40%',
						lineHeight: '40px',
						cursor: 'pointer',
						display: 'block',
						WebkitTouchCallout: 'none',
						userSelect: 'none',
						borderRadius: muiThem.shape.borderRadius,
						'&:hover': { background: muiThem.palette.action.hover },
					},
					'& .rdtCount': { height: '25%', fontSize: '1.2em' },
				},
				'& .rdtCounterSeparator': { lineHeight: '100px' },
				'& .rdtMilli': {
					verticalAlign: 'middle',
					paddingLeft: '8px',
					width: '48px',
					'& input': { width: '100%', fontSize: '1.2em', marginTop: '37px' },
				},
				'& .rdtTime': { '& td': { cursor: 'default' } },
			},
		},
	});
});

export default useStyles;
