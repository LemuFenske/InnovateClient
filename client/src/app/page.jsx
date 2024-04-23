
import SectioAboutMe from '@/components/SectioAboutMe/SectionAboutMe';
import SectioContactMe from '@/components/SectioContactMe/SectionContactMe';
import SectionProducts from '@/components/SectionProducts/SectionProducts';
import SectionInstagram from '@/components/SectionInstagram/SectionInstagram';
import Copyright from '@/components/CopyRight/Copyright';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <SectioAboutMe/>
      <SectionProducts/>
      <SectioContactMe/>
      <SectionInstagram/>
      <Copyright/>
    </div>
  );
};

export default Home;
