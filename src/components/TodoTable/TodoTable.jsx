import './TodoTable.module.css'
import PropTypes from 'prop-types';



export const TodoTable = ({todos, onToggleStatus, selectTodo}) => {
    return (
        <table>
            <thead>
                 <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>STATUS</th>
                </tr>
            </thead>

            <tbody>
                {todos.map(({ id, title, description, status, todo }) => (
                    <tr key={id} onClick={() => selectTodo(todo)}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{description}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={status}
                        onChange={() => onToggleStatus(id) } />
                    </td>
                        
                </tr>
            ))} 
        
            </tbody>
            
        </table>)
    
}


TodoTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      
    })
  ),
};