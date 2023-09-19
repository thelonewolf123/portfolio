import fs from 'fs'
import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import path from 'path'
import React, { useState } from 'react'
import remarkGfm from 'remark-gfm'

import { FormElement, Input, Text } from '@nextui-org/react'

import { SearchIcon } from '../../components/icons/search-icon'
import { BlogLayout } from '../../components/layout/blog-layout'
import { Box } from '../../components/styles/box'
import { Flex } from '../../components/styles/flex'
import { timeAgo } from '../../components/utils/timeago'

type Frontmatter = {
    title: string
    date: Date
    description: string
    slug: string
}

interface Props {
    sources: Frontmatter[]
}

const Blog = ({ sources }: Props) => {
    const [blogs, setBlogs] = useState(sources)

    const handleSearch = (e: React.ChangeEvent<FormElement>) => {
        const value = e.target.value
        //  setSearch(value);
        const filteredBlogs = sources.filter((blog) =>
            blog.title.toLowerCase().includes(value.toLowerCase())
        )
        setBlogs(filteredBlogs)
    }

    return (
        <BlogLayout>
            <Flex direction={'column'} css={{}}>
                <Text h1>Blog</Text>
                <Text span css={{ color: '$accents8' }}>
                    Ive been writing online since 2022, mostly about web
                    development and tech careers. Use the search below to filter
                    by title.
                </Text>
                <Box css={{ my: '$8' }}>
                    <Input
                        placeholder="Search by title"
                        css={{
                            width: '100%',
                            '& .nextui-input-wrapper': {
                                bc: '$accents2'
                            }
                        }}
                        contentRight={<SearchIcon />}
                        onChange={handleSearch}
                    />
                </Box>

                <Text h3>All posts</Text>

                <Flex direction={'column'} gap={'lg'}>
                    {blogs.length === 0 && (
                        <Text span css={{ color: '$accents8' }}>
                            No results found
                        </Text>
                    )}
                    {blogs.map((item) => (
                        <Link href={`blog/${item.slug}`} key={item.slug}>
                            <Flex
                                direction={'column'}
                                css={{
                                    py: '$8',
                                    px: '$4',
                                    cursor: 'pointer',
                                    borderRadius: '$sm',
                                    '&:hover': {
                                        bc: '$accents1'
                                    }
                                }}
                            >
                                <Flex gap={'xl'}>
                                    <Text h4>{item.title}</Text>
                                    <Text
                                        span
                                        css={{
                                            border: 'none',
                                            height: 'fit-content',
                                            mt: '3px',
                                            color: '$accents7'
                                        }}
                                    >
                                        {timeAgo(item.date)}
                                    </Text>
                                </Flex>

                                <Text span css={{ color: '$accents8' }}>
                                    {item.description}
                                </Text>
                            </Flex>
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </BlogLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const baseUrl = path.join(process.cwd(), 'blog/content')
    const files = fs.readdirSync(path.join('blog/content'))

    const frontMatters = await Promise.all(
        files.map(async (file) => {
            const sourceFile = fs.readFileSync(
                path.join(baseUrl + `/${file}`),
                'utf8'
            )
            const mdxSource = await serialize(sourceFile, {
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [remarkGfm]
                }
            })
            // @ts-ignore
            mdxSource.frontmatter.slug = file.replace('.mdx', '')
            return mdxSource.frontmatter
        })
    )

    frontMatters.sort((a, b) => {
        const aDate = new Date(a.date as string)
        const bDate = new Date(b.date as string)
        return aDate.valueOf() > bDate.valueOf() ? -1 : 1
    })

    return {
        props: {
            sources: frontMatters
        }
    }
}

export default Blog
