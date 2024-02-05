interface PageViewEventData {
  path: string
  query: string
  ip?: string
  time: number
}

interface Venue {
  name: string
  url?: string
  image?: string
  mapUrl?: string
  color: string
}

interface Designer {
  name?: string
  bio?: string
  image?: string
  url?: string
}

interface Game {
  image: string
  name: string
  description: string
  descriptionJa: string
  venue: Venue
  designer?: Designer
  ticketUrl: string
}
