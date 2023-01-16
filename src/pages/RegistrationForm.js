import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingSpinner from "../bodyContent/LoadingSpinner/LoadingSpinner";
import classes from "./RegistrationForm.module.css";
import { storage } from "../Firebase";
import { ref, uploadBytes } from "firebase/storage";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";

const RegistrationForm = () => {
  const name = useRef();
  const RollNo = useRef();
  const Gender = useRef();
  const Semester = useRef();
  const EmailId = useRef();
  const PhoneNo = useRef();
  const Course = useRef();
  const PaymentReceipt = useRef();
  const History = useHistory();

  const [isLoading, LoadingHandler] = useState();

  const SubmitHandler = (event) => {
    event.preventDefault();

    LoadingHandler(true);

    const ReceivedName = name.current.value;
    const ReceivedRoll = RollNo.current.value;
    const ReceivedGender = Gender.current.value;
    const ReceivedSem = Semester.current.value;
    const ReceivedEmail = EmailId.current.value;
    const ReceivedPhone = PhoneNo.current.value;
    const ReceivedCourse = Course.current.value;
    const ReceivedPayRec = PaymentReceipt.current.files[0];

    const PayRecRef = ref(storage, `paymentreceipt/${ReceivedRoll}`);
    uploadBytes(PayRecRef, ReceivedPayRec).then(() => {
      console.log("receipt uploaded successfully");
    });

    let url =
      "https://turs-details-default-rtdb.firebaseio.com/RegisteredMembers.json";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: ReceivedName,
        rollno: ReceivedRoll,
        gender: ReceivedGender,
        semester: ReceivedSem,
        email: ReceivedEmail,
        PhNo: ReceivedPhone,
        course: ReceivedCourse,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        LoadingHandler(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(() => {
            let ErrorMsg = "Registration Failed!";
            throw new Error(ErrorMsg);
          });
        }
      })
      .then((data) => {
        alert("Successfully registered");
        History.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <Box
        pt={{ base: "15%", sm: "12%", md: "10%", lg: "7%" }}
        pb={{ base: "10%", sm: "8%", md: "7%", lg: "8%" }}
      >
        <motion.div className={classes.body} whileInView={{ y: [-50, 0] }}>
          {isLoading && <LoadingSpinner />}
          <Text fontSize={{ base: "14px", sm: "17px", md: "20px", lg: "24px" }}>
            <strong>Register here</strong>
          </Text>
          <Text
            fontSize={{ base: "14px", sm: "17px", md: "20px", lg: "24px" }}
            mb={{ base: "5%", sm: "4%", md: "3%", lg: "2%" }}
          >
            Fill this registration form to join TUSC
          </Text>
          <VStack
            className={classes.content}
            w={{ base: "90vw", sm: "90vw", md: "70vw", lg: "60vw" }}
            m="auto"
            p="4%"
          >
            <FormControl onSubmit={SubmitHandler} isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                className={classes.input}
                ref={name}
                required
              ></Input>
              <FormLabel>Roll No</FormLabel>
              <Input
                type="text"
                className={classes.input}
                ref={RollNo}
                required
              ></Input>
              <div className={classes.select}>
                <div>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    className={classes.Sname}
                    placeholder="Select"
                    ref={Gender}
                    w={{ base: "35vw", sm: "32vw", md: "25vw", lg: "20vw" }}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Select>
                </div>
                <div>
                  <FormLabel>Semester</FormLabel>
                  <Select
                    className={classes.Sname}
                    placeholder="Select"
                    ref={Semester}
                    w={{ base: "35vw", sm: "32vw", md: "25vw", lg: "20vw" }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Select>
                </div>
              </div>
              <FormLabel>Email</FormLabel>
              <Input
                className={classes.input}
                type="email"
                ref={EmailId}
                required
              ></Input>
              <FormLabel>Phone</FormLabel>
              <Input
                className={classes.input}
                type="text"
                ref={PhoneNo}
                required
              ></Input>
              <FormLabel>Course</FormLabel>
              <Input
                className={classes.input}
                type="text"
                ref={Course}
                required
              ></Input>
              <FormLabel>Payment Receipt (or screen shot)</FormLabel>
              <Input
                className={classes.input}
                type="file"
                ref={PaymentReceipt}
                required
              ></Input>
              <motion.button type="submit" whileHover={{ scale: 1.03 }}>
                 <strong>Register</strong>
              </motion.button>
            </FormControl>
          </VStack>
        </motion.div>
      </Box>
    </>
  );
};

export default RegistrationForm;
