import './Pagination.css'

const Pagination = (props) => {
    const getRange = (start, end) => {
        return Array(end - start + 1)
            .fill()
            .map((v, i) => i + start)
    }

    const pagination = (currentPage, pageCount) => {
        let delta = 3;

        const range = {
            start: Math.round(currentPage - delta / 2 - 1),
            end: Math.round(currentPage + delta / 2)
        }

        if (range.start - 1 === 1 || range.end + 1 === pageCount) {
            range.start += 1
            range.end += 1
        }

        let pages =
            currentPage > delta
                ? getRange(Math.min(range.start, pageCount - delta), Math.min(range.end, pageCount))
                : getRange(0, Math.min(pageCount, delta + 1))

        const withDots = (value, pair) => (pages.length + 1 !== pageCount ? pair : [value])

        if (pages[0] !== 0) {
            pages = withDots(1, [0, '…']).concat(pages)
        }

        if (pages[pages.length - 1] < pageCount) {
            pages = pages.concat(withDots(pageCount, ['…', pageCount]))
        }

        return pages
    }
    const pageArray = pagination(props.currentPage, props.pageCount)
    
    return (
        <ul className='pagination'>
            <li onClick={() => props.changePage(props.currentPage - 1)}>
                <button className={'pagination__switch pagination__arrow'}
                        disabled={props.currentPage === 0}>◄ Назад</button>
            </li>
            {
                pageArray.map(page => (
                    Number.isInteger(page)
                        ? <li className={`pagination__switch pagination__count ${props.currentPage === page ? 'pagination__count_active' : ''}`}
                            onClick={() => props.changePage(page)}>
                            {page + 1}
                        </li>
                        : <li>{page}</li>
                ))
            }
            <li onClick={() => props.changePage(props.currentPage + 1)}>
                <button className={'pagination__switch pagination__arrow'}
                        disabled={props.currentPage === props.pageCount}>Вперёд ►</button>
            </li>
        </ul>
    )
}

export default Pagination;