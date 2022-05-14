import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getTableId, updateTables } from "../../redux/tablesRedux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TableForm = () => {
    const { id } = useParams();
    const table = useSelector(state => getTableId(state, id));
    const [ status, setStatus ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [peopleAmount, setPeopleAmount] = useState('')
    const [maxPeopleAmount, setMaxPeopleAmount] = useState('')
    const [bill] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateTables({status, peopleAmount, maxPeopleAmount, bill, id }))
        navigate("/")
      }

    return(
        <Form onSubmit={handleSubmit}>
        <h1>Table {table.id}</h1>
        <Form.Group className="mb-3" controlId="statusForm">
            <Form.Label>Status</Form.Label>
            <Form.Select defaultValue={status} onChange={e => setStatus(e.target.value)} size='lg'>
                <option value="free">Free</option>
                <option value="reserved">Reserved</option>
                <option value="cleaning">Cleaning</option>
                <option value="busy">Busy</option>
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Label>People</Form.Label>
            <Form.Text onChange={e => setPeopleAmount(e.target.value)}>{table.peopleAmount}</Form.Text> / <Form.Text onChange={e => setMaxPeopleAmount(e.target.value)}>{table.maxPeopleAmount}</Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Bill:</Form.Label>
            <Form.Text>${table.bill}</Form.Text>
            </Form.Group>
        <Button>Update</Button>
    </Form>
    )
}
export default TableForm; 