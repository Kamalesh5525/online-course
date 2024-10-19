

import PropTypes from 'prop-types';

const LessonPlayer = ({ lesson }) => (
  <div>
    <h1>{lesson.title}</h1>
    <video controls>
      <source src={lesson.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>{lesson.content}</p>
  </div>
);

LessonPlayer.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default LessonPlayer;
