import { HamburgerIcon } from '@chakra-ui/icons'
import {
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup
} from '@chakra-ui/react'

const Filter = () => {
    return (
        <div>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    borderRadius='5px'>
                </MenuButton>
                <MenuList>
                    <MenuGroup title='Filter'>
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    )
}

export default Filter