import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid } from '@chakra-ui/react'
import { ChakraProvider, Flex, Heading, AspectRatio, Image, Divider, Card, CardBody, CardHeader, Stack, Text} from '@chakra-ui/react'

//images
import me from './images/me.jpg'
import IMG1 from './images/IMG1.jpg'
import IMG2 from './images/IMG2.jpg'
import IMG3 from './images/IMG3.JPG'
import IMG4 from './images/IMG4.jpg'
import IMG5 from './images/IMG5.jpg'
import IMG6 from './images/IMG6.JPG'
import IMG7 from './images/IMG7.jpg'
import IMG8 from './images/IMG8.jpg'

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
                  overflow='hidden'>
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
              <SimpleGrid columns={[1, null, 3]} spacing='40px'>
              <Card >
                <CardHeader>
                  <Heading size='md'> Amazon </Heading>
                </CardHeader>
                <CardBody>
                  <Text>- Completed full stack intern project utilizing Java, TypeScript and internal tools to create a localized widget that allowed users to subscribe to an Amazon service.</Text>
                  <Text>- Implemented unit, integration and end to end tests to achieve a working and fully automated CI/CD pipeline. </Text>
                </CardBody>
              </Card>
              <Card >
                <CardHeader>
                  <Heading size='md'> Vignette Studio II, RIT </Heading>
                </CardHeader>
                <CardBody>
                  <Text>- Maintained and updated the backend and GUI of Vignette Studio II which allowed professors and teachers to create html based video tutorials to publish on their Learning Management System (LMS) of choice. </Text>
                  <Text>- In charge of SCORM compliance for LMS reusability.</Text>
                </CardBody>
              </Card> <Card >
                <CardHeader>
                  <Heading size='md'> Innovation Fellows, RIT </Heading>
                </CardHeader>
                <CardBody>
                  <Text>- Performed customer discovery and data analysis for an IoT based start-up project with Kodak Alaris that could potentially make use of their high speed production scanners or image processing software to help make information workflow in businesses more efficient and faster.</Text>
                </CardBody>
              </Card> <Card >
                <CardHeader>
                  <Heading size='md'> Supplemental Instruction Leader, RIT </Heading>
                </CardHeader>
                <CardBody>
                  <Text>- Helped students become independent learners by leading group oriented study sessions for precalculus.</Text>
                  <Text>- Mentored other Supplemental Instruction Leaders </Text>
                  <Text>- Attended soft skill workshops for leadership, teamwork, and communication </Text>
                </CardBody>
              </Card> <Card >
                <CardHeader>
                  <Heading size='md'> Mobile Configuration App, Safran |  Navigation and Timing </Heading>
                </CardHeader>
                <CardBody>
                  <Text>- Collaborated in a team of four using TypeScript, React Native, and Expo to create an Android application for Safran in order to manage and configure an organization’s SecureSync devices.</Text>
                </CardBody>
              </Card> <Card >
                <CardHeader>
                  <Heading size='md'> Twooder </Heading>
                </CardHeader>
                <CardBody>
                  <Text>- Created a Twitter tweet sentiment analysis website using React, JavaScript, the Twitter API and the following Amazon Web services: Amplify, API Gateway, Lambda, DynamoDB, to display graphically compared results.</Text>
                </CardBody>
              </Card>
              </SimpleGrid>
              </TabPanel>

              <TabPanel> 
                <AspectRatio maxW='600px' color={'grey'}>
                 <div>
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1552526674&color=%233d4a50&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>                  
                 </div>
                 </AspectRatio>
              </TabPanel>
        
              <TabPanel>
              <SimpleGrid minChildWidth='275px'spacing='40px'>
                <Image src={IMG1}/>
                <Image src={IMG2}/>
                <Image paddingTop={10} src={IMG3}/>
                <Image src={IMG4}/>
                <Image src={IMG5}/>
                <Image paddingTop={4} src={IMG6}/>
                <Image src={IMG8}/>
                <Image src={IMG7}/>
              </SimpleGrid>
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
