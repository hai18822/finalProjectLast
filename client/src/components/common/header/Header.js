import {Link } from 'react-router-dom'
import {Navbar} from '../../common'
import './Header.css'
function Header() {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <Link to="/kkkk" className="header-logo">Logo</Link>
                </section>
                <section className="header-top__navbar">
                    <section className='header-top__navigation'>
                        <Navbar/>
                    </section>
                <hr className='header-top__seperator'/>
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__phone">
sasdsd
                </section>
                <section className="header-bottom__email">
                        hailtgch@gmail.com
                </section>
            </section>

            
        </section>
    )
}

export default Header