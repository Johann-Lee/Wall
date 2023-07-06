import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, useColorMode, Container } from '@chakra-ui/react'

import { ChakraProvider, Box, Flex, Heading, AspectRatio, Image, Spacer, Divider, Wrap } from '@chakra-ui/react'

//images
import me from './images/me.jpg'

import theme from './theme';

function App() {
 
  return (
    <ChakraProvider theme={theme}>

    <Container size="lg" paddingLeft='calc(100vw - 100%)'>
      <Flex justifyContent='center' margin={8}>
        <Heading align='center'>
          Johann Lee
        </Heading>
    </Flex>

    

    <Divider/>

        <Tabs align='center' variant='soft-rounded' colorScheme='teal'>

            <TabList margin={5}>
              <Tab>About</Tab>
              <Tab>Experience</Tab>
              <Tab>Photography</Tab>
              <Tab>SoundCloud</Tab>
            </TabList>
            
            
            <TabPanels>
              <TabPanel>

              <Flex flexWrap="wrap">
                      Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                      Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                      Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                      Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
                      Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here,
                      Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, Insert Bio here, 
              </Flex> 


              </TabPanel>
              

              <TabPanel>
                <Flex></Flex>
              </TabPanel>

        
              <TabPanel>
                <p>Insert photos</p>
              </TabPanel>

              <TabPanel> 
                <AspectRatio maxW='600px' color={'grey'}>
                 <div>
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1552526674&color=%233d4a50&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>                  
                 </div>
                 </AspectRatio>
              </TabPanel>

            </TabPanels>
        </Tabs> 
        </Container>
    </ChakraProvider>
  );
}


export default App;
