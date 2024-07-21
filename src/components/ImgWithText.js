function ImgWithText({ src, text, isWide }) {
  return (
    <div
      className={`flex flex-col items-center text-lg self-center my-12 ${
        isWide ? "lg:w-3/5 w-4/5" : "w-96"
      }`}
    >
      <img src={src} alt={text} />
      <span>{text}</span>
    </div>
  )
}
export default ImgWithText
