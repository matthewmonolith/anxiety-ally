import { Box, Image, Center } from '@chakra-ui/react'

export default function ImageSmall ({size, src}){
    return (
        <>
        <Center>
            <Box boxSize={size}>
                <Image src={src}></Image>
            </Box>
        </Center>
        </>
    )
}