import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Machine Learning Engineer at <a href={'https://tap30.ir/'}>Tap30 </a><span>2018-present</span></h2>

                        At tap30 we face several challenging and amazing problems every day. I am proud to be a <b>senior member of Tap30 AI team</b>.
                        In our very first project we built the <b>first ride sharing service in Iran</b>. We designed state of the art <b>spatio-temporal models </b>
                        to calculate the probability of finding a trip companion for ride sharing service. Moreover, we have built a <b>dynamic price
                        calculation service based on supply and demand</b> to keep a <b>steady fulfillment rate</b> in our service. We've also created
                        a powerful <b>ETA calculation service</b> _Estimated Time of Arrival_ service on top of <a href={'http://project-osrm.org/'}>OSRM</a>.

                      </div>
                    </div>

                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Viratech Co. <span>2016-2017</span></h2>
                        <p>I was a backend developer at Viratech. We <b>designed and implemented enterprise organizational applications in Java. </b>
                          I have worked on two projects there: Organizational <b>Email Management System</b> and <b>Online Organizational Storage</b> system.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>BSc. in Computer Engineering at Tehran University <span>2014-2018</span></h2>
                        <p>I have finished my under-graduation at Tehran University in Computer Engineering. During these four years I've been <b>teacher assistant </b>
                          for courses such as <b>Advance Programming (Focused on teaching fundamentals of programming in C++), Data Structures, Design and Analysis of Algorithms</b>.
                          I also have participated in some of graduate courses such as <b>Neural Networks, Introduction to Machine Learning,
                          Graph theory and Deep Learning</b> to enhance my knowledge of machine learning.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
