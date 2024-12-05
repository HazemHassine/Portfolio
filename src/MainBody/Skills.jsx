'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Organize skills into categories
const skillCategories = {
  all: [],
  languages: [
    { name: 'C', src: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' },
    { name: 'CSS3', src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'HTML5', src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'Java', src: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' },
    { name: 'JavaScript', src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
    { name: 'Python', src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' },
    { name: 'TypeScript', src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' },
  ],
  datascience: [
    { name: 'Keras', src: 'https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white' },
    { name: 'NumPy', src: 'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white' },
    { name: 'Pandas', src: 'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white' },
    { name: 'PyTorch', src: 'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white' },
    { name: 'scikit-learn', src: 'https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white' },
    { name: 'Matplotlib', src: 'https://img.shields.io/badge/Matplotlib-%23FF5733.svg?style=for-the-badge&logo=Matplotlib&logoColor=white' },
    { name: 'Seaborn', src: 'https://img.shields.io/badge/Seaborn-%23294E70.svg?style=for-the-badge&logo=Seaborn&logoColor=white' },
    { name: 'TensorFlow', src: 'https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white' },
    { name: 'Jupyter', src: 'https://img.shields.io/badge/Jupyter-%23F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white' },
    { name: 'SciPy', src: 'https://img.shields.io/badge/SciPy-%231A6FB4.svg?style=for-the-badge&logo=SciPy&logoColor=white' },
    { name: 'OpenCV', src: 'https://img.shields.io/badge/OpenCV-%23white.svg?style=for-the-badge&logo=OpenCV&logoColor=black' },
    { name: 'Plotly', src: 'https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=Plotly&logoColor=white' }
],

cloud: [
  { name: 'Cloudflare', src: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white' },
  { name: 'Google Cloud', src: 'https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white' },
  { name: 'Heroku', src: 'https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white' },
  { name: 'Vercel', src: 'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white' },
  { name: 'Firebase', src: 'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' },
  { name: 'Docker', src: 'https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' },
  { name: 'Kubernetes', src: 'https://img.shields.io/badge/Kubernetes-%23326CE5.svg?style=for-the-badge&logo=kubernetes&logoColor=white' },
  { name: 'Streamlit', src: 'https://img.shields.io/badge/Streamlit-%23FF4B4B.svg?style=for-the-badge&logo=streamlit&logoColor=white' },
  { name: 'Hugging Face', src: 'https://img.shields.io/badge/Hugging%20Face-%23FFD54F.svg?style=for-the-badge&logo=huggingface&logoColor=black' },
],

frameworks: [
  { name: 'Django', src: 'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white' },
  { name: 'Express.js', src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
  { name: 'FastAPI', src: 'https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi' },
  { name: 'React', src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
  { name: 'Node.js', src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' },
  { name: 'Flask', src: 'https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white' },
  { name: 'Next.js', src: 'https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white' },
  { name: 'TailwindCSS', src: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' },
  { name: 'Bootstrap', src: 'https://img.shields.io/badge/Bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' },
],

tools: [
  { name: 'Anaconda', src: 'https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white' },
  { name: 'NPM', src: 'https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white' },
  { name: 'Webpack', src: 'https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black' },
  { name: 'Docker', src: 'https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' },
  { name: 'Jupyter', src: 'https://img.shields.io/badge/Jupyter-%23F37626.svg?style=for-the-badge&logo=jupyter&logoColor=white' },
  { name: 'Git', src: 'https://img.shields.io/badge/git-%23F1502F.svg?style=for-the-badge&logo=git&logoColor=white' },
  { name: 'GitHub', src: 'https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' },
  { name: 'VS Code', src: 'https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white' },
  { name: 'PyCharm', src: 'https://img.shields.io/badge/PyCharm-%234B6CB7.svg?style=for-the-badge&logo=pycharm&logoColor=white' },
  { name: 'Google Colab', src: 'https://img.shields.io/badge/Google%20Colab-%2372C2E5.svg?style=for-the-badge&logo=googlecolab&logoColor=black' }
],

  design: [
    { name: 'Canva', src: 'https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white' },
    { name: 'Figma', src: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white' },
  ],
}

// Populate the 'all' category
skillCategories.all = Object.values(skillCategories).flat()

export default function Skills({id}) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <section className="py-16 px-4" id={id}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-teal-500 mb-12 drop-shadow-[0_0_5px_rgba(20,144,186,0.7)]">
          Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center"
        >
          {skillCategories[selectedCategory].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transform transition-all duration-200 hover:drop-shadow-[0_0_30px_rgba(20,144,186,0.3)]"
            >
              <img
                className="h-8"
                src={skill.src}
                alt={skill.name}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}