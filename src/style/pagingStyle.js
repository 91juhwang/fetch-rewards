export const pagingStyle = ({
  palette,
  spacing,
  typography: { pxToRem },
}) => {
  return {
    pagingContainer: {
      marginTop: spacing(3),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    perPageSelectComponent: {
      height: spacing(4),
      minHeight: spacing(4),
      background: palette.transparent,
    },
    perPageSelectControl: {
      'borderRadius': 2,
      'height': spacing(4),
      'fontSize': pxToRem(11),
    },
    paginationContainer: {
      marginLeft: spacing(1),
    },
    paginationText: {
      fontSize: pxToRem(12),
      textAlign: 'left',
      height: spacing(3),
      color: palette.grey.A400,
    },
  };
};
