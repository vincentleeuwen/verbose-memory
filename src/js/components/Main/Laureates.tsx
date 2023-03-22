import Page from './Page';

import useFilters, { ordering } from '../../hooks/useFilters';


const Laureates = () => {
    const { 
        order,
        setOrder,
        nextPage,
        prevPage,
        setPage,
        page,
        laureates,
        loading,
        updateBirthRange,
        birthRange,
    } = useFilters();

    return (
        <main className="py-5">
            <div className="container">
                <h1 className="mb-4">Laureates</h1>
                <div className="d-flex justify-content-between">
                    <ul className="nav nav-pills my-3 justify-content-end align-items-center">
                        <li className="nav-item me-2">
                            <span>Sort:</span>
                        </li>
                        <li className="nav-item" onClick={() => setOrder(ordering.asc)}>
                            <a className={order === ordering.asc ? 'nav-link active' : 'nav-link' } href="#">Ascending</a>
                        </li>
                        <li className="nav-item" onClick={() => setOrder(ordering.desc)}>
                            <a className={order === ordering.desc ? 'nav-link active' : 'nav-link' } href="#">Descending</a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills my-3 justify-content-end align-items-center">
                        <li className="nav-item me-2">
                            <span>Filter by:</span>
                        </li>
                        {/* Dates: https://en.wikipedia.org/wiki/Generation_Z */}
                        <li className="nav-item" onClick={() => updateBirthRange('1946', '1964')}>
                            <a className={birthRange === '1946-1964' ? 'nav-link active' : 'nav-link'} href="#">Boomers</a>
                        </li>
                        <li className="nav-item" onClick={() => updateBirthRange('1981', '1996')}>
                            <a className={birthRange === '1981-1996' ? 'nav-link active' : 'nav-link'} href="#">Millennials</a>
                        </li>
                        <li className="nav-item" onClick={() => updateBirthRange('1997', '2012')}>
                            <a className={birthRange === '1997-2012' ? 'nav-link active' : 'nav-link'} href="#">Gen Z</a>
                        </li>
                    </ul>
                </div>
                <table className="table table-dark table-striped">
                    <thead>
                    <tr className="table-dark">
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Date of birth</th>
                        <th>Currently residing in</th>
                        <th>No. prizes</th>
                        <th>Profile</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <tr>
                                <td colSpan={6}>Loading...</td>
                            </tr> :
                            laureates.map(person => <tr key={person.id}>
                                <td>{person?.givenName?.en}</td>
                                <td>{person?.familyName?.en}</td>
                                <td>{person?.birth?.date}</td>
                                <td>{person?.birth?.place?.cityNow?.en}</td>
                                <td>{person?.nobelPrizes?.length}</td>
                                <td><a href={person?.wikipedia?.english} target="_blank" rel="noopener noreferrer">Wiki</a></td>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        <li onClick={prevPage} className={page == 1 ? "page-item disabled" : "page-item"}>
                            <span className="page-link">Previous</span>
                        </li>
                        <Page number={1} page={page} setter={setPage} />
                        <Page number={2} page={page} setter={setPage} />
                        <Page number={3} page={page} setter={setPage} />
                        <li onClick={nextPage} className={page == 3 ? "page-item disabled" : "page-item"}>
                            <span className="page-link">Next</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )
}

export default Laureates;