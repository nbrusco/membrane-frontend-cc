import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Header = () => {
  return (
    <Box component='header' className='text-center'>
      <Typography variant='h2' component='h1' my={5}>
        Cryptocurrency OTC Order Management
      </Typography>
    </Box>
  )
}

export default Header
