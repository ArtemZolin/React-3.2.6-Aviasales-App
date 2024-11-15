// eslint-disable-next-line import/prefer-default-export
export const generateUniqKey = (ticket) =>
  `${ticket.carrier}${ticket.segments[0].date}${ticket.segments[0].origin}-${ticket.segments[0].destination}`
