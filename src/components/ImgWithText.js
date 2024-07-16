function ImgWithText({ src, text, isWide }) {
  return (
    <div
      className={`flex flex-col items-center text-lg self-center my-12 ${
        isWide ? "w-3/4" : "w-96"
      }`}
    >
      <img src={src} alt={text} />
      <span>{text}</span>
    </div>
  )
}
export default ImgWithText
