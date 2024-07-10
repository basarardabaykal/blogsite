function Video({ videoURL }) {
  return (
    <div>
      <iframe
        src={videoURL}
        title="sdsd"
        className="w-4/5 h-96"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}
export default Video
