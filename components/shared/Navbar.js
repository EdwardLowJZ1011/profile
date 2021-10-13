import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'

const AppLink = ({children, className, href}) =>
    <Link href={href}><a className={className}>{children}</a></Link>

const AppNavbar = () => {

    return (
        <div className="navbar-wrapper">
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark fj-mw9">
                <AppLink href='/' className='mr-3 font-weight-bold navbar-brand'>Edward Low</AppLink>
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className='mr-auto'>
                        <AppLink href='/portfolio' className='nav-link mr-3'>Portfolios</AppLink>
                        <AppLink href='/forum/category' className='nav-link mr-3'>Forum</AppLink>
                        <AppLink href='/cv' className='nav-link mr-3'>CV</AppLink>
                    </Nav>

                    <Nav>
                        <AppLink href='/login' className='nav-link mr-3'>Sign In</AppLink>
                        <AppLink href='/register' className='mr-3 btn btn-success bg-green-2 bright '>Sign Up</AppLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default AppNavbar;