import { Card, CardBody } from "@heroui/card";


const languages = ["C/C++", "Rust", "Python", "Java", "Go", "Bash/Zsh", "Assembly", "OS/Kernel Dev", "SQL", "ML/AI", "NLP", "JavaScript/TS"];

function SkillsAndTechnologies() {
  return (
    <div className="grid grid-cols-2 gap-7 sm:grid-cols-6">
      {languages.map((language) => (
        <Card key={language} shadow="lg" isBlurred={false} isHoverable={true} isPressable={false} className="border-none bg-default-100/40 dark:bg-default-100/40">
          <CardBody className="text-center text-foreground-700 font-medium">
            {language}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export { SkillsAndTechnologies };
