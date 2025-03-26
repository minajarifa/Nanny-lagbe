import useParentsBids from "../../../Hooks/useParentsBids/useParentsBids"


export default function ParentsBids() {
    const myBides = useParentsBids();
    console.log(myBides)
    return (
        <div>
            {
                myBides?.map(myBide => <div key={myBide._id}>
                    <p className="font-bold text-9xl">{myBide?.role}</p>
                </div>)
            }
        </div>
    )
}
