import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars';
function toggleText() {
  var points = document.getElementById('points');

  var showMoreText = document.getElementById('moreText');

  var buttonText = document.getElementById('textButton');

  if (points.style.display === 'none') {
    showMoreText.style.display = 'none';

    points.style.display = 'inline';

    buttonText.innerHTML = 'Show More';
  } else {
    showMoreText.style.display = 'inline';

    points.style.display = 'none';

    buttonText.innerHTML = 'Show Less';
  }
}

function cousres() {
  const ratingchanged = (newrating) => {
    alert(newrating);
  };

  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Maine">
        <div className="one">
          <div className="Uni">
            {/* <h1>hello</h1> */}
            <Image
              src="/../public/mic.png"
              alt="NOT FOUND"
              height={300}
              width={200}
            />
          </div>
          <div className="title_uni">
            <div className="title_uni_size">
              Successful Negotiation: Essential
              <br /> Strategies and Skills
            </div>
            <div className="title_uni_sizE">
              <u>University of Michigan</u> via
              <a href="https://in.coursera.org/learn/negotiation-skills">
                <u> Coursera</u>
              </a>
            </div>
          </div>
          <div className="ratings">
            <ReactStars
              count={5}
              onChange={ratingchanged}
              size={50}
              color2={'#ffd700'}
            />
          </div>
          <div className="rev">
            <div className="ek">
              <button className="buttone glow-buutton">Add To List</button>
            </div>
            <div className="do">
              <button className="buttone glow-buutton">Write Review</button>
            </div>
            <div className="ten">
              {' '}
              <button className="buttone glow-buutton">Mark Complete</button>
            </div>
          </div>
          <span className="twos"></span>
        </div>
        <div className="two">
          <div className="video ">
            <iframe
              width="360"
              height="200"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <div className="play">
            <button className="buttonss glow-buttonss">Go to class!</button>
          </div>
          <br />
          <hr className="line" />
          <div className="texts">
            Coursera
            <br />
            <br />
            <hr className="linee" />
            Free Online Course(Audit)
            <br />
            <br />
            <hr className="linee" />
            English
            <br />
            <br />
            <hr className="linee" />
            Paid Certificate Available
            <br />
            <br />
            <hr className="linee" />
            7 weeks long, 17 hours worth of material
            <br />
            <br />
            <hr className="linee" />
            Arabic, French, Portuguese, Chinese, Italian,
            <br /> German, Russian, English, Spanish, Korean, Ukrainian
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="three">
        <div className="he">
          Overview
          <hr className="line" />
        </div>
        <div className="hes">
          Classs Central Tips
          <br />
          <br />
          <a href="https://in.coursera.org/">
            - Learn How to Sign up to Coursera courses for free
          </a>
          <br />
          <a href="https://in.coursera.org/">
            - 1600+ Coursera Courses That Are Still Completely Free
          </a>
          <hr className="line" />
        </div>
        <div className="Info">
          <p>
            We all negotiate on a daily basis. On a personal level, we negotiate
            with friends, family, landlords, car sellers and employers, among
            others. Negotiation is also the key to business success. No business
            can survive without profitable contracts. Within a company,
            negotiation skills can lead to your career advancement.
            {/* <span id="points">...</span>
            <span id="moreText"> */}
            <br /> <br />I hope that you will join the hundreds of thousands of
            learners who have made “Successful Negotiation” one of the most
            popular and highly-rated MOOCs worldwide. In the course, you’ll
            learn about and practice the four steps to a successful negotiation:{' '}
            <br />
            <br />
            (1) Prepare: Plan Your Negotiation Strategy <br /> <br />
            (2) Negotiate: Use Key Tactics for Success <br /> <br />
            (3) Close: Create a Contract <br /> <br />
            (4) Perform and Evaluate: The End Game <br /> <br />
            To successfully complete this course and improve your ability to
            negotiate, you’ll need to do the following: <br /> <br />
            (1) Watch the short videos (ranging from 5 to 20 minutes). The
            videos are interactive and they include questions to test your
            understanding of negotiation strategy and skills. You can speed up
            or slow down videos to match your preferred pace for listening.
            Depending on your schedule, you can watch the videos over a few
            weeks or you can binge watch them. A learner who binge-watched the
            course concluded that “It’s as good as Breaking Bad.” Another
            learner compared the course to “House of Cards.” Both shows contain
            interesting examples of complex negotiations! <br /> <br />
            (2) Test your negotiation skills by completing the negotiation in
            Module 6. You can negotiate with a local friend or use Discussions
            to find a partner from another part of the world. Your negotiation
            partner will give you feedback on your negotiation skills. To assist
            you with your negotiations, I have developed several free
            negotiating planning tools that are related to the course. These
            tools and a free app are available at http://negotiationplanner.com/{' '}
            <br /> <br />
            (3) Take the final exam. To successfully complete the course, you
            must answer 80% of the questions correctly. The exam is a Mastery
            Exam, which means that you can take it as many times as you want
            until you master the material. Course Certificate You have the
            option of earning
            <br /> <br />
            a Course Certificate. <br /> A Certificate provides formal
            recognition of your achievements in the course and includes the
            University of Michigan logo. Learn more about Certificates at:
            https://learner.coursera.help/hc/en-us/articles/209819053-Get-a-Course-Certificate
            <br /> <br />
            This course is also available in Spanish and Portuguese. To join the
            fully translated Spanish version, visit this page:
            https://www.coursera.org/learn/negociacion/ <br /> <br />
            To join the fully translated Portuguese version, visit this page:
            https://www.coursera.org/learn/negociacao Subtitles for the videos
            are available in English, Ukrainian, Chinese (Simplified),
            Portuguese (Brazilian), Spanish <br /> <br />
            Created by: University of Michigan The course logo composite is
            shared with a Creative Commons CC BY-SA
            (https://creativecommons.org/licenses/by-sa/2.0/) license, and was
            created using images provided courtesy of Flazingo Photos
            (http://bit.ly/1zOylRm) and K2 Space
            (https://www.flickr.com/photos/k2space/14257556613/in/set-72157644732478432).
            {/* </span> */}
          </p>
          {/* <button
            onclick="toggleText()"
            id="textButton"
            className="button glow-button"
          >
            Show More
          </button> */}
        </div>
      </div>
      <div className="Syllabus">
        <div className="he">Syllabus</div>
        <hr className="line" />
        <div className="hea">Welcome to Successful Negotiation!</div>
        <br />

        <div className="sub">
          Through this course youll learn and practice the strategies and skills
          that will help you become a successful negotiator in your personal
          life and business transactions. After completing this module, youll be
          able to state the four key stages of negotiation and what you need to
          do successfully complete this course
        </div>
        <br />
        <div className="hea">Prepare: Plan Your Negotiation Strategy</div>
        <br />

        <div className="sub">
          This module focuses on the first step in the negotiation process -
          planning for a negotiation. One critical component you&#39;ll learn is
          how to complete a negotiation analysis to set you up for success
        </div>
        <br />
        <div className="hea">Negotiate: Use Key Tactics for Success</div>
        <br />

        <div className="sub">
          This module focuses on two especially important topics: (1) how to use
          power during negotiations and (2) psychological tools that you can use
          during negotiations. Keep a paper and pencil handy, as youll be
          participating in several experiments as watch these videos &apos;
        </div>
        <br />
        <div className="hea">Close: Create a Contract</div>
        <br />

        <div className="sub">
          This module focuses on the negotiation that takes place in a business
          deal after reaching an initial agreement the negotiation to create a
          binding contract. Among other things, youll learn to decide if you
          need a lawyer or can act as your own for contract creation. However,
          the videos should not be construed as providing legal advice.
        </div>
        <br />
        <div className="hea">Perform and Evaluate: The End Game</div>
        <br />

        <div className="sub">
          This module focuses on performing and evaluating your agreement. If
          both parties perform as expected, there is no problem. But if they
          fail to perform, the dispute resolution processes that we cover in
          this module is important - especially mediation and arbitration.
        </div>
        <br />
        <div className="hea">Practice Your Negotiation Skills</div>
        <br />

        <div className="sub">
          Put your newly developed skills to the test in this module with a
          friend or fellow MOOC participant from another part of the world!
        </div>
        <br />
        <div className="hea">Final Examination</div>
        <br />

        <div className="sub">
          Once you have successfully completed the Final Exam, you will have
          successfully completed the course! The estimated time to complete the
          examination is 75 minutes. You can retake the examination until you
          are confident that you understand these concepts.
        </div>
      </div>
    </div>
  );
}

export default cousres;
