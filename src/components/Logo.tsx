import { Image, ImageProps, Text, TextProps, chakra } from '@chakra-ui/react'


function Logo( props: ImageProps) {
  return (
    <Image {...props} w={"100px"} src='/logo.svg' />
  )
}

export default Logo