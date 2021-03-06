import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export const Spinner = ({ size }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={ size } color='inherit' />
    </Box>
  )
}

Spinner.propTypes = {
  size: PropTypes.number
}
