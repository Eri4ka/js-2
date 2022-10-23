import { Container, Row, Col } from 'react-bootstrap'
import ScheduleForm from './ScheduleForm'

function App() {
  return (
    <Container>
      <Row className='mt-3 mx-auto w-50'>
        <Col sm={12}>
          <ScheduleForm />
        </Col>
      </Row>
    </Container>
  )
}

export default App
