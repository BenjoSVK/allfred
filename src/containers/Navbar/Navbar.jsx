import { Headline, Filter, SearchBar } from '../../components'
import { Flex, Box, Spacer } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Box wd='100%'
            py='5px'
            px='5px'>
            <Flex>
                <Headline />
                <Spacer />
                <Filter />
                <SearchBar />
            </Flex>
        </Box>
    )
}