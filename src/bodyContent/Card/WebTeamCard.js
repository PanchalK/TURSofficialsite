import { Flex, Text } from "@chakra-ui/react";
import StudentCardItem from "./StudentCardItem";
import StartFirebase from "../../FirebaseDatabase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import classes from "./WebTeamCard.module.css"

const db = StartFirebase();

const Card = (props) => {
  const [webMemberData, setWebMemberData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    let records = [];
    const dbRef = ref(db, "WebTeam");
    onValue(dbRef, (data) => {
      data.forEach((dataitems) => {
        records.push(dataitems.val());
      });
      setWebMemberData(records);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <Text
          pt={{ base: "22%", sm: "18%", md: "13%", lg: "8%" }}
          textAlign="center"
          fontFamily="'Josefin Sans', sans-serif"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        >
          Web Team
        </Text>

      )}
<hr className={classes.styletwo}></hr>
      <Flex
        justify="space-evenly"
        flexWrap="wrap"
        w={{ base: "85vw", sm: "85vw", md: "80vw", lg: "70vw" }}
        m="auto"
      >
        {!isLoading &&
          webMemberData.map((data, index) => {
            return (
              <StudentCardItem
                key={index}
                image={props.images[index]}
                name={data.name}
                post={data.post}
                email={data.email}
                linkedin={data.linkedin}
              />
            );
          })}
      </Flex>
    </>
  );
};

export default Card;
