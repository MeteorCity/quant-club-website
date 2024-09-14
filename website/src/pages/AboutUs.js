import React from 'react';
import Header from "../components/Header";

function AboutUs() {
  return (
    <div className="about-us-page">
      <Header />
      <main className="about-us-container">
        <section className="mission-statement">
          <h2>About Us</h2>
          <p>
            The Rice University Quantitative Finance Club (RQFC) provides students with hands-on experience in quantitative finance through projects, trading competitions, and collaboration. Our mission is to empower students with the skills and knowledge necessary for careers in quantitative finance, research, and algorithmic trading.
          </p>
        </section>

        <section className="past-projects">
          <h2>Examples of Past Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Mean Reversion</h3>
              <p>This project explored using Mean Reversion algorithms with rolling windows in an attempt to predict equities movement.</p>
            </div>
            <div className="project-card">
              <h3>Market Prediction with Kaggle</h3>
              <p>Students participated in Kaggle competitions to predict financial returns using historical data and machine learning models.</p>
            </div>
            <div className="project-card">
              <h3>Sentiment Analysis</h3>
              <p>We explored how sentiment data, specifically headlines of financial news articles, can be analyzed to make market predictions using NLP techniques.</p>
            </div>
            <div className="project-card">
              <h3>Sports Betting Arb Detector</h3>
              <p>With the legalization of sports betting, we developed algorithms to identify arbitrage opportunities in betting markets.</p>
            </div>
          </div>
        </section>

        <section className="trading-competition">
          <h2>Trading Competitions</h2>
          <p>
            Every few weeks, RQFC participates in simulated trading challenges. These competitions gives our members a chance to apply their skills in real-world futures trading scenarios, competing against top students from around the globe. 
          </p>
        </section>
      </main>
    </div>
  );
}

export default AboutUs