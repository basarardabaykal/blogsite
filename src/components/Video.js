function Video({ videoURL, title }) {
  return (
    <div className="flex flex-col justify-center my-12">
      <iframe
        src={videoURL}
        title={title}
        className="w-4/5 h-96 self-center"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <span>{title}</span>
    </div>
  )
}
export default Video
