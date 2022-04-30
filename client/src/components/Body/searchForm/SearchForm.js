import './SearchForm.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function SearchForm() {

    return (
        <Row>
            <Col>
                <div className="searchForm">
                    <form>
                        <input type="text" className='searchForm__input' placeholder='Enter address to search' />
                        <button className='searchForm__btn'>Search</button>
                    </form>
                </div>
            </Col>
        </Row>
    );
}

export default SearchForm;
