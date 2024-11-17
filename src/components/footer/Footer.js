/* import './Footer.css';
import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: {
                name: '',
                phoneNumber: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }


    render() {
        return (
            <footer>
                <input id="content" type="text" placeholder="Name" value={this.state.content.name} onChange={this.handleChange} />
                <input id="content" type="number" placeholder="Telephon number" value={this.state.content.phoneNumber} onChange={this.handleChange} />
                <span id="add-btn" onClick={() => this.props.createItem(this.state.content)}>Add</span>
            </footer>
        );
    }
}


export default Footer; */


// ==================================================================================================================================

// Kod iznad je zastareo način pisanja REACT komponenti takozvane Class components https://react.dev/reference/react/Component 
// Preporuka je da se koriste takozvane Functional components jer se lakše čitaju i pojednostavljena logika korišćenja. 
// Link za prikaz migracije:  https://react.dev/reference/react/Component#migrating-a-simple-component-from-a-class-to-a-function
// Vidim da si koristio jednu vrstu Functional components u sledećim fajlovima: 

// src/components/body/Body.js 
// src/components/header/Header.js
// src/components/item/Item.js
// src/components/items-active/ItemsActive.js
// src/components/items-all/ItemsAll.js
// src/components/items-completed/ItemsCompleted.js

// Što je dobar početak ali takođe postoje 2 vrste Functional components
// React Function Component i React Arrow Function Component, uglavnom se koriste React Arrow Function Component
// Link za pregled JavaScript osnova i različitih upotreba: https://www.robinwieruch.de/javascript-fundamentals-react-requirements/

import './Footer.css';

import React, { useState } from 'react';

const Footer = (props) => {
    const createItem = props.createItem;

    const contentTemplate = {
        name: '',
        phoneNumber: ''
    };

    const [content, setContent] = useState(contentTemplate);


    const handleChange = (event) => {
        setContent({
            ...content,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.name || !content.phoneNumber) {
            return alert('Please fill all fields');
        };
        createItem(content);
        setContent(contentTemplate);
    };


    return (
        <form onSubmit={handleSubmit}>
            <input id="name" type="text" placeholder="Name" name="name" value={content.name} onChange={(event) => handleChange(event)} />
            <input id="phoneNumber" type="text" placeholder="Phone number" name="phoneNumber" value={content.phoneNumber} onChange={(event) => handleChange(event)} />
            <button id="add-btn" type="submit" value="Add User">Add Contact</button>
        </form>
    );

};


export default Footer;