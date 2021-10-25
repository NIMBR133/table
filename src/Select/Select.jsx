import './Select.css'

const Select = (props) => {
    return (
        <select className='select' value={props.value} onChange={props.handleChangeSelect}>
            <option value='12'>12 элементов</option>
            <option value='18'>18 элементов</option>
            <option value='28'>28 элементов</option>
            <option value='50'>50 элементов</option>
            <option value='80'>80 элементов</option>
        </select>
    )
}

export default Select;