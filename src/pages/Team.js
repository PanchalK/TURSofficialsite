import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import StudentCard from "../bodyContent/Card/StudentCard";
import FacultyCard from "../bodyContent/Card/FacultyCard";
import WebTeamCard from "../bodyContent/Card/WebTeamCard";
import { storage } from "../Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Team = () => {
  const [facultyimages, setFacultyImages] = useState([]);
  const [studentimages, setStudentImages] = useState([]);
  const [webteamimages, setWebTeamImages] = useState([]);
  facultyimages.sort((a, b) => a.localeCompare(b));
  studentimages.sort((a, b) => a.localeCompare(b));
  webteamimages.sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    const facultyListRef = ref(storage, "facultycoremembers/");
    listAll(facultyListRef)
      .then((res) => {
        res.items.map((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setFacultyImages((prev) => [...prev, url]);
          });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    const studentListRef = ref(storage, "studentcoremembers/");
    listAll(studentListRef)
      .then((res) => {
        res.items.map((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setStudentImages((prev) => [...prev, url]);
          });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    const webTeamListRef = ref(storage, "webteam/");
    listAll(webTeamListRef)
      .then((res) => {
        res.items.map((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setWebTeamImages((prev) => [...prev, url]);
          });
        });
      })
      .finally(()=>{
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <Box pb={{ base: "10%", sm: "9%", md: "8%", lg: "7%" }}>
        <Text
          pt={{ base: "22%", sm: "18%", md: "13%", lg: "8%" }}
          textAlign="center"
          fontFamily="'Josefin Sans', sans-serif"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        >
          Team Members
        </Text>
        <Flex
          justify="space-between"
          flexWrap="wrap"
          w={{ base: "85vw", sm: "85vw", md: "80vw", lg: "70vw" }}
          m="auto"
        >
          <FacultyCard images={facultyimages} />
          <StudentCard images={studentimages} />
        </Flex>
          <WebTeamCard images={webteamimages} />
      </Box>
    </>
  );
};

export default Team;
