import React from 'react'
import coursesAPI from '../../apis/courses'
import Course from './Course'
import SlickSlider from '../ui/SlickSlider'

// Fetch and displays the course based on id
// example /development/web/react/1362070

const CourseDetails = (props) => {

    const { id } = props.match.params;

    const [course, setCourse] = React.useState(null)
    const [otherCourses, setOtherCourses] = React.useState([])
    const [sliderCourses, setSliderCourses] = React.useState([])

    React.useEffect(() => {
        (async () => {

            const responseOne = await coursesAPI.get(`/courses/${id}`)
            const responseMany = await coursesAPI.get(`/courses/`)

            setCourse(responseOne.data)
            // Get a list of courses that have same topic as one user is currently viewing
            setOtherCourses(responseMany.data.filter(course => course.catagories[2] === responseOne.data.catagories[2]))
            setSliderCourses(responseMany.data.filter(course => course.catagories[0] === responseOne.data.catagories[0]))


        })()
    }, [])



    if (!course) return null

    return (
        <>
            <div className="course-details" key={course.id}>
                <div className="course-details__picture">
                    <img src={course.image_480x270} alt={course.url} />
                </div>
                <div className="course-details__main">
                    <h2 className="course-details__title">{course.title}</h2>
                    <p className="course-details__headline" dangerouslySetInnerHTML={{ __html: course.headline }} />
                    <p>created by <span style={{ color: '#0073cf' }}>{course.visible_instructors[0].display_name}</span></p>
                    <p>{course.rating.toFixed(1)} <i className="fas fa-star" style={{ color: 'orange' }}></i> | {course.num_reviews} (reviews)</p>
                    <p>{course.num_subscribers} students</p>
                    <p>{course.content_info} | {course.num_published_lectures} <i className="fas fa-video"></i> | {course.instructional_level_simple}</p>
                    <p style={{ backgroundColor: '#FCD900', padding: course.badges[0] ? '1rem' : 'none', textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>{course.badges[0] && course.badges[0].badge_text}</p>
                </div>
                <div className="course-details__price-container">
                    <div className="course-details__price">
                        ${Math.floor(Math.random() * (170 - 120 + 1) + 120)}.99
                </div>
                    <button>Add to Cart</button>
                    <div className="course-details__money-back">30-Day Money-Back Guarantee</div>
                </div>
                <div className="course-details__objectives">
                    <h2>Course Objectives</h2>
                    <ul className="spotlights">
                        {
                            course.objectives_summary.map((objective, i) => (
                                <li className="spotlight" key={`objective-${i}`}>

                                    <i className="fas fa-check-circle fa-2x spotlight__icon"></i>
                                    <div className="spotlight__blurb-box">
                                        <p className="spotlight__text">{objective}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
    
            <section>
                <h2 className="section__heading ">Students also bought</h2>
                <ul className="courses" style={{ padding: "6rem" }}>
                    {
                        otherCourses.filter(other => other.id !== course.id) // remove the orginal from list
                            .slice(0, 5) // limit to 5
                            .map(course => <Course course={course} key={course.id} />) // display the courses
                    }
                </ul>
                <div style={{padding:'6rem'}}>
                    <h2 className="section__heading ">Similar Best Seller Courses over 4.5 <i className="fas fa-star" style={{ color: 'orange' }}></i> </h2>
                    <SlickSlider slides={sliderCourses.filter(slide => 
                        slide.badges[0] && slide.badges[0].badge_family === "bestseller" && slide.rating > 4.6
).slice(0,8)} />
                </div>
            </section>

        </>
    )
}

export default CourseDetails