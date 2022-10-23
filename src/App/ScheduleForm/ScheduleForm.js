import { useState, useEffect, useCallback } from 'react'

import { Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { fromAToB, fromBToA } from '../../schedules'
import ResultModal from './components/ResultModal'
import ScheduleSelect from './components/ScheduleSelect'

const ScheduleForm = () => {
  const [route, setRoute] = useState('')
  const [ticket, setTicket] = useState('')
  const [backTicket, setBackTicket] = useState('')
  const [count, setCount] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const travelTime = 3000000

  useEffect(() => {
    if (route === '') {
      setTicket('')
      setBackTicket('')
      setCount(0)
    }
  }, [route])

  useEffect(() => {
    if (ticket === '' || backTicket === '') {
      setCount(0)
    }
  }, [ticket, backTicket])

  useEffect(() => {
    if (ticket === '') {
      setBackTicket('')
    }
  }, [ticket])

  const getTickets = () => {
    switch (route) {
      case 'из A в B':
        return fromAToB
      case 'из B в A':
        return fromBToA
      default:
        return fromAToB
    }
  }

  const tickets = getTickets()

  const handleResult = (e) => {
    e.preventDefault()
    setModalIsOpen(true)
  }

  const handleChangeRoute = useCallback((e) => setRoute(e.target.value), [])

  const handleTicket = useCallback((e) => setTicket(e.target.value), [])

  const handleBackTicket = useCallback((e) => setBackTicket(e.target.value), [])

  const handleCloseModal = useCallback(() => setModalIsOpen(false), [])

  return (
    <>
      <Form onSubmit={handleResult}>
        <ScheduleSelect label='Выберите направление' onChange={handleChangeRoute}>
          <option value='из A в B'>из A в B</option>
          <option value='из B в A'>из B в A</option>
          <option value='из A в B и обратно в А'>из A в B и обратно в А</option>
        </ScheduleSelect>
        {route !== '' && (
          <ScheduleSelect label='Выберите билет' onChange={handleTicket}>
            {tickets.map((item, i) => (
              <option key={i} value={item.time}>
                {item.text}
              </option>
            ))}
          </ScheduleSelect>
        )}
        {route === 'из A в B и обратно в А' && ticket !== '' && (
          <ScheduleSelect label='Выберите обратный билет' onChange={handleBackTicket}>
            {fromBToA.map((item, i) => {
              const withArrive = Date.parse(ticket) + travelTime

              if (withArrive < Date.parse(item.time)) {
                return (
                  <option key={i} value={item.time}>
                    {item.text}
                  </option>
                )
              } else {
                return null
              }
            })}
          </ScheduleSelect>
        )}
        {(route === 'из A в B и обратно в А' && backTicket !== '') ||
        (route !== 'из A в B и обратно в А' && ticket !== '') ? (
          <InputGroup>
            <InputGroup.Text>Выберите количество</InputGroup.Text>
            <FormControl type='number' placeholder='0' min='0' onChange={(e) => setCount(+e.target.value)} />
          </InputGroup>
        ) : null}
        {count !== 0 && (
          <Button className='mt-3' type='submit'>
            Посчитать
          </Button>
        )}
      </Form>
      <ResultModal
        show={modalIsOpen}
        handleCloseModal={handleCloseModal}
        count={count}
        route={route}
        ticket={ticket}
        backTicket={backTicket}
        travelTime={travelTime}
      />
    </>
  )
}

export default ScheduleForm
