import './SelectData.css'

const SelectData = (props) => {
    return (
        <div className='buttons'>
            <button className='buttons__item' onClick={() => props.modeSelect(100)}>100 элменетов</button>
            <button className='buttons__item' onClick={() => props.modeSelect(1000)}>1000 элементов</button>
        </div>
    )
}

export default SelectData;