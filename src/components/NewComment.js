import React, { useEffect, useState } from "react"
import { Send } from "lucide-react"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default function NewComment({ articleId }) {
  const [text, setText] = useState("")
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      alert("You must be logged in to submit a comment.")
      return
    }
    if (text.trim()) {
      await addDoc(collection(db, "comments"), {
        email: user.email,
        text: text,
        articleId: articleId,
        date: new Date(),
      })
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 shadow-md rounded-xl lg:w-[800px] w-[300px] self-center ">
      <div>
        <textarea
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="p-4 bg-yellow-50 mt-1 block w-full rounded-md border-gray-300 border-[1px] focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          placeholder="Write your comment here..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        Submit
        <Send className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}
