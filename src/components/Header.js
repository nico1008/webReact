import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import {  Stack, Circle, Flex, Box, Text,Spacer  } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react'
import { FaGithub,FaTelegram,FaBehance } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/button';

export default function Header() {

     const {colorMode} = useColorMode();
     const isDark = colorMode ==="dark";

     const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)");

     return (
          <Stack >
               <Circle  position="absolute" mt={"100px"} mr="50px" bg="pink" opacity={isNotSmallerScreen ? "0.1": "0"} w="300px" h="300px" alignSelf={"flex-end"}></Circle>
               <Flex backgroundColor={isDark ? "#2953A6" : "#00FF80"} borderRadius="20px"  direction ={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "32" : "4"} pl={isNotSmallerScreen ? "16" : "4"}
                    alignSelf="flex-start">
                    <Box mt={isNotSmallerScreen ? "0": 16} pr={isNotSmallerScreen ? "150px": "0"} align='flex-start'>
                         <Text fontSize={"5xl"} fontWeight="semibold"  >
                              Hello, my name is 
                         </Text>
                         <Text fontSize={"7xl"} fontWeight="bold" bgGradient="linear(to-r, coral, violet, purple)" bgClip='text'>
                              Nicola Ivanov
                         </Text >
                         <Text pt={"5"}   fontSize={"2xl"} fontWeight="semibold" color={isDark ? "gray.200" : "black"} >
                         I am a young developer, studying at MTUCI. I work on  various C++, Java, Python, Mathlab,<br></br>Web design and Art projects.
                         </Text>
                         <Spacer>

                         </Spacer>
                         <Button mt={8}  bgGradient="linear(to-r, violet,blue.500 )"  
                         _hover={{ bgGradient: 'linear(to-l, red.500, yellow.500)',}}
                         onClick={()=>window.open("https://vk.com/karkron")}>
                              Contact me  
                         </Button>
                         
                         <IconButton mt={8} ml={8} size="md"  icon={<FaBehance/>} isRound='true' onClick={()=>window.open("https://www.behance.net/nico_1008")}  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
                         <IconButton mt={8} ml={8} size="md"  icon={<FaGithub/>} isRound='true' onClick={()=>window.open("https://github.com/nico1008")}  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
                         <IconButton mt={8} ml={8} size="md"  icon={<FaTelegram/>} isRound='true' onClick={()=>window.open("https://t.me/nico_1008k")}  _hover={{ bgGradient: 'linear(to-t, #D91E98, #F2226E)',}}></IconButton>
                    </Box>
                    <Image alignSelf="center" mt={isNotSmallerScreen ? "0": "10"} mb = {isNotSmallerScreen ? "0" : "10"} borderRadius='full'
                    backgroundColor={"transparent"} boxShadow="lg" boxSize={"300px"} opacity="1" border='8px solid black'
                    src='https://avatars.githubusercontent.com/u/70664528?s=400&u=861e9fafb08a103ed6de3852531877eecfa63036&v=4'>
                    </Image>   
               </Flex> 
          </Stack>

     )
}
