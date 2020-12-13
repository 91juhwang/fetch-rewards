export const tableStyle = ({
  palette,
  spacing,
  typography: { pxToRem }
}) => {
  const smallHeading = {
    color: palette.grey[800],
    fontSize: pxToRem(10),
    fontWeight: 700,
    textTransform: 'uppercase'
  }
  const lightGreyBorder = {
    width: 1,
    style: 'solid',
    color: palette.grey[300]
  }
  return {
    dataTableHead: {
      backgroundColor: palette.grey[100],
      '& $dataTableCell': smallHeading,
      '& $dataTableRow': {
        '&:first-child': {
          '& $dataTableCell': {
            border: lightGreyBorder
          }
        }
      }
    },
    dataTable: {
      border: `1px solid ${palette.grey[300]}`
    },
    dataTableRow: {
      '&:nth-of-type(even)': {
        backgroundColor: palette.grey[50]
      }
    },
    dataTableCell: {
      position: 'relative',
      whiteSpace: 'nowrap',
      borderBottomColor: palette.grey[300],
      borderRight: lightGreyBorder,
      color: palette.grey[800],
      fontSize: pxToRem(12),
      padding: {
        top: spacing(1),
        bottom: spacing(1),
        left: spacing(3),
        right: spacing(3)
      },
      '&:last-child': {
        borderRight: 'none'
      }
    }
  }
}
