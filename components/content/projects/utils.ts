interface Project {
    title: string
    description: string
    img: string
    href: string
    preview?: string
    github: string
    alt: string
    platform: string
    stack: string
    delay: number
}

export const projects: Project[] = [
    {
        title: 'PyFiddle - JsFiddle for Python',
        description: `PyFiddle is a python equivalent for JsFiddle. It has a dependency management system just like jsfiddle so people can work on complex projects and it also has a built-in debugger.`,
        img: '/pyfiddle.png',
        href: '/projects/pyfiddle',
        preview: 'https://pyfiddle.vercel.app/',
        github: 'https://github.com/thelonewolf123/pyfiddle',
        alt: 'Projects',
        platform: 'Web',
        stack: 'VueJs, Javascript, Python, CSS.',
        delay: 0.1
    },
    {
        title: 'Portfolio',
        description: `Experience a seamless and visually stunning portfolio showcase with Next.js and NextUI — an impressive combination of cutting-edge frontend technologies.`,
        img: '/demo.png',
        href: '/projects/portfolio',
        preview: 'https://harishkumar.pro',
        github: 'https://github.com/thelonewolf123/portfolio',
        alt: 'Projects',
        platform: 'Web',
        stack: 'NextJs, NextUI, Typescript, CSS.',
        delay: 0.1
    },
    {
        title: 'EFI Editor',
        description: `A GUI-based command generator for efibootmgr, designed for Linux systems. Simplifying the transition from Windows to Linux, it provides a user-friendly interface for command-line tools.`,
        img: '/efi-editor.png',
        href: '/projects/efi-editor',
        github: 'https://github.com/thelonewolf123/efi-editor',
        alt: 'Projects',
        platform: 'Desktop',
        stack: 'Java, JavaFX, FXML.',
        delay: 0.1
    },
    {
        title: 'Stardust.app',
        description:
            'Proof of concept container deployment platform that runs on top of AWS spot instances. It is designed to be a cost-effective alternative to traditional container deployment platforms.',
        img: '/stardust.png',
        href: '/projects/stardust',
        github: 'https://github.com/thelonewolf123/stardust.app',
        alt: 'Projects',
        platform: 'Web',
        stack: 'Aws, NextJs, Typescript, TailwindCSS, MongoDB, NodeJs, Redis, RabbitMQ, Docker.',
        delay: 0.1
    },
    {
        title: 'Gym-buddy',
        description:
            'Gym-buddy is a android application that helps you to track your workouts.',
        img: '/gym-buddy.png',
        href: '/projects/gym-buddy',
        github: 'https://github.com/thelonewolf123/gym-buddy',
        alt: 'Projects',
        platform: 'Web',
        stack: 'React Native, Typescript, TailwindCSS, RealmDB, PocketBase.',
        delay: 0.1
    }
]
