import classes from "./Members.module.css";
import {
  Table,
  Thead,
  Tbody,
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
  const [isLoading, LoadingHandler] = useState();

  useEffect(() => {
    LoadingHandler(true);
    let records = [];
    const dbRef = ref(db, "RegisteredMembers");
    onValue(dbRef, (data) => {
      data.forEach((dataitems) => {
        records.push(dataitems.val());
      });
      LoadingHandler(false);
      setData(records);
    });
  }, []);

  return (
    <div className={classes.body}>
      <h2 className={classes.heading}>List of Registered Members</h2>
      <TableContainer className={classes.table}>
        <Table
          variant="striped"
          colorScheme="gray"
        >
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
            {data.map((memberData, idx) => <Tr key={idx}>
                  <Td>{memberData.rollno}</Td>
                  <Td>{memberData.name}</Td>
                  <Td>{memberData.course}</Td>
                  <Td>{memberData.semester}</Td>
                </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Members;
