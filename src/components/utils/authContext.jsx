import {useContext, useState, useEffect, createContext} from 'react'
import { useNavigate } from "react-router-dom"
import { auth, db } from "../../config/firebase"
import { doc, setDoc, getDoc, onSnapshot } from  "firebase/firestore"
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendSignInLinkToEmail,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut
} from "firebase/auth"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        checkUserStatus()
    }, [])

    const createAccount = async (userInfo, close) => {
        setLoading(true)
        if (userInfo.email && userInfo.password !== "") {
            try {
                await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password).then((cred) => {
                    setDoc(doc(db, "users", cred.user.uid), {
                        username: userInfo.email,
                        display_name: userInfo.email,
                        posts: [],
                        featured_posts: [],
                        drafts: [],
                        saved_posts: [],
                        verified_email: false,
                        user_bio: "",
                        followed_topics: [],
                        profession: "",
                        location: "",
                        number_of_followers: 0,
                        number_of_posts: 0,
                    })
                    setUser(cred.user)
                    close()
                })
                navigate("/profile")
            }
            catch (error) {
                console.log("sign up error: ", error)
            }
        }
        setLoading(false)
    }

    const loginToAccount = async(userInfo, close) => {
        setLoading(true)
        console.log(userInfo)
        try {
            await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password).then((cred) => {

            })
            setUser(cred.user)
            close()
        }
        catch(error) {
            console.log("login error: ", error)
        }
        setLoading(false)

    }

    const logoutUser = () => {
        signOut(auth).then(()=> {
            console.log("sign out successful")
        })
        setUser(null)
    }

    const sendForgotPasswordEmail = () => {
        sendPasswordResetEmail()
    }

    const checkUserStatus = () => {
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                }
                else {
                    console.log("error")
                    return false;
                }
            })
        }
        catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const contextData = {
        user,
        createAccount,
        loginToAccount,
        logoutUser,
        sendForgotPasswordEmail,
        checkUserStatus
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? children : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext;