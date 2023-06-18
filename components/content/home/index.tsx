import { Text, Avatar, Card, Button, Link } from '@nextui-org/react'
import { Box } from '../../styles/box'
import { Flex } from '../../styles/flex'
import { GithubIcon } from '../../icons/github-icon'
import { LinkedinIcon } from '../../icons/linkedin-icon'
import { SectionAnimation } from '../../animations/section'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { LinkIcon } from '../../icons/link-icon'
import { GridContainer } from '../../styles/grid'

export const Home = () => {
    return (
        <Box css={{ px: '$12', '@xsMax': { px: '$10' }, width: '100%' }}>
            <Card variant="flat" css={{ marginBottom: '$10' }}>
                <Card.Body css={{ backgroundColor: '$accents2' }}>
                    <Text
                        css={{ fontFamily: 'inherit', textAlign: 'center' }}
                        as={'p'}
                    >
                        Hello, I&apos;m Harish Kumar. I&apos;m a software
                        engineer based in Chennai!
                    </Text>
                </Card.Body>
            </Card>
            <Flex justify={'between'} css={{ pb: '$10' }}>
                <Box css={{ alignSelf: 'center' }}>
                    <Text h2 css={{ my: '$0' }}>
                        Harish Kumar
                    </Text>
                    <Text css={{ fontFamily: 'inherit' }}>
                        Software Engineer ( Backend / Frontend / Developer )
                    </Text>
                </Box>

                <Avatar
                    css={{ '--nextui--avatarXl': '7.5rem' }}
                    pointer
                    bordered
                    size={'xl'}
                    src="/profilepic.jpg"
                />
            </Flex>
            <SectionAnimation delay={0.1}>
                <Box css={{ mb: '$10' }}>
                    <Text h3>Work</Text>
                    <Text
                        span
                        css={{
                            textIndent: '1em',
                            display: 'block'
                        }}
                    >
                        I am a full stack developer with more than 2+ years of
                        experience in designing and building complex web
                        applications. My main area of expertise is creating
                        online integrated development environments (IDEs) that
                        enable users to write, run and debug code in the
                        browser. I also have skills in designing and building
                        distributed serverless systems that leverage cloud
                        computing platforms and microservices architecture. I am
                        passionate about creating innovative and user-friendly
                        solutions that solve real-world problems.
                    </Text>

                    <Flex justify={'center'} css={{ mt: '$8' }}>
                        <NextLink href="/projects">
                            <Link block css={{ gap: '$4' }}>
                                Projects <LinkIcon />
                            </Link>
                        </NextLink>
                    </Flex>
                </Box>
            </SectionAnimation>

            <SectionAnimation delay={0.2}>
                <Box css={{ mb: '$10' }}>
                    <Text h3>Bio</Text>

                    <Box as={'ul'} css={{ m: 0 }}>
                        <Box
                            as={'li'}
                            css={{ textIndent: '-3.4em', pl: '3.4em' }}
                        >
                            <Text span css={{ mr: '1em' }} weight={'bold'}>
                                2000
                            </Text>
                            <Text span>Born in Vellore, India.</Text>
                        </Box>
                        <Box
                            as={'li'}
                            css={{ textIndent: '-3.4em', pl: '3.4em' }}
                        >
                            <Text span css={{ mr: '1em' }} weight={'bold'}>
                                2017 - 2022
                            </Text>
                            <Text span>Bachelor&apos;s degree in ECE.</Text>
                        </Box>
                        <Box
                            as={'li'}
                            css={{ textIndent: '-3.4em', pl: '3.4em' }}
                        >
                            <Text span css={{ mr: '1em' }} weight={'bold'}>
                                2021 - 2022
                            </Text>
                            <Text span>
                                Worked as a Software Developer in Facilio Inc.
                            </Text>
                        </Box>
                        <Box
                            as={'li'}
                            css={{ textIndent: '-3.4em', pl: '3.4em' }}
                        >
                            <Text span css={{ mr: '1em' }} weight={'bold'}>
                                2022 - 2023
                            </Text>
                            <Text span>
                                Worked as a Fullstack Developer at Codedamn.
                            </Text>
                        </Box>
                        <Box
                            as={'li'}
                            css={{ textIndent: '-3.4em', pl: '3.4em' }}
                        >
                            <Text span css={{ mr: '1em' }} weight={'bold'}>
                                2022 - Present
                            </Text>
                            <Text span>
                                Work as a Software Engineer at Klenty soft Inc.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </SectionAnimation>

            <SectionAnimation delay={0.3}>
                <Box css={{ mb: '$10' }}>
                    <Text h3>I ❤️ </Text>
                    <Text as={'span'} css={{ textIndent: '1em' }}>
                        I love to learn new things, I am passionate about
                        technology and I always try to learn something new every
                        day, I love to solve problems and I am always looking
                        for new challenges.
                    </Text>
                </Box>
            </SectionAnimation>

            <SectionAnimation delay={0.3}>
                <Box css={{ mb: '$10' }}>
                    <Text h3>Skills</Text>
                    <GridContainer
                        as={'ul'}
                        gap={'md'}
                        css={{
                            m: 0,
                            px: 0,
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            '@xsMax': {
                                gridTemplateColumns: 'repeat(2, 1fr)'
                            }
                        }}
                    >
                        <Box as={'li'}>ReactJS</Box>
                        <Box as={'li'}>NextJS</Box>
                        <Box as={'li'}>NodeJS</Box>
                        <Box as={'li'}>Grqphql</Box>
                        <Box as={'li'}>TypeScript</Box>
                        <Box as={'li'}>Python</Box>
                        <Box as={'li'}>Django</Box>
                        <Box as={'li'}>Git</Box>
                        <Box as={'li'}>Mongodb</Box>
                        <Box as={'li'}>AWS</Box>
                        <Box as={'li'}>Windows/Linux</Box>
                        <Box as={'li'}>C++</Box>
                    </GridContainer>
                </Box>
            </SectionAnimation>

            <SectionAnimation delay={0.3}>
                <Box css={{ mb: '$10' }}>
                    <Text h3>Languages</Text>
                    <GridContainer as={'ul'} gap={'md'} css={{ m: 0, px: 0 }}>
                        <Box as={'li'}>Tamil </Box>
                        <Box as={'li'}>English </Box>
                    </GridContainer>
                </Box>
            </SectionAnimation>

            <SectionAnimation delay={0.3}>
                <Box css={{ mb: '$10' }}>
                    <Text h3>On the Web </Text>
                    <Box as={'ul'} css={{ m: 0 }}>
                        <Box as={'li'}>
                            <Link
                                block
                                target={'_blank'}
                                color="primary"
                                href="https://github.com/thelonewolf123"
                            >
                                <Button
                                    light
                                    color="primary"
                                    auto
                                    icon={<GithubIcon />}
                                    ripple={false}
                                    css={{ pl: '$3' }}
                                >
                                    @thelonewolf123
                                </Button>
                            </Link>
                        </Box>
                        <Box as={'li'}>
                            <Link
                                block
                                target={'_blank'}
                                color="primary"
                                href="https://www.linkedin.com/in/harishkumark025/"
                            >
                                <Button
                                    light
                                    color="primary"
                                    auto
                                    icon={<LinkedinIcon />}
                                    ripple={false}
                                    css={{ pl: '$3' }}
                                >
                                    @Harish Kumar K
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </SectionAnimation>
        </Box>
    )
}
