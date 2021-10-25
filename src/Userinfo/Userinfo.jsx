import './Userinfo.css'

const Userinfo = (props) => {
    return (
        <>
            {props.rowClicked
                ? <div className='user-info'>
                    <div className='user-info__item'>
                        <span>Пользователь:</span> {props.rowClicked.firstName} {props.rowClicked.lastName}
                    </div>
                    <div className='user-info__item'>
                        <span>Город:</span> {props.rowClicked.address.city}
                    </div>
                    <div className='user-info__item'>
                        <span>Адрес:</span> {props.rowClicked.address.streetAddress}
                    </div>
                    <div className='user-info__item'>
                        <span>Индекс:</span> {props.rowClicked.address.zip}
                    </div>
                </div>
                : ''}
        </>
    )
}

export default Userinfo;