// "use client";
// import { toastSuccess, toastError } from "../helpers/Toastify";
// import { useRouter } from "next/navigation";
// import { createContext, useState, useContext, useEffect } from "react";
// // import { auth } from "../auth/firebase";
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";

// export const AuthContext = createContext();

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };
// const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(false);
//   const router = useRouter();

//   // useEffect(() => {
//   //   userObserver();
//   // }, []);

//   const createUser = async (email, password, displayName) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(auth.currentUser, {
//         displayName: displayName,
//       });
//       toastSuccess("Registration is Successful!");
//       router.push("/");
//     } catch (error) {
//       toastError(error.message);
//     }
//   };

//   const signIn = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toastSuccess("Login is Successful!");
//       router.push("/");
//     } catch (error) {
//       toastError(error.message);
//     }
//   };
//   const logout = async () => {
//     signOut(auth);
//     toastSuccess("Logout is Successful!");
//     router.push("");
//   };
//   // const userObserver = () => {
//   //   onAuthStateChanged(auth, (currentUser) => {
//   //     if (currentUser) {
//   //       const { email, displayName, photoURL } = currentUser;
//   //       setCurrentUser({ email, displayName, photoURL });
//   //       sessionStorage.setItem(
//   //         "user",
//   //         JSON.stringify({ email, displayName, photoURL })
//   //       );
//   //     } else {
//   //       setCurrentUser(false);
//   //       sessionStorage.clear();
//   //     }
//   //   });
//   // };
//   const signUpProvider = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result);
//         toastSuccessNotify("Logged in successfully!");
//         router.push("/profile");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const values = {
//     currentUser,
//     createUser,
//     signIn,
//     logout,
//     signUpProvider,
//   };
//   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
// };
// export default AuthContextProvider;
