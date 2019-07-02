import React, { Component } from 'react';
import './loginAndRegister.css';

class Footer extends Component {
    render() {
        return (
            <footer className='page-footer font-small footerBackgroundColor '>
                <div className='footer-copyright text-center py-3'>
                    <a href='https:/myuniverselol.com' className='footerTextColor' > © 2019 Copyright: myuniverselol.com</a>
                </div>
            </footer>
        )
    }
}

export default Footer