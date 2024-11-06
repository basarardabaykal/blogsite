import NewComment from "../components/NewComment"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore"

export default function Comments({ articleId }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const q = query(collection(db, "comments"), where("articleId", "==", articleId), orderBy("date", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), date: doc.data().date.toDate() })))
    })
    return unsubscribe
  }, [articleId])

  return (
    <div className="self-center text-center flex flex-col justify-center mb-2 text-black bg-yellow-50 rounded-md p-8">
      <h1 className=" mb-12 text-2xl">Comments</h1>
      <NewComment articleId={articleId}></NewComment>
      {comments.map((comment) => (
        <div key={comment.id} className="shadow-md rounded-xl py-12 w-full min-h-[100px] mt-12 bg-yellow-50">
          <section className="flex flex-row mb-8 text-sm">
            <p className="ml-8">{comment.email}</p>
            <p className="mx-4">|</p>
            <p className="mr-8">{comment.date.toLocaleString()}</p>
          </section>
          <p className="text-left px-8 text-xl">{comment.text}</p>
        </div>
      ))}
    </div>
  )
}
