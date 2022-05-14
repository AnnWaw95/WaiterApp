import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import { Link } from 'react-router-dom'

const Table = () => {

    const tables = useSelector(getAllTables);

  return (
    <>
       <div>
            <h1>All tables</h1>
            {tables.map(table => 
                <div key={table.id}>
                    <h2>Table {table.id}</h2>
                    <span><strong>Status: </strong>{table.status}</span>
                    <Button as={Link} to={`/table/${table.id}`}>Show more</Button>
                </div>
            )}
        </div>
    </>
  );
}

export default Table;