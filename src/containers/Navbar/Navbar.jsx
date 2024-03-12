import { Headline, SearchBar } from '../../components'
import { Flex, Box, Spacer } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Box wd='100%'
            pt='15px'
            px='20px'>
            <Flex>
                <Headline />
                <Spacer />
                <SearchBar />
            </Flex>
        </Box>
    )
}