import React, { Component } from 'react';
import '../../support/styles/searchPopuler.css'

class SearchFilter extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mb-3 mt-3 searchFilterPopuler">
                    <div className="col-sm-2">
                        <h5>Pencarian Populer</h5>
                    </div>
                    <div className="col-sm-1 ml-3">
                        <input type="button" className="btn btn-outline-danger btn-sm rounded-pill" value="Samsung J5" />
                    </div>
                    <div className="col-sm-1 ml-3">
                        <input type="button" className="btn btn-outline-danger btn-sm rounded-pill" value="TV Cocoa" />
                    </div>
                    <div className="col-sm-1 ml-3">
                        <input type="button" className="btn btn-outline-danger btn-sm rounded-pill" value="Celana Pria" />
                    </div>
                    <div className="col-sm-1 ml-3">
                        <input type="button" className="btn btn-outline-danger btn-sm rounded-pill" value="Laptop Core i5" />
                    </div>
                    <div className="col-sm-1 ml-3">
                        <input type="button" className="btn btn-outline-danger btn-sm rounded-pill" value="Pakaian Wanita" />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default SearchFilter;