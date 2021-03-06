import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getTableId, updateTables } from "../../redux/tablesRedux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const TableForm = () => {
  const {id} = useParams();  
  const table = useSelector(state => getTableId(state, parseInt(id)));
    console.log(table)
    const [ currentStatus, setCurrentStatus ] = useState(table.status);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPeopleAmount, setCurrentPeopleAmount] = useState(table.peopleAmount);
    const [currentMaxPeopleAmount, setMaxCurrentPeopleAmount] = useState(table.maxPeopleAmount)
    const [currentBill, setCurrentBill] = useState(table.bill)
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateTables({currentStatus, currentPeopleAmount, currentBill, currentMaxPeopleAmount }))
        navigate("/")
      }

    return(
        <Form
      key={table.id}
      className='d-flex justify-content-center my-5'
      onSubmit={handleSubmit}
    >
        <Form.Group
        as={Row}
        style={{ maxWidth: '20rem' }}
      >
        <h1>Table {table.id}</h1>
      
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
            defaultValue={currentMaxPeopleAmount}
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