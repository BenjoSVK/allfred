import { Input, Box } from '@chakra-ui/react'

const SearchBar = () => {
  return (
    <Box
      pr='50px'>
      <Input
        placeholder='Search Bar'
        variant='filled'
        width='400px'
        rounded='3xl' />
    </Box>
  )
}
export default SearchBar