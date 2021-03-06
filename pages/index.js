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
    category: 'tech',
    link: "https://www.f8.com/",
    location: "San Jose, California",
    date: "May 6-8, 2020",
    status: "canceled"
  },
  {
    name: "SXSW 2020",
    category: 'tech',
    link: "https://www.sxsw.com/",
    location: "Austin, Texas",
    date: "March 6-12, 2020",
    status: "canceled"
  },
  {
    name: "Cisco Live Melbourne",
    category: 'tech',
    link: "https://www.ciscolive.com/apjc.html",
    location: "Melbourne",
    date: "March 3-6, 2020",
    status: "canceled"
  },
  {
    name: "Facebook Global Marketing Summit",
    category: 'tech',
    link: "",
    location: "San Francisco, California",
    date: "March 9-12, 2020",
    status: "canceled"
  },
  {
    name: "Google I/O",
    category: 'tech',
    link: "https://events.google.com/io/",
    location: "Mountain View, California",
    date: "May 12-14, 2020",
    status: "canceled"
  },
  {
    name: "SAP Ariba LIVE",
    category: 'tech',
    link: "https://fusion.concur.com/fusion-orlando-announcement",
    location: "Las Vegas",
    date: "March 16-18, 2020",
    status: "canceled"
  },
  {
    name: "Adobe Summit",
    category: 'tech',
    link: "https://summit.adobe.com/na/",
    location: "Las Vegas",
    date: "March 29 - April 2, 2020",
    status: "online-only"
  },
  {
    name: "Google Cloud Next",
    category: 'tech',
    link: "https://cloud.withgoogle.com/next/sf",
    location: "San Francisco, California",
    date: "April 6-8, 2020",
    status: "online-only"
  },
  {
    name: "SAS Global Forum",
    category: 'tech',
    link: "https://www.sas.com/en_us/events/sas-global-forum.html",
    location: "Washington, DC",
    date: "March 29 - April 1, 2020",
    status: "online-only"
  },
  {
    name: "Shopify Unite 2020 Dev Conference",
    category: 'tech',
    link: "https://unite.shopify.com/",
    location: "Toronto",
    date: "May 6-8, 2020",
    status: "online-only"
  },
  {
    name: "Atlassian Summit 2020",
    category: 'tech',
    link: "https://www.atlassian.com/company/events/summit",
    location: "Las Vegas, Nevada",
    date: "March 31 - April 2, 2020",
    status: "online-only"
  },
  {
    name: "DocuSign Momentum",
    category: 'tech',
    link: "https://momentum.docusign.com/",
    location: "San Francisco, California",
    date: "March 4, 2020",
    status: "online-only"
  },
  {
    name: "dotGo 2020",
    category: 'tech',
    link: "https://www.dotgo.eu/",
    location: "Paris, France",
    date: "March 30, 2020",
    status: "canceled"
  },
  {
    name: "ESRI Developer Summit",
    category: 'tech',
    link: "https://www.esri.com/en-us/about/events/devsummit/overview",
    location: "Palm Springs, California",
    date: "March 10, 2020",
    status: "online-only"
  },
  {
    name: "Microsoft WSLConf",
    category: 'tech',
    link: "https://www.wslconf.dev/",
    location: "Redmond, Washington",
    date: "March 10-11, 2020",
    status: "online-only"
  },
  {
    name: "Black Hat Asia 2020",
    category: 'tech',
    link: "https://www.blackhat.com/asia-20/",
    location: "Singapore",
    date: "March 31 - April 3, 2020",
    status: "postponed"
  },
  {
    name: "EmTech Asia",
    category: 'tech',
    link: "https://emtechasia.com/",
    location: "Singapore",
    date: "March 24, 2020",
    status: "postponed"
  },
  {
    name: "Game Developers Conference (GDC)",
    category: 'tech',
    link: "https://www.gdconf.com/",
    location: "San Francisco, California",
    date: "March 16-20, 2020",
    status: "postponed"
  },
  {
    name: "Kaspersky's Security Analyst Summit",
    category: 'tech',
    link: "https://thesascon.com/",
    location: "Barcelona",
    date: "April 6-9, 2020",
    status: "postponed"
  },
  {
    name: "Paris Blockchain Week Summit",
    category: 'tech',
    link: "https://www.pbwsummit.com/",
    location: "Paris, France",
    date: "March 31 - April 1, 2020",
    status: "postponed"
  },
  {
    name: "F5 Agility 2020",
    category: 'tech',
    link: "https://www.f5.com/agility",
    location: "Orlando, Florida",
    date: "March 16-19, 2020",
    status: "online-only"
  },
  {
    name: "Ingram Micro Cloud Cloud Summit 2020 ",
    category: 'tech',
    link: "https://www.ingrammicrocloud.com/press-releases/ingram-micro-cloud-postpones-cloud-summit-2020-early-2021/",
    location: "Miami Beach, Florida",
    date: "March 12-14, 2020",
    status: "postponed"
  },
  {
    name: "Microsoft MVP Global Summit",
    category: 'tech',
    link: "https://mvp.microsoft.com/summit",
    location: "Redmond, Washington",
    date: "March 15-20, 2020",
    status: "online-only"
  },
  {
    name: "First Robotics Mt Olive NJ",
    category: 'tech',
    link: "https://midatlanticrobotics.com/news/2020-mount-olive-district-event-cancellation/",
    location: "Mt Olive, New Jersey",
    date: "March 7-8, 2020",
    status: "canceled"
  },
  {
    name: "Formula 1: The Bahrain Grand Prix ",
    category: 'sports',
    link: "https://www.formula1.com/en/racing/2020/Bahrain.html",
    location: "Bahrain",
    date: "March 20-22, 2020",
    status: "online-only"
  },
  {
    name: "Barcelona Marathon",
    category: 'sports',
    link: "https://www.zurichmaratobarcelona.es/eng/",
    location: "Barcelona, Spain",
    date: "March 15, 2020",
    status: "postponed"
  },
  {
    name: "2020 IIHF Women's World Championship",
    category: 'sports',
    link: "",
    location: "Canada",
    date: "March 31 - April 10, 2020",
    status: "canceled"
  },
  {
    name: "World Athletics Half Marathon Championships",
    category: 'sports',
    link: "",
    location: "Gdynia, Poland",
    date: "March 29, 2020",
    status: "postponed"
  },
  {
    name: "Formula E: The Rome E-Prix",
    category: 'sports',
    link: "",
    location: "Rome, Italy",
    date: "April 4, 2020",
    status: "postponed"
  },
  {
    name: "2020 Milan San Remo Pro Race",
    category: 'sports',
    link: "",
    location: "Milan, Italy",
    date: "March 21, 2020",
    status: "postponed"
  },
  {
    name: "European Tour Magical Kenya Open",
    category: 'sports',
    link: "https://www.europeantour.com/european-tour/news/articles/detail/european-tour-statement-on-magical-kenya-open/",
    location: "Nairobi, Kenya",
    date: "March 12-15, 2020",
    status: "canceled"
  },
  {
    name: "Alpine Skiing World Cup Finals",
    category: 'sports',
    link: "https://www.fis-ski.com/international-ski-federation/news-multimedia/news/fis-alpine-ski-world-cup-finals-cortina-ita-cancelled",
    location: "Cortina d'Ampezzo, Italy",
    date: "March 18-22, 2020",
    status: "canceled"
  },
  {
    name: "2020 Gymnastics World Cup Doha",
    category: 'sports',
    link: "https://www.gymnastics.sport/site/events/detail.php?id=14999",
    location: "Doha, Qatar",
    date: "March 18-21, 2020",
    status: "online-only"
  },
  {
    name: "Valencia's Champions League",
    category: 'sports',
    link: "https://www.uefa.com/uefachampionsleague/clubs/52268--valencia/",
    location: "Valencia, Spain",
    date: "March 10, 2020",
    status: "online-only"
  },
  {
    name: "Strade Bianche",
    category: 'sports',
    link: "https://www.strade-bianche.it/",
    location: "Tuscany, Italy",
    date: "March 7, 2020",
    status: "postponed"
  },
  {
    name: "Tomorrowland Winter France",
    category: 'concert',
    link: "",
    location: "France",
    date: "March 14-21, 2020",
    status: "canceled"
  },
  {
    name: "Ultra Music Festival",
    category: 'concert',
    link: "https://ultramusicfestival.com/official-notice",
    location: "Miami, Florida",
    date: "March 20-22, 2020",
    status: "canceled"
  },
  {
    name: "Queen's Paris Show",
    category: 'concert',
    link: "http://www.queenonline.com/news/statement-paris-show-postponed?fbclid=IwAR2dwEU4n1AtIKv4hWQiLl98kY0rV0QeuQ0MgpcQeMKW-pVtHGMJmYf_aVI",
    location: "Paris, France",
    date: "May 26, 2020",
    status: "postponed"
  },
  {
    name: "Ultra Abu Dhabi",
    category: 'concert',
    link: "https://ultra-abudhabi.com/ticket-notice/",
    location: "Abu Dhabi",
    date: "March 5-6, 2020",
    status: "canceled"
  },
]

const EventsList = ({ events }) => (
  <ul>
    {events.map(event => 
    <li>
      <a href={event.link}>
        {event.name}
      </a> <b>{event.status}</b> {event.date} in {event.location}
    </li>
    )}
  </ul>
)

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

      <h2>Effected Sports Events Due to Corona Virus - COVID-19</h2>

      <ul>
        {events.filter(e => e.category == 'sports').map(event => 
          <li>
            <a href={event.link}>
              {event.name}
            </a> <b>{event.status}</b> {event.date} in {event.location}
          </li>
        )}
      </ul>

      <h2>Effected Concerts Due to Corona Virus - COVID-19</h2>

      <ul>
        {events.filter(e => e.category == 'concert').map(event => 
          <li>
            <a href={event.link}>
              {event.name}
            </a> <b>{event.status}</b> {event.date} in {event.location}
          </li>
        )}
      </ul>

      <h2>Effected Tech Events Due to Corona Virus - COVID-19</h2>

      <ul>
        {events.filter(e => e.category == 'tech').map(event => 
          <li>
            <a href={event.link}>
              {event.name}
            </a> <b>{event.status}</b> {event.date} in {event.location}
          </li>
        )}
      </ul>

      <a href="https://github.com/oguzbilgic/coronacanceled.com/edit/master/pages/index.js" >
        Fork on github to update
      </a>
    </div>
  )
}

export default HomePage
