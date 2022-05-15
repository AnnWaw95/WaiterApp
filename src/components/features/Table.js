import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import { Link } from 'react-router-dom'

const Table = () => {

  const tables = useSelector(getAllTables)

  return (
    <>
       <div>
            <h1>All tables</h1>
            {tables.map(tables => 
                <div key={tables.id}>
                    <h2>Table {tables.id}</h2>
                    <span><strong>Status: </strong>{tables.status}</span>
                    <Button as={Link} to={`/tables/${tables.id}`}>Show more</Button>
                </div>
            )}
        </div>
    </>
  );
}

export default Table;