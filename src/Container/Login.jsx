import { Button, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";

import MusicBg from "../img/musicbg.jpg";
import { FcGoogle } from "react-icons/fc";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  query,
} from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const firebaseDb = getFirestore(firebaseApp);
  const db = firebaseDb;
  const navigate = useNavigate();

  const login = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    try {
      console.log("helo1", providerData[0]);
      const h = await addDoc(collection(firebaseDb, "/users"), providerData[0]);
      if (h) {
        console.log("helo", providerData);
        navigate("/");
      } else {
        alert("errror");
      }
    } catch (err) {
      alert("errror");
      console.log(err);
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      position={"relative"}
    >
      <Image src={MusicBg} objectFit="cover" width={"full"} height={"full"} />
      <Flex
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        bg={"blackAlpha.600"}
        top={0}
        left={0}
        justifyContent="center"
        alignItems={"center"}
      >
        <HStack>
          <Button
            leftIcon={<FcGoogle fontSize={25} />}
            colorScheme="whiteAlpha"
            shadow={"lg"}
            onClick={() => login()}
            color="#f1f1f1"
          >
            Signin with Google
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Login;
