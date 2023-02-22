import classes from "./Members.module.css";
import {
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import LoadingSpinner from "../bodyContent/LoadingSpinner/LoadingSpinner";
import StartFirebase from "../FirebaseDatabase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const db = StartFirebase();

const Members = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    let records = [];
    const dbRef = ref(db, "RegisteredMembers");
    onValue(dbRef, (data) => {
      data.forEach((dataitems) => {
        records.push(dataitems.val());
      });
      setIsLoading(false);
      setData(records);
    });
  }, []);

  return (
    <div className={classes.body}>
      <Text
        className={classes.heading}
        fontSize={{ base: "1.3rem", sm: "1.8rem", md: "2rem", lg: "3rem" }}
        fontFamily="'Josefin Sans', sans-serif"
        pt={{ base: "18%", sm: "14%", md: "12%", lg: "8%" }}
      >
        List of Registered Members
      </Text>

      <TableContainer
        className={classes.table}
        mt={{ base: "8%", sm: "8%", md: "5%", lg: "3%" }}
      >
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Roll No.</Th>
              <Th>Name</Th>
              <Th>Course</Th>
              <Th>Semester</Th>
            </Tr>
          </Thead>
          {isLoading && <LoadingSpinner />}
          <Tbody>
            {data.map((memberData, idx) => (
              <Tr key={idx}>
                <Td>{memberData.rollno}</Td>
                <Td>{memberData.name}</Td>
                <Td>{memberData.course}</Td>
                <Td>{memberData.semester}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Members;
