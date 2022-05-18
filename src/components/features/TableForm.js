import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateTables } from "../../redux/tablesRedux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTables } from "../../redux/tablesRedux";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const TableForm = ({ id,maxPeopleAmount,peopleAmount,status,bill,}) => {
    const tables = useSelector(getAllTables);
    const [ currentStatus, setCurrentStatus ] = useState(status);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPeopleAmount, setCurrentPeopleAmount] = useState(peopleAmount)
    const [currentBill, setCurrentBill] = useState(bill)
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateTables({status, peopleAmount, maxPeopleAmount, bill, id }))
        navigate("/")
      }

    return(
        <Form
      key={tables.id}
      className='d-flex justify-content-center my-5'
      onSubmit={handleSubmit}
    >
        <Form.Group
        as={Row}
        style={{ maxWidth: '20rem' }}
      >
        <h1>Table {id}</h1>
      
        <Form.Label column sm='3'>
          <b>Status:</b>
        </Form.Label>
        <Col sm='9' className='mb-3'>
        <Form.Select defaultValue={currentStatus} onChange={e => setCurrentStatus(e.target.value)} size='lg'>
                <option value="free">Free</option>
                <option value="reserved">Reserved</option>
                <option value="cleaning">Cleaning</option>
                <option value="busy">Busy</option>
            </Form.Select>
        </Col>
        <Form.Label column sm='3'>
          <b>People:</b>
        </Form.Label>
        <Col sm='9' className='d-flex mb-3'>
          <Form.Control
            className='text-center'
            style={{ maxWidth: '3rem' }}
            value={currentPeopleAmount}
            onChange={(e) =>
              setCurrentPeopleAmount(
                e.target.value
              )
            }
          />
          <span
            className='mx-1 my-auto'
            style={{ fontSize: '22px' }}
          >
            /
          </span>
          <Form.Control
            className='text-center'
            style={{ maxWidth: '3rem' }}
            defaultValue={maxPeopleAmount}
          />
        </Col>
        <Form.Group>
            <Col sm='9' className='d-flex mb-3'>
            <Form.Label>Bill:</Form.Label>
            
            <Form.Control
            className='text-center'
            style={{ maxWidth: '4rem' }}
            value={currentBill}
            onChange={(e) =>
              setCurrentBill(
                e.target.value
              )
            }
          />
          </Col>
            </Form.Group>
        <Col sm='12'>
          <Button
            variant='primary'
            type='submit'
          >
            Update
          </Button>
        </Col>
      </Form.Group>
    </Form>
    )
}
export default TableForm; 