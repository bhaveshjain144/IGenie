import { Table } from "react-bootstrap";

const SearchComponent = (props: any) => {
    return (
        <>
            <div className="search-block">  
                <input type="search" aria-label="Search" placeholder="Search" />
                <i className='bx bx-search search-block-icon' ></i>
            </div>
        </>
    )
}
export default SearchComponent;