import React from 'react'

export default function ProductItem() {
    const styles = {
        fontSize: '10px',
        fontWeight: 'normal'
    }
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 text-left">
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/700x400" alt />
                    <div className="card-body">
                        <h4 className="card-title text-primary ">Item One</h4>
                        <p className="card-text">$24.99</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div className="card-footer" style={styles}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                    </div>
                </div>

            </div>
        </div>
    )
}
