import ResourceCard from "../components/ResourceCard";
import { Flex, Card, CardBody } from "@chakra-ui/react";

const Resources = () => {
  const resources = [
    {
      title: "Anxiety Rx",
      image: "book.jpg",
      link: "https://www.amazon.co.uk/Anxiety-Rx-Prescription-Relief-Created/dp/1734426543/ref=sr_1_1?dib=eyJ2IjoiMSJ9.5RAdhp_kOy9-A7inzYLfk3o0tqrorJ3pU-aQznBLc2-bpwW5pkZdQPeXkwsBKUvy_47E4a63x-Lay_KFugJAE6HxH1uDb044zfD9t6Qb0-DXhyZzH14SpVSROPfchTabTUIMo71516_Ke9OdkU4VZdr5JERm5lXPLibcbPa0jQ0GVJ6fzKAWER1diO-suFKnCvZ7QOoiQWFU34srxxs4SmW-IWfmFA18DQ8LI1HfU1c.6WNMGFQVCx3J8O7mMlB-7s5yMSvencQu6a3OiCaQkAg&dib_tag=se&qid=1710592334&refinements=p_27%3ARussell+Kennedy&s=books&sr=1-1&text=Russell+Kennedy",
      type: "Book",
    },
    {
      title: "The Anxious Truth",
      image: "book.jpg",
      link: "https://www.amazon.co.uk/Anxious-Truth-Step-Step-Understanding/dp/173461644X/ref=sr_1_1?crid=MRG5AUB5KFFO&dib=eyJ2IjoiMSJ9.u9Jp494CPsUF7mV0lNhHTJMl8UN2dQyFurGg54sPSUHnqeDTFQEDoCUuDqSQZWtXLu9enYYVMh3qKkr-4rquWgMRvOx_ciX-kMSrbVGiqP2SOPzrlSYx6IVm1j8rx6ZKdIthnIHxraCknB2KwkWpzug37DMIzvDMaAVyg1VCgKd5wFoZdwnxudTISTuSF9S2jN1vSDvZsZOx71Hgj0u0AAPNbItbDtKur3D5r30sq3s.ZBgiyx0xykZeh4aNl1orG2VTVCdwePifyz4mzfoebQ4&dib_tag=se&keywords=anxious+truth&qid=1710594110&sprefix=anxious+truth%2Caps%2C129&sr=8-1",
      type: "Book",
    },
    {
      title: "Mindfulness: A Practical Guide",
      image: "book.jpg",
      link: "https://www.amazon.co.uk/Mindfulness-practical-guide-finding-frantic/dp/074995308X/ref=sr_1_4?crid=3II0J2PXVETOE&dib=eyJ2IjoiMSJ9.bmJie-TqltWWiPK3OCnnA01FoJ-f79p6aQ6wrlGrki5jk8ZpU2wWiKDJUTA44KQN7T2qs0jCwsGQHNjMGKPKQBOb_wS2O2XG79cJCai-DhIHzxvn_FKjwtsZ-RBlqWDppDzANzcLha_gc5lLiX7gHyQTFQAAI2ybwTFXGPghZ_HhZ2zKJj3n-W80gyq8wFGsEgDWeQZZ287q3CbXJCrqRjXwwPTCCTrTWNNue88SFw8.8R-H7kfriR73kMCjbsgUNkoP6ejk6EjjmY7fn4srhDc&dib_tag=se&keywords=mindfulness&qid=1710592378&s=books&sprefix=mindfulness%2Cstripbooks%2C64&sr=1-4",
      type: "Book",
    },
    {
      title: "Meditation for Anxiety",
      image: "video.jpg",
      link: "https://www.youtube.com/watch?v=v-w-vSvi-24&ab_channel=UniversityofCaliforniaTelevision%28UCTV%29",
      type: "Video",
    },
    {
      title: "What is Exposure Therapy?",
      image: "video.jpg",
      link: "https://youtu.be/195q_YKY2vc?si=x1tEJejUcdKqCOgy",
      type: "Video",
    },
  ];

  return (
    <>
      <Flex justify="center">
        <Card w="80%">
          <CardBody>
            <Flex gap={"10px"} align={"flex-start"}>
              {resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  image={resource.image}
                  link={resource.link}
                  type={resource.type}
                />
              ))}
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Resources;
