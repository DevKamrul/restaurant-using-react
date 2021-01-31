import React, { Component } from 'react';
import DISHES from '../../data/Dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail'


class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = dish => {
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={this.onDishSelect} />
            );
        })

        let dishDetails = null;
        if (this.state.selectedDish != null) {
            dishDetails = <DishDetail dish={this.state.selectedDish} />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetails}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;