import { Link } from "react-router-dom"
import raichi from "../assets/raichi.jpg"

function Home() {
  return (
    <div className="pb-36 pt-4 bg-yellow-50 dark:bg-black dark:text-yellow-50  justify-center flex lg:text-xl text-lg">
      <main className="text-center lg:w-3/5 w-4/5">
        <section id="introduction" className="mt-64 mb-72">
          <p>
            Hi! In this website, I write about obscure and region locked
            fictional works including manga, anime and books.
          </p>
        </section>
        <section id="articles" className="flex justify-center">
          <div
            id="litchi-hikari-club"
            className="flex flex-row w-full justify-center"
          >
            <img
              src={raichi}
              className="lg:h-96 h-56 lg:mr-32 mr-4"
              alt="litchi hikari club poster"
            />
            <div className="">
              <header className="lg:text-2xl lg:mb-16 mb-4 lg:mt-12">
                History of Litchi Hikari Club
              </header>
              <p className="text-left">
                Litchi Hikari Club is a unique work of art which has found its
                place in various forms of art such as theater plays, musicals,
                movies, manga and anime. In this article, I talk about its
                origin, history, works that have influenced it and the works it
                has influenced.
              </p>
              <Link
                to="/litchi-hikari-club"
                className="absolute lg:right-80 right-20 lg:mt-12 mt-4"
              >
                <p className="font-bold border-2 rounded-md border-black dark:border-yellow-50 h-8 w-20 flex items-center justify-center text-base">
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
