import React from 'react';

function SearchBar({ empSearchData }) {

    const handleOnChange = (e) => {
        empSearchData(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div class="row justify-content-center">
            <div class="col-5">
                <div className="form-group p-2 m-3">
                    <input
                        type="text"
                        onChange={handleOnChange}
                        name="search"
                        list="term"
                        className="form-control"
                        placeholder="Search Employee Name or Email"
                        id="term"
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;