import React, { Component } from "react"
import Slider from "react-slick"

export default class SlickSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <Slider {...settings}>
        {this.props.slides.map((course) => (
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
          </div>
        ))}
      </Slider>
    )
  }
}