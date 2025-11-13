import { RouterProvider } from "react-router"
import { router } from "./router/router"
import { Context } from "./context/AuthContext"
import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase/firebase";



function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  async function createEmail(email, password, name, photoURL) {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;



      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });


      return user;

    } catch (err) {
      console.log(err)
    }
  }

  function signInEmail(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      console.log(CurrentUser)
      setUser(CurrentUser)
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])



  const data = {
    user,
    createEmail,
    signInEmail,
    loading


  }







  return (
    <Context value={data}>
      <RouterProvider router={router}> </RouterProvider>
    </Context>
  )
}

export default App
