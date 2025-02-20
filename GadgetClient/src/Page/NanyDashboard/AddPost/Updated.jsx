import useAuth from "../../../Hooks/useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Updated() {
    const [post, setPost] = useState([])
    const { id } = useParams();
    const { user } = useAuth();
    useEffect(() => {
        getData()
    }, [id])
    const getData = async () => {
        const data = await axios(`${import.meta.env.VITE_API_URL}/nanny/${id}`)
        setPost(data.data)
    }
    const handleUpdatedSubmit = async (event) => {
        event.preventDefault()
        const form = event.target;
        const name = user.displayName
        const email = user.email
        const photoURL = user.photoURL
        const education = form.education.value;
        const age = form.age.value;
        const location = form.location.value;
        const experience = form.experience.value;
        const skills = form.skills.value;
        const phoneNoumber = form.phoneNoumber.value;
        const languages = form.languages.value;
        const duty = form.duty.value;
        const postInfo = { education, age, location, experience, skills, phoneNoumber, languages, duty ,name,email,photoURL};
        console.log(postInfo)
        try {
            const data = await axios.put(`${import.meta.env.VITE_API_URL}/nannyCollection/${post._id}`,postInfo)
            if(data.data.acknowledged===true){
                 Swal.fire("Posted successfully");
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1 className="ml-20 text-3xl text-center">Updated a post</h1>
            <div className="w-full hero-content">
                <div className="w-full bg-purple-200 shadow-2xl card shrink-0">
                    <form onSubmit={handleUpdatedSubmit} className="w-full card-body">
                        <div className="grid gap-5 lg:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input type="text" name="education" placeholder="education" className="input input-bordered" defaultValue={post.education} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input type="text" name="age" defaultValue={post.age} placeholder="Your Age" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">location</span>
                                </label>
                                <input type="text" name="location" defaultValue={post.location} placeholder="location" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">experience</span>
                                </label>
                                <select name="experience" value={post.experience} type="text" placeholder="experience" className="input input-bordered">
                                    <option value="">experience</option>
                                    <option value="6 Month">6 Month</option>
                                    <option value="1 years">1 years</option>
                                    <option value="2 years">2 years</option>
                                    <option value="3 years">3 years</option>
                                    <option value="4 years">4 years</option>
                                    <option value="5 years">5 years</option>
                                    <option value="6 years">6 years</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Skills</span>
                                </label>
                                <select name="skills" value={post.skills} type="text" placeholder="Skills" className="input input-bordered">
                                    <option value="">Skills</option>
                                    <option value="Arts & Crafts">Arts & Crafts</option>
                                    <option value="Outdoor Activities">Outdoor Activities</option>
                                    <option value="Cooking">Cooking</option>
                                    <option value="Newborn Care">Newborn Care</option>
                                    <option value="Twins Care">Twins Care</option>
                                    <option value="Sleep Training">Sleep Training</option>
                                    <option value="Light Housekeeping">Light Housekeeping</option>
                                    <option value="Infant Care">Infant Care</option>
                                </select>                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">contact</span>
                                </label>
                                <input name="phoneNoumber" type="number" defaultValue={post.phoneNoumber} placeholder="Phone Number" className="input input-bordered" />                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">languages</span>
                                </label>
                                <input type="text" name="languages" defaultValue={post.languages} placeholder="languages" className="input input-bordered" />                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">duty</span>
                                </label>
                                <input type="text" name="duty" defaultValue={post.duty} placeholder="dyty time" className="input input-bordered" required />                            </div>
                        </div>
                        <div className="mt-6 form-control">
                            <button className="bg-purple-400 btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
