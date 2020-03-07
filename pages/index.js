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
    name: "Adobe Summit",
    link: "https://summit.adobe.com/na/",
    location: "Las Vegas",
    date: "March 29 - April 2, 2020",
    status: "online-only"
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
]

function HomePage() {
  return (
    <div>
      <h2>Events Canceled, Postponed or Online-only due to Corona Virus</h2>

      <ul>
        {events.map(event => 
          <li>
            <a href={event.link}>
              {event.name}
            </a> <b>{event.status}</b> {event.date} in {event.location}
          </li>
        )}
      </ul>
      <a>Update on github</a>
    </div>
  )
}

export default HomePage
