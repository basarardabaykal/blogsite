import { Link } from "react-router-dom"
import Video from "../components/Video"
import ImgWithText from "../components/ImgWithText"
import maruo from "../assets/maruo.png"
import paranoiaStar from "../assets/paraniostar.jpg"
import actors from "../assets/actors.png"
import play1986 from "../assets/1986.jpg"
import litchiManga from "../assets/litchimanga.jpg"
import Comments from "../components/Comments"

function Litchi() {
  return (
    <div className="items-center flex-col bg-yellow-50 dark:bg-black dark:text-yellow-50 flex justify-center lg:text-xl text-lg">
      <main className="flex flex-col justify-center text-center pb-36 lg:w-3/5 w-4/5">
        <div id="introduction" className="flex flex-col justify-center text-center self-center ">
          <header className="text-3xl mt-32 mb-20">Litchi Hikari Club</header>
          <p className="text-left">
            Litchi Hikari Club is a unique work of art which has found its place in various forms of art such as theater plays, musicals, movies,
            manga and anime. It is very popular in Japan but unfortunetely it is region-locked and not many people know about it in the West. Any
            interviews and other information sources are also either in Japanese, or they are scattered around the internet. Therefore it is difficult
            to gather knowledge about it. In this article, I will gather all my findings and explain the roots of this work.
          </p>
        </div>
        <div id="1985" className="flex flex-col justify-center text-center self-center w-full">
          <header className="text-2xl lg:mt-24 mt-20 lg:mb-16 mb-12">1985 Opening Act (Mercuro)</header>
          <p className="text-left mb-8">
            First, let's take a look at the first time ever when Litchi Hikari Club appeared on stage (no pun intended :D). The date goes back to
            09.06.1985, when Tokyo Grand Guignol Theater Troupe performed an opening act named "Mercuro". The short act was not about Litchi Hikari
            Club but the actors wore the same uniforms that will later be used in the actual play. In this act, The man appearing from inside the
            patient wearing light green is the director and creator of the series: Norimizu Ameya, who also played the role of "Jaibo" in the main
            play. There is also one more important name in the cast: Suehiro Maruo who is a legendary underground eroguro manga creator. He was close
            friends with Norimizu Ameya and his works were the main inspiration for Litchi Hikari Club. He plays as the assistant doctor wearing green
            in the opening act. The opening act is fully available on youtube, you can watch it down below.
          </p>
          <Video videoURL={"https://www.youtube.com/embed/o9mwxdCXMdc"} title={"1985 play"}></Video>
          <div className="flex flex-row justify-center">
            <ImgWithText src={maruo} text="Suehiro Maruo"></ImgWithText>
            <ImgWithText src={paranoiaStar} text="Paranoia Star, one of Maruo's famous works."></ImgWithText>
          </div>
          <ImgWithText src={actors} text="Norimizu in the middle, Maruo on the right" isWide={true}></ImgWithText>
        </div>
        <div id="1986" className="flex flex-col justify-center text-center self-center">
          <header className="text-2xl lg:mt-24 mt-16 mb-16">1986 Theater Play</header>
          <p className="text-left mb-8">
            After one year, Tokyo Grand Guignol Theater Troupe performed their main play, Litchi Hikari Club. This play was not recorded and all the
            information we can get is from an interview of the Tsunekawa Hiroyuki, the actor of Zera. In this interview he comfirms that there are no
            full recordings of the play. However, he also claims that there is a full audio recording of the play that only he posseses. He also
            mentions how he is not found of Hikari Club being mainstream but I will talk about that later. You can read the full interview and some
            photos from the play{" "}
            <a className="underline font-bold" href="https://denpaarchive.neocities.org/litchi" target="_blank">
              here
            </a>
            .
          </p>
          <ImgWithText src={play1986} text="a photo from the 1986 play" isWide={true}></ImgWithText>
        </div>
        <div id="manga" className="flex flex-col justify-center text-center self-center ">
          <header className="text-2xl lg:mt-24 mt-16 mb-16">Manga Adaptations</header>
          <p className="text-left mb-8">
            Furuya Usamaru adapted the series into a two-volume manga with the name "Litchi Hikari Club", publishing from 2005 to 2006 and later a
            single-volume prequel named "Bokura no Hikari Club", published through 2011 to 2012. These two works are essentially the ones that made
            this saga mainstream in Japan and various adaptations followed afterwards. In the interview I mentioned previously, actor of Zera in the
            original play criticizes Furuya Usamaru, saying that he should have followed a narrative different than the original play. He also claims
            that Norimizu Ameya also requested the same. The manga follows the original story with slight differences. However, the ending is
            different and the prequel is also an original idea.
          </p>
          <ImgWithText src={litchiManga} text="A page from the manga, depicting the robotic heart of Litchi" isWide={true}></ImgWithText>
        </div>
        <div id="others" className="flex flex-col justify-center text-center self-center ">
          <header className="text-2xl lg:mt-24 mt-16 mb-16">Other Adaptations</header>
          <p className="text-left mb-8">
            After the manga adaptation's huge success, the series got very popular. Many adaptations in various forms were made. They are listed
            below.
          </p>
          <ul className="flex flex-col text-left">
            <li className="list-disc mb-8">
              Music: A concept band was formed named "Litchi Hikari Club" was formed. The vocalist of this band later produced the music in the anime.
            </li>
            <li className="list-disc mb-8">Anime: An 8 episode comedy anime named "Litchi DE Hikari Club" was released in 2012.</li>
            <li className="list-disc mb-8">
              Three stage plays were performed in the years 2012, 2013 and 2015. The third was a musical. You can watch the first and third plays{" "}
              <a href="https://drive.google.com/drive/folders/1BNwt9gCLmnEU5DpiPfAn8KMSweVQBhs9" target="_blank" className="font-bold underline">
                here
              </a>
              .
            </li>
            <li className="list-disc mb-8">A live-action movie was released in 2016.</li>
          </ul>
          <Video videoURL={"https://www.youtube.com/embed/932vO_Cyt9w"} title={"Trailer of the 2016 movie"}></Video>
        </div>
        <div id="conclusion" className="flex flex-col justify-center text-center self-center mt-20">
          <p className="text-left mb-8">
            And that is all to cover about this series. I hope you enjoyed the read and if I missed anything or any of the links are not working, feel
            free to{" "}
            <Link to="/contact" className="font-bold underline">
              contact me
            </Link>
            .
          </p>
        </div>
      </main>
      <Comments articleId="Litchi"></Comments>
    </div>
  )
}

export default Litchi
