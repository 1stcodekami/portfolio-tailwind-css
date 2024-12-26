// src/app/component/typingHeadline.tsx
import { Typewriter } from 'react-simple-typewriter';

const TypingHeadline = () => {
  return (
    <Typewriter
      words={['Developer.', 'UI/UX Designer.', 'Professional Coder.']}
      loop={false}
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default TypingHeadline;
