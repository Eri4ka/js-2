const getLocaleTime = (data) => {
  return new Date(data)
}

export const fromAToB = [
  {
    time: getLocaleTime('2021-08-21 18:00 +03:00'),
    text: `${getLocaleTime('2021-08-21 18:00 +03:00').toLocaleString().slice(-8, -3)}(из A в B)`,
  },
  {
    time: getLocaleTime('2021-08-21 18:30 +03:00'),
    text: `${getLocaleTime('2021-08-21 18:30 +03:00').toLocaleString().slice(-8, -3)}(из A в B)`,
  },
  {
    time: getLocaleTime('2021-08-21 18:45 +03:00'),
    text: `${getLocaleTime('2021-08-21 18:45 +03:00').toLocaleString().slice(-8, -3)}(из A в B)`,
  },
  {
    time: getLocaleTime('2021-08-21 19:00 +03:00'),
    text: `${getLocaleTime('2021-08-21 19:00 +03:00').toLocaleString().slice(-8, -3)}(из A в B)`,
  },
  {
    time: getLocaleTime('2021-08-21 19:15 +03:00'),
    text: `${getLocaleTime('2021-08-21 19:15 +03:00').toLocaleString().slice(-8, -3)}(из A в B)`,
  },
  {
    time: getLocaleTime('2021-08-21 21:00 +03:00'),
    text: `${getLocaleTime('2021-08-21 21:00 +03:00').toLocaleString().slice(-8, -3)}(из A в B)`,
  },
]

export const fromBToA = [
  {
    time: getLocaleTime('2021-08-21 18:30 +03:00'),
    text: `${getLocaleTime('2021-08-21 18:30 +03:00').toLocaleString().slice(-8, -3)}(из B в A)`,
  },
  {
    time: getLocaleTime('2021-08-21 18:45 +03:00'),
    text: `${getLocaleTime('2021-08-21 18:45 +03:00').toLocaleString().slice(-8, -3)}(из B в A)`,
  },
  {
    time: getLocaleTime('2021-08-21 19:00 +03:00'),
    text: `${getLocaleTime('2021-08-21 19:00 +03:00').toLocaleString().slice(-8, -3)}(из B в A)`,
  },
  {
    time: getLocaleTime('2021-08-21 19:15 +03:00'),
    text: `${getLocaleTime('2021-08-21 19:15 +03:00').toLocaleString().slice(-8, -3)}(из B в A)`,
  },
  {
    time: getLocaleTime('2021-08-21 19:35 +03:00'),
    text: `${getLocaleTime('2021-08-21 19:35 +03:00').toLocaleString().slice(-8, -3)}(из B в A)`,
  },
  {
    time: getLocaleTime('2021-08-21 21:50 +03:00'),
    text: `${getLocaleTime('2021-08-21 21:50 +03:00').toLocaleString().slice(-8, -3)}(из B в A)`,
  },
  {
    time: getLocaleTime('2021-08-21 21:55 +03:00'),
    text: `${getLocaleTime('2021-08-21 21:55 +03:00').toLocaleString().slice(-8, -3)}(из B в A)`,
  },
]
