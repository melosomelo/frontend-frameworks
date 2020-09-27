/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { Wrapper, DevOpinion } from "./styles";

function About() {
  return (
    <Wrapper>
      <p
        style={{
          marginBottom: "5.5rem",
          maxWidth: "750px",
          textAlign: "center",
        }}
      >
        This is a project we made to get familiar with different front end
        frameworks. In this case, we used
        <span> React</span>. Here's what we thought about it.
      </p>

      <DevOpinion>
        <h2>@melosomelo</h2>
        <p>
          <span>React</span> was my first frontend framework, so it has a
          special place in my heart. That said, learning it was kinda hard. I
          think that happened because at the time I was also learning Javascript
          as a language, so there were a lot of features that I just didn't
          know. Also, the whole ecossystem of mordern web development can be a
          bit overwhelming.
        </p>
        <p>
          <span>React</span> has a lot of possibilities, since it's a library
          and not a framework. That can be good for experienced developers but
          also pretty confusing for novice ones. I know that for me, it was
          pretty hard.
        </p>
        <p>
          We're making this after creating the
          <span className="vue"> Vue</span> app, and I think that{" "}
          <span className="vue">Vue</span> seems a lot easier to learn
        </p>
      </DevOpinion>
      <DevOpinion>
        <h2>@leonandro</h2>
        <p>Yet to give his opinion</p>
      </DevOpinion>
    </Wrapper>
  );
}

export default About;
