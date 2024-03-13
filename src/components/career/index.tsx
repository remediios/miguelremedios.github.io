import Experience from './experience/Experience';
import Education from './education/Education';
import { useGlobalContext } from '@/contexts/GlobalContext';

const Career = () => {
  const { isEnabled } = useGlobalContext();
  return isEnabled ? <Experience /> : <Education />;
};

export default Career;
