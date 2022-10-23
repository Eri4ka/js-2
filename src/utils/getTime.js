export const getTime = (ticket, travelTime) => {
  const date = travelTime ? Date.parse(ticket) + travelTime : Date.parse(ticket)
  const timezone = new Date(ticket).getTimezoneOffset() / 60
  const hours = Math.floor((date / (1000 * 60 * 60) - timezone) % 24)
  const safeHours = hours < 10 ? '0' + hours : hours
  const minutes = Math.floor((date / (1000 * 60)) % 60)
  const safeminutes = minutes < 10 ? '0' + minutes : minutes

  return { hours: safeHours, minutes: safeminutes }
}
