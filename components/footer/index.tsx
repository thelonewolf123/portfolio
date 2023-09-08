import React from 'react'

import { Spacer, Text } from '@nextui-org/react'

import { Box } from '../styles/box'
import { Flex } from '../styles/flex'

export const Footer = () => {
    return (
        <Box>
            <Spacer css={{ pt: '$16', mt: '0 !important' }} />
            <Flex justify={'center'}>
                <Text span>© 2023 Harish Kumar. All Rights Reserved.</Text>
            </Flex>
            <Spacer y={2} />
        </Box>
    )
}
