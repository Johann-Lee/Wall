import logo from './logo.svg';
import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Box, Flex } from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'



function App() {
  return (
    <ChakraProvider>
      <Flex margin={8}>
        <Heading>
          Johann Lee
        </Heading>
      </Flex>

      <Flex justify="center">
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab>About</Tab>
              <Tab>Experience</Tab>
              <Tab>SoundCloud</Tab>
              <Tab>Photography</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here,
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                  Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here,    
                </p>  
              </TabPanel>
              

              <TabPanel></TabPanel>

              <TabPanel>
              <AspectRatio maxW='600px' ratio={1}>
              <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1552526674&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </AspectRatio>
              </TabPanel>

              <TabPanel>
                <p>Insert photos</p>
              </TabPanel>
            </TabPanels>
        </Tabs> 
      </Flex>

        


     


  
    
      
      
    </ChakraProvider>
  );
}


export default App;
