import Navbar from "../components/Navbar"
import Video from "../components/Video"

function Article() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="flex flex-col justify-center text-center">
        <header className="text-2xl mt-32 mb-24">Litchi Hikari Club</header>
        <div className="text-left text-xl self-center w-3/5">
          <p>
            Litchi Hikari Club is a unique work of art which has found its place
            in various forms of art such as theater plays, musicals, movies,
            manga and anime. It is very popular in Japan but unfortunetely it is
            region-locked and not many people know about it in the West. Any
            interviews and other information sources are also either in
            Japanese, or they are scattered around the internet. Therefore it is
            difficult to gather knowledge about it. In this article, I will
            gather all my findings and explain the roots of this work. First,
            let's take a look at the first time ever when Litchi Hikari Club
            appeared on stage (no pun intended :D). The date goes back to
            09.06.1985, when Tokyo Grand Guignol Theater Troupe performed an
            opening act for other troupes. The short act was not about Litchi
            Hikari Club but the actors wore the same uniforms that will later be
            used in the actual play. In this act, The patient is the director
            and creator of the series: Norimizu Ameya, who also played the role
            of "Jaibo" in the main play. There is also one more important name
            in the cast: Suehiro Maruo who is a legendary underground eroguro
            manga creator. He was close friends with Norimizu Ameya and his
            works were the main inspiration for Litchi Hikari Club. He plays as
            the assistant doctor wearing green in the opening act. The opening
            act is fully available on youtube, you can watch it down below.
          </p>
          <Video videoURL={"https://www.youtube.com/embed/o9mwxdCXMdc"}></Video>
        </div>
      </main>
    </div>
  )
}

export default Article
