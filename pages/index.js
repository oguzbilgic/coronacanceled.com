import ReactGA from 'react-ga';
import React, { useState, useEffect } from 'react';

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

      <a 
        href="https://github.com/oguzbilgic/coronacanceled.com/edit/master/pages/index.js"
      >Fork on github to update</a>
    </div>
  )
}

export default HomePage
