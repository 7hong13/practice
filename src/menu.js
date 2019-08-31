import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let CSSTransitionGroup = React.addons.CSSTransitionGroup;*/

class Submenu extends React.Component {
    render() {
        return (
            <ul className='submenu'>
                <li className='sub-item'>
                    <a>자유게시판</a>
                </li>
                <li className='sub-item'>
                    <a>Q&A</a>
                </li>
                <li className='sub-item'>
                    <a>스터디/프로젝트</a>
                </li>
            </ul>
        )
    }
}

export class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {showMenu: false};
    }
    handleHover(event){
        this.setState({showMenu: true});
    }
    handleLeave(event){
        this.setState({showMenu: false});
    }  
     
    render(){
        return (
            <header>
            <ul className='upperbar'>
                <li className='menu' onMouseLeave={this.handleLeave}>
                    <a onMouseEnter={this.handleHover}>커뮤니티</a>
                   </li>
                <li className='menu'><a>정보</a></li>
                <li className='menu'><a>전공</a></li>
                <li>로그인</li>
                <li>logo</li>
            </ul>
            </header>
        )
    }
}

ReactDOM.render(<Menu/>, document.getElementById('root'));

/*<div className="submenu-container">
<CSSTransitionGroup
  transitionName="slide"
  transitionEnterTimeout={300}
  transitionLeaveTimeout={300}
>
  { this.state.showMenu && <Submenu /> }
</CSSTransitionGroup>
</div>*/