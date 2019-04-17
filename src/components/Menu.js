import React from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import Modal from './Modal';

import './Menu.css'

class Menu extends React.Component {

    constructor() {
        super();
        this.getStarters = this.getStarters.bind(this);
        this.getMains = this.getMains.bind(this);
        this.getDesserts = this.getDesserts.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    state = {
        menuItems: [],
        active: [true,false,false],
        modalVisible: false,
        imgLink: ''
    }

    componentDidMount() {

        this.getStarters();
    }

    getStarters() {
        //i guess it should be an API call to get the images and info, but i'll use static code instead
        let mains = [];

        let item = {
            img: 'https://burgersbar.co.il/wp-content/uploads/2018/11/%D7%A1%D7%9C%D7%98_%D7%99%D7%A8%D7%A7%D7%95%D7%AA.png',
            text: 'Big Green Salad'
        }
        mains.push(item);

        item = {
            img: 'http://pngimg.com/uploads/barbecue/barbecue_PNG64.png',
            text: 'Barbecue Wings'
        }

        mains.push(item);

        item = {
            img: 'https://burgersbar.co.il/wp-content/uploads/2019/01/%D7%98%D7%91%D7%A2%D7%95%D7%AA-%D7%91%D7%A6%D7%9C-1.png',
            text: 'Onion Rings'
        }

        mains.push(item);

        item = {
            img: 'http://pngimg.com/uploads/falafel/falafel_PNG55.png',
            text: 'Hummus plate with Falafel'
        }

        mains.push(item);


        this.setState({menuItems:mains, active:[true,false,false]});
    }

    getMains() {
        //i guess it should be an API call to get the images and info, but i'll use static code instead
        let mains = [];

        let item = {
            img: 'https://burgersbar.co.il/wp-content/uploads/2018/10/img-burger.png',
            text: 'Special Hamburger'
        }
        mains.push(item);

        item = {
            img: 'https://burgersbar.co.il/wp-content/uploads/2019/01/%D7%9B%D7%A8%D7%99%D7%9A-%D7%A4%D7%95%D7%A8%D7%95%D7%91%D7%9C%D7%95.png',
            text: 'Portabello Sandwich'
        }
        
        mains.push(item);

        item = {
            img: 'http://pngimg.com/uploads/pasta/pasta_PNG90.png',
            text: 'Spaghetti Bolognese'
        }

        mains.push(item);

        item = {
            img: 'http://pngimg.com/uploads/barbecue/barbecue_PNG37.png',
            text: 'Steak with French Fries'
        }

        mains.push(item);

        item = {
            img: 'http://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14101.png',
            text: 'Fried Chicken with Rice'
        }

        mains.push(item);

        item = {
            img: 'http://pngimg.com/uploads/kebab/kebab_PNG51.png',
            text: 'Shishlik Kebab'
        }

        mains.push(item);

        item = {
            img: 'http://pngimg.com/uploads/schnitzel/schnitzel_PNG10.png',
            text: 'Schnitzel with French Fries'
        }

        mains.push(item);

        this.setState({menuItems:mains, active:[false,true,false] });

    }

    getDesserts() {
        let desserts = [];

        let item = {
            img: 'http://pngimg.com/uploads/waffle/waffle_PNG74.png',
            text: 'Belgian Waffle'
        }

        desserts.push(item);

        item = {
            img: 'http://pngimg.com/uploads/croissant/croissant_PNG46697.png',
            text: 'Chocolate Croissant'
        }

        desserts.push(item);

        item = {
            img: 'http://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png',
            text: 'Strawberry Ice Cream'
        }

        desserts.push(item);

        item = {
            img: 'http://pngimg.com/uploads/donut/donut_PNG96.png',
            text: 'Dunkin Donut'
        }

        desserts.push(item);

        this.setState({menuItems: desserts, active:[false,false,true]});
    }

    closeModal() {
        this.setState({modalVisible: false});
    }

    openModal(img) {
        
        this.setState({imgLink: img, modalVisible: true});
    }

    render() {

        let renderMenuItems = this.state.menuItems.map((item,key) => {
            return (
             <MenuItem image={item.img} description={item.text} myFunction={this.openModal}/>
            )
        })

        let Background = this.state.modalVisible ? this.state.imgLink : ''
        return (
            <div className='menu-container'>
                <Header />
                <Modal visible={this.state.modalVisible} myFunction={this.closeModal}>
                    <div className='modal-content'style={this.state.modalVisible ? {backgroundImage: "url(" + Background + ")"} : {}} onClick={event => event.stopPropagation()}/>
                </Modal>
                <div className='menu-grid'>
                    <div className='menu-side'>
                        <span className={this.state.active[0] ? "active" : "menu-categories"} onClick={this.getStarters}>Starters</span>
                        <span className={this.state.active[1] ? "active" : "menu-categories"} onClick={this.getMains}>Mains</span>
                        <span className={this.state.active[2] ? "active" : "menu-categories"} onClick={this.getDesserts}>Desserts</span>
                    </div>
                    <div className='menu-content'>
                        {renderMenuItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;