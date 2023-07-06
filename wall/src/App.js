import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, useColorMode, Container } from '@chakra-ui/react'

import { ChakraProvider, Box, Flex, Heading, AspectRatio, Image, Spacer, Divider, Wrap, Card, CardBody, CardFooter, Stack, Text, Button} from '@chakra-ui/react'

//images
import me from './images/me.jpg'
import mix from './images/mix.jpg'
import theme from './theme';

function App() {
 
  return (
    <ChakraProvider>

    <Flex paddingLeft='calc(100vw - 100%)' margin={25} flexDirection='column'>
        <Heading align='center' paddingBottom={10}>
          Johann Lee
        </Heading>

  
    <Divider/>

        <Tabs align='center' variant='soft-rounded' colorScheme='teal' paddingTop={4} >

            <TabList paddingBottom={2}>
              <Tab>About</Tab>
              <Tab>Work</Tab>
              <Tab>Music</Tab>
              <Tab>Photography</Tab>
            </TabList>
            
            
            <TabPanels>
              <TabPanel>        
              <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                  colorScheme='blue'
              >
              <Stack>
                <CardBody>
                  <Heading size='md'></Heading>

                  <Text py='2'>
                  I'm a Software Engineer who recently graduated from Rochester Institute of Technology.
                  When I think about Software Engineering I like to think about how much we don't know what's happening around us.
                  I'm curious about a lot of things I can't see and that's what drew me towards Backend Engineering specifically. Making a change even if its not visual goes a long way.
                  <br/><br/>
                  Since I was a kid, electronic music has been a part of my life. Now I like to mix techno and picked up DJing as a hobby.
                  <br/><br/>
                  Photography has interested me ever since I picked up a smarthphone. 
                  <br/><br/>
                  This page is about me and my interests.

                   
                
                  </Text>
                </CardBody>
              </Stack>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '275px' }}
                src={me}
                alt='Johann Lee'
              />
              </Card> 
              <br/>
              <br/>
             
              </TabPanel>
              

              <TabPanel>
                <Flex></Flex>
              </TabPanel>

              <TabPanel> 
                <AspectRatio maxW='600px' color={'grey'}>
                 <div>
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1552526674&color=%233d4a50&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>                  
                 </div>
                 </AspectRatio>
              </TabPanel>
        
              <TabPanel>
                <p>Insert photos</p>
              </TabPanel>

            </TabPanels>
        </Tabs>
        <br/>
        <Divider/> 
        </Flex>
    </ChakraProvider>
  );
}


export default App;
