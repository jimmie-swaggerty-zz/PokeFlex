import React from 'react'

const Header = (props) => {
    const {title} = props;
    return (
        <div>
            <h2 className={"bg bg-default"}>{title}</h2>
        </div>
    )
}
export default Header