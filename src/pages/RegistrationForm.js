import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingSpinner from "../bodyContent/LoadingSpinner/LoadingSpinner";
import classes from "./RegistrationForm.module.css";
import { storage } from "../Firebase";
import { ref, uploadBytes } from "firebase/storage";
import swal from 'sweetalert';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const RegistrationForm = () => {
  const name = useRef();
  const RollNo = useRef();
  const EmailId = useRef();
  const Program = useRef();
  const Department = useRef();
  const YearOfJoining = useRef();
  const Address = useRef();
  const FieldOfInterest = useRef();
  const Remarks = useRef();
  const PaymentReferenceNo = useRef();
  const PaymentReceipt = useRef();

  const History = useHistory();

  const [isLoading, LoadingHandler] = useState();
  const [phoneValue, setPhoneValue] = useState();

  const SubmitHandler = (event) => {
    event.preventDefault();

    LoadingHandler(true);

    const ReceivedName = name.current.value;
    const ReceivedRoll = RollNo.current.value;
    const ReceivedEmail = EmailId.current.value;
    const ReceivedPhone = phoneValue;
    const Receivedprogram = Program.current.value;
    const ReceivedDepartment = Department.current.value;
    const ReceivedYearOfJoining = YearOfJoining.current.value;
    const ReceivedAddress = Address.current.value;
    const ReceivedFieldOfInterest = FieldOfInterest.current.value;
    const ReceivedRemarks = Remarks.current.value;
    const ReceivedPaymentReferenceNo = PaymentReferenceNo.current.value;
    const ReceivedPayRec = PaymentReceipt.current.files[0];

    const PayRecRef = ref(storage, `paymentreceipt/${ReceivedRoll}`);
    uploadBytes(PayRecRef, ReceivedPayRec)

    let url = process.env.REACT_APP_REAL_DB;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: ReceivedName,
        rollno: ReceivedRoll,
        email: ReceivedEmail,
        phno: ReceivedPhone,
        program: Receivedprogram,
        department: ReceivedDepartment,
        yearofjoining: ReceivedYearOfJoining,
        address: ReceivedAddress,
        fieldofinterest: ReceivedFieldOfInterest,
        remarks: ReceivedRemarks,
        paymentrefno: ReceivedPaymentReferenceNo,
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
        swal({
          title: "Thank you for submitting!",
          text: "Welcome to the club!",
          icon: "success",
          buttons: false,
          timer: 3000,

        });
        setTimeout(() => {
          History.replace("/")
        },3000)
          
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
          <Text fontSize={{ base: "16px", sm: "19px", md: "20px", lg: "24px" }}>
            <strong>Register here</strong>
          </Text>
          <Text
            fontSize={{ base: "16px", sm: "19px", md: "20px", lg: "24px" }}
            mb={{ base: "5%", sm: "4%", md: "3%", lg: "2%" }}
            fontFamily="'Josefin Sans', sans-serif"
          >
            Fill this registration form to join TURS
          </Text>
          <VStack
            className={classes.content}
            w={{ base: "90vw", sm: "90vw", md: "70vw", lg: "60vw" }}
            m="auto"
            p="4%"
          >
            <form onSubmit={SubmitHandler}>
              <FormControl>
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
                <FormLabel>Email</FormLabel>
                <Input
                  className={classes.input}
                  type="email"
                  ref={EmailId}
                  required
                ></Input>
                <FormLabel>Phone</FormLabel>
                <PhoneInput
                  defaultCountry="IN"
                  className={classes.input}
                  value={phoneValue}
                  onChange={setPhoneValue}/>
                <FormLabel>Program</FormLabel>
                <Input
                  className={classes.input}
                  type="text"
                  ref={Program}
                  required
                ></Input>
                <FormLabel>Department</FormLabel>
                <Input
                  className={classes.input}
                  type="text"
                  ref={Department}
                  required
                ></Input>
                <FormLabel>Year Of Joining (TURS)</FormLabel>
                <Input
                  className={classes.input}
                  type="text"
                  ref={YearOfJoining}
                  required
                ></Input>
                <FormLabel>Address</FormLabel>
                <Input
                  className={classes.input}
                  type="text"
                  ref={Address}
                  required
                ></Input>
                <FormLabel>Field Of Interest</FormLabel>
                <Input
                  className={classes.input}
                  type="text"
                  ref={FieldOfInterest}
                  required
                ></Input>
                <FormLabel>Remarks (if any)</FormLabel>
                <Input
                  className={classes.input}
                  type="text"
                  ref={Remarks}
                ></Input>
                <FormLabel>Payment Reference No.</FormLabel>
                <Input
                  className={classes.input}
                  type="text"
                  ref={PaymentReferenceNo}
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
            </form>
          </VStack>
        </motion.div>
      </Box>
    </>
  );
};

export default RegistrationForm;
