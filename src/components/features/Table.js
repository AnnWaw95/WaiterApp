import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

const Table = () => {

  const tables = useSelector(getAllTables)
  console.log(tables);

  // if (tables.length === 0)
  //   return (
  //     <div className='text-center my-5'>
  //       <Button variant='primary' disabled>
  //         <Spinner as='span' size='sm'role='status' aria-hidden='true'/>
  //         Loading...
  //       </Button>
  // </div>
  // );

    return (
      <ListGroup variant='flush'>
        {tables.map((table) => (
          <ListGroup.Item key={table.id} className='py-3 mb-4 d-flex justify-content-between align-items-start'>
            <div className='d-flex align-items-center'>
              <h2 className='my-0'>
                Table {table.id}
              </h2>
              <span className='vr mx-3'></span>
              <b className='mx-2'>Status: </b>
              <span className='text-muted'>
                {table.status}
              </span>
            </div>
            <Button as={Link} to={`/tables/${table.id}`} variant='primary'>Show more</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
}

export default Table;