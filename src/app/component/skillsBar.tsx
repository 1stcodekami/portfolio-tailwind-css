'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  { category: 'Programming Skills', skills: [
    { name: 'HTML', level: 94 },
    { name: 'CSS', level: 83 },
    { name: 'JavaScript', level: 88 },
    { name: 'Next.js', level: 75 },
  ]},
  { category: 'Designing Skills', skills: [
    { name: 'Photoshop', level: 82 },
    { name: 'Illustrator', level: 74 },
    { name: 'Figma', level: 63 },
    { name: 'Responsive Design', level: 91 },
  ]}
];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div className="flex flex-col md:flex-row justify-around md:space-x-96 p-5 space-y-8 md:space-y-0" ref={ref}>
      {skillsData.map((category, index) => (
        <div className="w-full md:w-96 md:space-x-2 space-y-7" key={index}>
          <h3 className="text-xl mb-4">{category.category}</h3>
          {category.skills.map((skill, idx) => (
            <div key={idx} className="mb-4">
              <p>{skill.name}</p>
              <div className="relative bg-gray-200 rounded-full h-4">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: inView ? `${skill.level}%` : '0%' }}
                  transition={{ duration: 1 }}
                >
                  <span className="absolute top-0 right-0 -mt-5 text-xs font-bold">{skill.level}%</span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
