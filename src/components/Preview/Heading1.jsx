import React from 'react'

const Heading1 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        wordBreak:'break-all',
        fontSize:'0.7rem',
        margin:'10px 0px 5px 0px'
    }
    return (
        <>
        <h1 className='peview-head1' style={style}>{props.children}</h1>
        </>
    )
}

export default Heading1