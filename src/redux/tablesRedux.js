
//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableId = ({ tables },tableId ) => 

{
  console.log(tableId);
  console.log(tables);
   return tables.find((tables) => {
    console.log(tables.id); 
    console.log(tableId);
    return tables.id === tableId} )};
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES')

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)))
    };
};


const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
          return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;