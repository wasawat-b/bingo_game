import videoBackgound from "../video/disco_-_25001 (Original).mp4";

const VideoBackgroundPage = () => {
  return (
    <div>
      <video id="video-background" autoPlay loop muted>
        <source src={videoBackgound} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackgroundPage;