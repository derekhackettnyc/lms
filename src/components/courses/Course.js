import React from 'react'
import { Link } from 'react-router-dom'
import courses from '../../apis/courses'

const Course = ({ course }) => {

    return (
        <Link to={`/${course.catagories[0]}/${course.catagories[1]}/${course.catagories[2]}/${course.id}`} key={course.id}>
            <li className="course" >
                <div className="course__picture">
                    <img src={course.image_480x270} alt={course.url} />
                </div>
                <div className="course__main">
                    <h2 className="course__title">{course.title}</h2>
                    <p className="course__headline" dangerouslySetInnerHTML={{ __html: course.headline }} />
                    <p>{course.visible_instructors[0].display_name}</p>
                    <p>{course.rating.toFixed(1)} <i className="fas fa-star" style={{ color: 'orange' }}></i> | {course.num_reviews} (reviews)</p>
                    <p>{`${course.content_info} | ${course.num_published_lectures} | ${course.instructional_level_simple}`}</p>
                </div>
                <div className="course__price">
                    {`$${Math.floor(Math.random() * (170 - 120 + 1) + 120)}.99`}
                </div>
            </li>
        </Link>

    )

}

export default Course