import { useTranslation } from 'react-i18next';
import SkillItem from './SkillItem';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

interface ISkillContainerProps {
  skillLogo: string;
  skillName: string;
  skillDescription: string;
}

const skillList: string[] = [
  'Node.js',
  'React JS',
  'Nest.js',
  'Docker',
  'Kubernetes',
  'RabbitMQ',
  'PostgreSQL',
  'MongoDB',
  'GraphQL',
  'AWS',
  'TypeScript',
  'Jest & Mocha',
];

const SkillContainer = () => {
  const { t } = useTranslation();
  const currentLanguage = t('language');

  const [skillContainerProps, setSkillContainerProps] = useState<
    ISkillContainerProps[]
  >([]);

  useEffect(() => {
    const skillContainerProps: ISkillContainerProps[] = skillList.map(
      (skill) => {
        return {
          skillLogo: `/skills-pictures/${skill
            .toLowerCase()
            .replace(' ', '-')}-icon.svg`,
          skillName: skill,
          skillDescription: t(`skills.${skill}`),
        };
      }
    );

    setSkillContainerProps(skillContainerProps);
  }, [t, currentLanguage]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
        display: 'flex',
        // alignItems: "center",
        justifyContent: 'space-around',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      {skillContainerProps.map((skill) => (
        <SkillItem
          key={skill.skillName}
          skillLogo={skill.skillLogo}
          skillName={skill.skillName}
          skillDescription={skill.skillDescription}
        />
      ))}
    </Container>
  );
};

export default SkillContainer;
