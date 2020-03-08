import ReactGA from 'react-ga';
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed'


const tweets = [
  '1236612952746340352',
  '1234965741817991168',
  '1233512302848233478',
  '1236252801912668163',
  '1234892793656627200',
  '1235406756043542528',
  '1235895401686773760',
  '1235461593141411840',
  '1235461593141411840',
  '1235529993867767808',
  '1235877874562809861',
]

function HomePage() {
  useEffect(() => {
    if (window && !window.GA_INITIALIZED) {
      ReactGA.initialize('UA-947852-24');
      ReactGA.pageview(window.location.pathname + window.location.search);

      window.GA_INITIALIZED = true
    }
  })

  var id = tweets[Math.floor(Math.random()*tweets.length)];

  return (
    <div>
      <Head>
        <title>Simple Tips for Corona</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div>
      </div>

      <h2>Corona Tips</h2>

      <p>
      Corona tips from reliable sources. Refresh page to see more. <a href="https://twitter.com/intent/tweet?text=your+tip+https://coronacanceled.com/tips">Tweet us</a> to suggest a tweet
      </p>

      <TweetEmbed id={id} />
    </div>
  )
}

export default HomePage
