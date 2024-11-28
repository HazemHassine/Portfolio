import React from 'react';

const Skills = () => {
    const skills = [
        {
            name: 'C',
            src: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',
        },
        {
            name: 'CSS3',
            src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
        },
        {
            name: 'HTML5',
            src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
        },
        {
            name: 'Java',
            src: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white',
        },
        {
            name: 'JavaScript',
            src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
        },
        {
            name: 'LaTeX',
            src: 'https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white',
        },
        {
            name: 'Python',
            src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
        },
        {
            name: 'TypeScript',
            src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
        },
        {
            name: 'Cloudflare',
            src: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
        },
        {
            name: 'Google Cloud',
            src: 'https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white',
        },
        {
            name: 'Heroku',
            src: 'https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white',
        },
        {
            name: 'Vercel',
            src: 'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white',
        },
        {
            name: 'Firebase',
            src: 'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase',
        },
        {
            name: 'Anaconda',
            src: 'https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white',
        },
        {
            name: 'Bootstrap',
            src: 'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
        },
        {
            name: 'Django',
            src: 'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white',
        },
        {
            name: 'Electron.js',
            src: 'https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white',
        },
        {
            name: 'Express.js',
            src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
        },
        {
            name: 'FastAPI',
            src: 'https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi',
        },
        {
            name: 'Insomnia',
            src: 'https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE',
        },
        {
            name: 'NPM',
            src: 'https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white',
        },
        {
            name: 'NodeJS',
            src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
        },
        {
            name: 'React',
            src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
        },
        {
            name: 'Webpack',
            src: 'https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black',
        },
        {
            name: 'Yarn',
            src: 'https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white',
        },
        {
            name: 'MongoDB',
            src: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
        },
        {
            name: 'Canva',
            src: 'https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white',
        },
        {
            name: 'Figma',
            src: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white',
        },
        {
            name: 'Keras',
            src: 'https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white',
        },
        {
            name: 'NumPy',
            src: 'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white',
        },
        {
            name: 'Pandas',
            src: 'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white',
        },
        {
            name: 'Plotly',
            src: 'https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white',
        },
        {
            name: 'PyTorch',
            src: 'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
        },
        {
            name: 'scikit-learn',
            src: 'https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white',
        }];

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
            {skills.map((skill) => (
                <img
                    key={skill.name}
                    className="h-8 mx-2 drop-shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                    src={skill.src}
                    alt={skill.name}
                />
            ))}
        </div>
    );
};

export default Skills;