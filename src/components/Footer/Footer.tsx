import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'

const Footer = () => {
  return (
    <Box component='footer' className='my-6 text-center'>
      <Divider className='mb-4' />
      <Typography variant='h6'>
        © {new Date().getFullYear()} Rather Labs OTC Challenge - Nicolas Brusco
      </Typography>
      <Typography variant='body2'>
        Built with{' '}
        <Link
          href='https://mui.com/'
          color='inherit'
          target='_blank'
          rel='noopener'
        >
          Material-UI
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
