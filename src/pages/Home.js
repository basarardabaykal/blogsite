import { Link } from "react-router-dom"
import raichi from "../assets/raichi.jpg"

function Home() {
  return (
    <div className="pb-20 pt-4 bg-yellow-50">
      <main className="text-center ">
        <section id="introduction" className="text-xl mt-64 mb-72">
          <p>
            Hi! In this website, I write about obscure and region locked
            fictional works including manga, anime and books.
          </p>
        </section>
        <section id="articles" className="flex justify-center">
          <div className="flex flex-row w-max justify-center">
            <img
              src={raichi}
              className="h-96 mr-32"
              alt="litchi hikari club poster"
            />
            <div className="w-3/5">
              <header className="text-2xl mb-16 mt-12">
                History of Litchi Hikari Club
              </header>
              <p className="text-xl">
                Litchi Hikari Club is a unique work of art which has found its
                place in various forms of art such as theater plays, musicals,
                movies, manga and anime. In this article, I talk about its
                origin, history, works that have influenced it and the works it
                has influenced.
              </p>
              <Link
                to="/litchi-hikari-club"
                className="absolute right-80 mt-12"
              >
                <p className="font-bold border-2 rounded-md border-black h-8 w-20 flex items-center justify-center">
                  Read
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Home
