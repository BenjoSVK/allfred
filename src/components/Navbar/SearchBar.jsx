import { Input, Box, Flex } from '@chakra-ui/react'
import Filter from './Filter'

const SearchBar = () => {
  return (
    <Box>
      <Flex
      gap='15px'>
        <Input
          colorScheme='yellow'
          placeholder='Search Bar'
          variant='outline'
          width='400px'
          rounded='3xl' />
        <Filter />
      </Flex>
    </Box>
  )
}
export default SearchBar