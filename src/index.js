import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Menu} from './menu.js';
import {Sidemenu} from './sidemenu.js';
import {MainPage} from './mainPage.js';

class Template extends React.Component{
    render(){
        return (
            <div className='container'>
                <header>
                   <Menu/>; 
                </header>
                <section className='content'>
                    <nav>
                        <Sidemenu/>;
                    </nav>
                    <main>
                        <MainPage/>;
                    </main>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<Template/>, document.getElementById('root'));