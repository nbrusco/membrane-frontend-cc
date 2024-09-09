import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        scale: '200%'
      }}
    >
      <CircularProgress className='my-16' />
    </Box>
  )
}

export default Loader
