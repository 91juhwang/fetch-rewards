export const filterChipStyle = ({
  palette,
  spacing,
  typography: { pxToRem },
}) => {
  return {
    heading: {
      marginBottom: spacing(1),
      color: palette.grey[700],
    },
    container: {
      margin: spacing(4),
    },
    filterChipsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: spacing(2),
    },
    filterChip: {
      borderRadius: pxToRem(16),
      color: palette.grey[800],
      padding: spacing(2),
      width: spacing(25),
      margin: spacing(2),
      '&:hover': {
        borderColor: palette.info.main,
      },
    },
    filterChipIcon: {
      fill: palette.info.main,
    },
    filterChipIconHidden: {
      display: 'none',
    },
    filterChipOutlined: {
      'border-color': palette.info.main,
      '&:focus': {
        color: palette.grey[800],
        borderColor: palette.info.main,
      },
    },
    filterChipClickable: {
      '&:hover': {
        color: palette.info.main,
        borderColor: palette.info.main,
      },
      '&:focus': {
        color: palette.grey[800],
        borderColor: palette.info.main,
      },
    },
  };
};
