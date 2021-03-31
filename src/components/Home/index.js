import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <Fragment>

            <section className="home">
                <h1 className="main-heading">
                    <span className="main-heading--main moveInLeft">LMS</span>
                    <span className="main-heading--sub moveInRight">Using Technology to Enhance Learning</span>
                </h1>
            </section>

            <div className="banner banner--default">
                <h2>Get personal learning recommendations</h2>
                <h3>Answer a few questions for your top picks</h3>
                <button className="fadeIn outline" style={{ marginTop: '2rem' }}>Get Started</button>
            </div>

            <section className="section blog">
                <h2 className="blog-heading">Top Categories</h2>

                <div className="catagory-card">
                    <div className="catagory-card__header">
                        <div>
                            <img src="/assets/images/medical.jpeg" alt="medical" />
                        </div>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">Medicine and Health</h3>
                        <p>
                            <span>3,689 students</span>
                        </p>
                        <p className="catagory-card__blurb">
                            This is one area we should all be interested in. Medical treatment is changing all
                            the time. Researchers are finding ways to keep us alive much longer than previous
                            generations.
                        </p>
                    </div>
                </div>
                <div className="catagory-card">
                    <div className="catagory-card__header">
                        <div>
                            <img src="/assets/images/design.png" alt="design" />
                        </div>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">Design</h3>
                        <p>
                            <span>67,159 students</span>
                        </p>
                        <p className="catagory-card__blurb">
                            Our graphic design courses can prepare you for a wide range of careers, from video game design to marketing. Whether you want to learn a new design software like Affinity Designer, improve your drawing skills, or start your own design business
                        </p>
                    </div>
                </div>
                <div className="catagory-card">
                    <div className="catagory-card__header">
                        <div>
                            <img src="/assets/images/cryptocurrency.jpeg" alt="cryptocurrency" />
                        </div>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">Cryptocurrency</h3>
                        <p>
                            <span>1,209 students</span>
                        </p>
                        <p className="catagory-card__blurb">
                            Whether you need an introduction to the basics of blockchain and cryptocurrency trading, or a more advanced primer on currencies like Bitcoin, Ethereum, or Altcoin
                        </p>
                    </div>
                </div>


                <div className="catagory-card">
                    <div className="catagory-card__header">
                        <div>
                            <img src="/assets/images/marketing.jpeg" alt="Golden Meadow" />
                        </div>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">Digital Marketing</h3>
                        <p>
                            <span>56,052 students</span>
                        </p>
                        <p className="catagory-card__blurb">
                            Understanding online marketing channels can feel almost as overwhelming as being on the receiving end of digital marketing campaigns.
                        </p>
                    </div>
                </div>

                <div className="catagory-card">
                    <div className="catagory-card__header bg--pink">
                        <div>
                            <img src="/assets/images/photography.jpeg" alt="Golden Meadow" />
                        </div>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">photography</h3>
                        <p>
                            <span>977,342 students</span>
                        </p>
                        <p className="catagory-card__blurb">
                            We offers a comprehensive selection of photography courses for pros and beginners alike. Whether you’re interested in camera tutorials, nature and landscape photography, starting your own wedding photo business, or taking the perfect shot regardless of the subject, we have a course for you.
                        </p>
                    </div>
                </div>

                <div className="catagory-card">
                    <div className="catagory-card__header">
                        <div>
                            <img src="/assets/images/communication.jpeg" alt="Communications" />
                        </div>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">Communications</h3>
                        <p>
                            <span>2,559 students</span>
                        </p>
                        <p className="catagory-card__blurb">
                            provide the specialized skills and knowledge necessary for individuals to advance in their career by learning the techniques and strategies for communicating effectively, whether for negotiation, or media purposes.
                        </p>
                    </div>
                </div>

                <Link to='/search/development'>
                <div className="catagory-card catagory-card--active">
                    <div className="catagory-card__header bg--skyblue">
                        <div>
                            <img src="/assets/images/Web-Developer-Skills.jpeg" alt="Gourmet Cupcakes" />
                        </div>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">Development</h3>
                        <p>
                            <span>8,659,829 students</span>
                        </p>
                        <p className="catagory-card__blurb">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies ut nibh nec cursus. Curabitur porttitor nibh a tellus egestas, sit amet interdum nisl imperdiet. Fusce imperdiet diam odio, ut viverra metus fringilla vel. Nulla aliquam porttitor libero. Cras...
                        </p>
                    </div>
                </div>
                </Link>

                <div className="catagory-card">
                    <div className="catagory-card__header bg--wine">
                        <p className="catagory-card__paragraph" style={{ textAlign: 'center' }}>
                            <i className="fas fa-question-circle fa-6x"></i>
                        </p>
                    </div>
                    <div className="catagory-card__content">
                        <h3 className="catagory-card__title">Not sure?</h3>

                        <p className="catagory-card__blurb">
                            All courses have a 30-day money-back guarantee
                        </p>
                    </div>
                </div>

            </section>


            <section className="section banner banner--timer moveInLeft">
                <p className="paragraph paragraph--50">
                    Enjoy a hefty 50% discount on all courses for a limited time. This opportunity comes once in a year.
                </p>
            </section>

            <section className="section newsletter">

                <div className="newsletter__blurb">
                    <h3 className="write-up__title">Join Our Newsletter</h3>
                    <p className="write-up__scoop">
                        Curabitur aliquam justo ex, ac varius sem facilisis a. In vel felis eros. Fusce ipsum enim, ultrices at ante sollicitudin, faucibus hendrerit nunc. Nullam tempor nulla eu imperdiet interdum. Mauris euismod mattis consectetur.
                    </p>
                </div>

                <div className="newsletter__form">
                    <form className="basic-form" action="">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <input type="text" id="lname" name="lastname" placeholder="Your email.." />
                        <div className="basic-form__submit">
                            <button className="basic-form__button outline-grey" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </section>


        </Fragment>


    )

}

export default Home