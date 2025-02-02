import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"


export default function useAuth() {
    const all= useContext(AuthContext)
  return all
}
