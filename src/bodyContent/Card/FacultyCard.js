import FacultyCardItem from "./FacultyCardItem";
import StartFirebase from "../../FirebaseDatabase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const db = StartFirebase();

const Card = (props) => {

  const [memberData, setMemberData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    let records = [];
    const dbRef = ref(db, "FacultyCoreMembers");
    onValue(dbRef, (data) => {
      data.forEach((dataitems) => {
        records.push(dataitems.val());
      });
      setIsLoading(false);
      setMemberData(records);
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
        {!isLoading && memberData.map((data, index) => {
          return <FacultyCardItem key={index} image={props.images[index]} name={data.name} post={data.post}/>
        })}
    </>
  );
};

export default Card;
