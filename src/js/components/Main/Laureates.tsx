

const Laureates = () => (
    <main className="py-5">
        <div className="container">
            <h1 className="mb-4">Laureates</h1>
            <div className="d-flex justify-content-between">
                <ul className="nav nav-pills my-3 justify-content-end align-items-center">
                    <li className="nav-item me-2">
                        <span>Sort:</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Ascending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Descending</a>
                    </li>
                </ul>
                <ul className="nav nav-pills my-3 justify-content-end align-items-center">
                    <li className="nav-item me-2">
                        <span>Filter by:</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Boomers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Millennials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gen Z</a>
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
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
)

export default Laureates;