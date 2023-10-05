import { Box, Image, Center } from '@chakra-ui/react'

export default function ImageSmall ({size}){
    return (
        <>
        <Center>
            <Box boxSize={size}>
                <Image src='brainblue.png'></Image>
            </Box>
        </Center>
        </>
    )
}