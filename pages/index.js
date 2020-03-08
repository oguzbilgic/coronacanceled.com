import ReactGA from 'react-ga';
import Head from 'next/head'
import React, { useState, useEffect } from 'react';

const contributors = [
  'montanaflynn',
  'bdmorin'
]

const events = [
  {
    name: "Facebook F8",
    link: "https://www.f8.com/",
    location: "San Jose, California",
    date: "May 6-8, 2020",
    status: "canceled"
  },
  {
    name: "SXSW 2020",
    link: "https://www.sxsw.com/",
    location: "Austin, Texas",
    date: "March 6-12, 2020",
    status: "canceled"
  },
  {
    name: "Cisco Live Melbourne",
    link: "https://www.ciscolive.com/apjc.html",
    location: "Melbourne",
    date: "March 3-6, 2020",
    status: "canceled"
  },
  {
    name: "Facebook Global Marketing Summit",
    link: "",
    location: "San Francisco, California",
    date: "March 9-12, 2020",
    status: "canceled"
  },
  {
    name: "Google I/O",
    link: "https://events.google.com/io/",
    location: "Mountain View, California",
    date: "May 12-14, 2020",
    status: "canceled"
  },
  {
    name: "SAP Ariba LIVE",
    link: "https://fusion.concur.com/fusion-orlando-announcement",
    location: "Las Vegas",
    date: "March 16-18, 2020",
    status: "canceled"
  },
  {
    name: "Adobe Summit",
    link: "https://summit.adobe.com/na/",
    location: "Las Vegas",
    date: "March 29 - April 2, 2020",
    status: "online-only"
  },
  {
    name: "Google Cloud Next",
    link: "https://cloud.withgoogle.com/next/sf",
    location: "San Francisco, California",
    date: "April 6-8, 2020",
    status: "online-only"
  },
  {
    name: "SAS Global Forum",
    link: "https://www.sas.com/en_us/events/sas-global-forum.html",
    location: "Washington, DC",
    date: "March 29 - April 1, 2020",
    status: "online-only"
  },
  {
    name: "Shopify Unite 2020 Dev Conference",
    link: "https://unite.shopify.com/",
    location: "Toronto",
    date: "May 6-8, 2020",
    status: "online-only"
  },
  {
    name: "Atlassian Summit 2020",
    link: "https://www.atlassian.com/company/events/summit",
    location: "Las Vegas, Nevada",
    date: "March 31 - April 2, 2020",
    status: "online-only"
  },
  {
    name: "DocuSign Momentum",
    link: "https://momentum.docusign.com/",
    location: "San Francisco, California",
    date: "March 4, 2020",
    status: "online-only"
  },
  {
    name: "dotGo 2020",
    link: "https://www.dotgo.eu/",
    location: "Paris, France",
    date: "March 30, 2020",
    status: "canceled"
  },
  {
    name: "ESRI Developer Summit",
    link: "https://www.esri.com/en-us/about/events/devsummit/overview",
    location: "Palm Springs, California",
    date: "March 10, 2020",
    status: "online-only"
  },
  {
    name: "Microsoft WSLConf",
    link: "https://www.wslconf.dev/",
    location: "Redmond, Washington",
    date: "March 10-11, 2020",
    status: "online-only"
  },
  {
    name: "Black Hat Asia 2020",
    link: "https://www.blackhat.com/asia-20/",
    location: "Singapore",
    date: "March 31 - April 3, 2020",
    status: "postponed"
  },
  {
    name: "EmTech Asia",
    link: "https://emtechasia.com/",
    location: "Singapore",
    date: "March 24, 2020",
    status: "postponed"
  },
  {
    name: "Game Developers Conference (GDC)",
    link: "https://www.gdconf.com/",
    location: "San Francisco, California",
    date: "March 16-20, 2020",
    status: "postponed"
  },
  {
    name: "Kaspersky's Security Analyst Summit",
    link: "https://thesascon.com/",
    location: "Barcelona",
    date: "April 6-9, 2020",
    status: "postponed"
  },
  {
    name: "Paris Blockchain Week Summit",
    link: "https://www.pbwsummit.com/",
    location: "Paris, France",
    date: "March 31 - April 1, 2020",
    status: "postponed"
  },
  {
    name: "F5 Agility 2020",
    link: "https://www.f5.com/agility",
    location: "Orlando, Florida",
    date: "March 16-19, 2020",
    status: "online-only"
  },
  {
    name: "Ingram Micro Cloud Cloud Summit 2020 ",
    link: "https://www.ingrammicrocloud.com/press-releases/ingram-micro-cloud-postpones-cloud-summit-2020-early-2021/",
    location: "Miami Beach, Florida",
    date: "March 12-14, 2020",
    status: "postponed"
  },
  {
    name: "Microsoft MVP Global Summit",
    link: "https://mvp.microsoft.com/summit",
    location: "Redmond, Washington",
    date: "March 15-20, 2020",
    status: "online-only"
  },
  {
    name: "First Robotics Mt Olive NJ",
    link: "https://midatlanticrobotics.com/news/2020-mount-olive-district-event-cancellation/",
    location: "Mt Olive, New Jersey",
    date: "March 7-8, 2020",
    status: "canceled"
  }
]

function HomePage() {
  useEffect(() => {
    if (window && !window.GA_INITIALIZED) {
      ReactGA.initialize('UA-947852-24');
      ReactGA.pageview(window.location.pathname + window.location.search);

      window.GA_INITIALIZED = true
    }
  })

  return (
    <div>
      <Head>
        <title>Events effected (canceled/postponed) by Corona Virus COVID-19</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div>
        <a href="https://twitter.com/intent/tweet?text=event+info+https://coronacanceled.com">Tweet to add event info</a>
      </div>

      <h2>Canceled Events Due to Corona Virus - COVID-19</h2>

      <ul>
        {events.filter(e => e.status == 'canceled').map(event => 
          <li>
            <a href={event.link}>
              {event.name}
            </a> <b>{event.status}</b> {event.date} in {event.location}
          </li>
        )}
      </ul>

      <h2>Online Only Events Due to Corona Virus - COVID-19</h2>

      <ul>
        {events.filter(e => e.status == 'online-only').map(event => 
          <li>
            <a href={event.link}>
              {event.name}
            </a> <b>{event.status}</b> {event.date} in {event.location}
          </li>
        )}
      </ul>

      <h2>Postponed Events Due to Corona Virus - COVID-19</h2>

      <ul>
        {events.filter(e => e.status == 'postponed').map(event => 
          <li>
            <a href={event.link}>
              {event.name}
            </a> <b>{event.status}</b> {event.date} in {event.location}
          </li>
        )}
      </ul>

      <a href="https://github.com/oguzbilgic/coronacanceled.com/edit/master/pages/index.js" >
        Fork on github to update. Contributors:
      </a>

      <ul>
        {contributors.map(contributor =>
          <li><a href={`https://github.com/${contributor}`}>{contributor}</a></li>
        )}
      </ul>
    </div>
  )
}

export default HomePage
