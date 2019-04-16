import React from 'react'
import './MenuItem.css'

class MenuItem extends React.Component {

    render() {

        let Background = this.props.image
        return (
            <div className='menu-item-container'>
                <div className="image" style={{
                    backgroundImage: "url(" + Background + ")"
                }}/>
                <div className="image-text">
                    {this.props.description}
                </div>
            </div>
        )
    }
}

export default MenuItem;