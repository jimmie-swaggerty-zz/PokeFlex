import React from 'react'

const Header = (props) => {
    const {title, subtitle, bg} = props;
    return (
        <div className="container-flex header">
            <div className={"row bg bg-default corners "+bg}>
                <div className="col">
            <h2 className="pokeheader">{title}</h2>
            </div>
                {subtitle && <div className="col">
            <h2 className="header align-right">{subtitle}</h2>
            </div>}
        </div>
        </div>
    )
}
export default Header