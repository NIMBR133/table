const Arrows = (props) => {
    return (
        <div className='arrows'>
            <span className=
                {`arrows__defalut ${!props.sortDirection & props.sortField === props.field ? 'arrows__active' : ''}`}>↓
            </span>
            <span className=
                {`arrows__defalut ${props.sortDirection & props.sortField === props.field ? 'arrows__active' : ''}`}>↑
            </span>
        </div>
    )
}

export default Arrows;