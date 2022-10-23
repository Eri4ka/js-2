import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button } from 'react-bootstrap'
import { getDecl, getTime } from '../../../../utils'

export const ResultModal = ({ show, handleCloseModal, count, route, ticket, backTicket, travelTime }) => {
  const getCost = () => {
    switch (route) {
      case 'из A в B' || 'из B в A':
        return 700 * count
      default:
        return 1200 * count
    }
  }

  const word = getDecl(count, ['билет', 'билета', 'билетов'])
  const cost = getCost()

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <ModalHeader closeButton>
        <ModalTitle>Результат</ModalTitle>
      </ModalHeader>
      <ModalBody style={{ whiteSpace: 'pre-line' }}>
        {`Вы выбрали ${count} ${word} по маршруту "${route}" стоимостью ${cost}р.
                Это путешествие займет у вас ${route === 'из A в B и обратно в А' ? 100 : 50} минут.
                Теплоход отправляется в ${getTime(ticket).hours}:${getTime(ticket).minutes}, а прибудет в ${
          getTime(ticket, travelTime).hours
        }:${getTime(ticket, travelTime).minutes}.
                ${
                  backTicket
                    ? `Из В в А отправляется в ${getTime(backTicket).hours}:${
                        getTime(backTicket).minutes
                      }, а прибудет в ${getTime(backTicket, travelTime).hours}:${
                        getTime(backTicket, travelTime).minutes
                      }.`
                    : ''
                }`}
      </ModalBody>
      <ModalFooter>
        <Button variant='secondary' onClick={handleCloseModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ResultModal
