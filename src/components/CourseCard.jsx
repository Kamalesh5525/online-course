

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="card" style={{ backgroundColor: course.color, color: '#fff' }}>
      <div className="card-body text-center">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <Link to={`/courses/${course.id}`} className="btn btn-light">View Details</Link>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;
