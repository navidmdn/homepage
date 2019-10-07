import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>My name is Navid Madani. I have received my BSc. in computer engineering at the <a href={'https://ece.ut.ac.ir/en'}> Department of Electrical and Computer Engineering,
                        University of Tehran </a>. <br></br>Currently I am a senior machine learning engineer and data
                        scientist at <a href={'https://tap30.ir'}> Tap30 Co</a>  (online taxi fleet application like <b>Uber</b>) where we develop state of the art
                        solutions to online taxi fleet problems such as <b>supply/demand prediction, ETA estimation, ride sharing, dynamic pricing and smart taxi dispatch algorithms</b>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bar-graph" />
                </span>
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>I have over 3 years of experience building machine learning models that interacts with real world problems and I've been using <b>python, R,
                        Pytorch, Tensorflow, Keras, Spark</b> most frequently And have experience building <b>spatio-temporal models from design to implementation and deployment</b></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-chart-pie" />
                </span>
                <div className="desc">
                    <h3>Data Structures, Algorithms and Statistics</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of data structures and algorithms and I've been
                         <b> Teacher Assistant</b> in these two courses.
                    Also as a result of my passion for ML I've studied statistics and mathematics deeper and find it as the building blocks of this field.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Science</h3>
                    <p>I have experience working with <b>big data</b> and building automated <b>ETL pipelines</b> that and building
                        <b> ML models and visualization dashboards</b> on top of them to get useful insight out data. As a result, I've worked
                        with <b>Spark, Hadoop, HDFS file system, SQL, Postgres, MongoDB and Redis</b>
                    </p>
                </div>
                </div>
            </div>


            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
