import Arrows from './Arrows';
import './Table.css'

const Table = (props) => {
    let i = 0;
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th onClick={() => props.onSort('id')}>
                        <div className='table__cell-wrapper'>
                            <div>ID</div>
                            <Arrows sortField={props.sortField} sortDirection={props.sortDirection} field='id' />
                        </div>
                    </th>
                    <th onClick={() => props.onSort('firstName')}>
                        <div className='table__cell-wrapper'>
                            <div>Имя</div>
                            <Arrows sortField={props.sortField} sortDirection={props.sortDirection} field='firstName' />
                        </div>
                    </th>
                    <th onClick={() => props.onSort('lastName')}>
                        <div className='table__cell-wrapper'>
                            <div>Фамилия</div>
                            <Arrows sortField={props.sortField} sortDirection={props.sortDirection} field='lastName' />
                        </div>
                    </th>
                    <th>
                        <div>Почта</div>
                    </th>
                    <th>
                        <div>Телефон</div>
                    </th>
                    <th onClick={() => props.onSort('city')}>
                        <div className='table__cell-wrapper'>
                            <div>Город</div>
                            <Arrows sortField={props.sortField} sortDirection={props.sortDirection} field='city' />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.dataUsers.map(user => (
                    <tr key={i++} onClick={() => props.getLine(user)}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;