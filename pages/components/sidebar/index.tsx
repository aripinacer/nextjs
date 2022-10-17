import { menuType } from '../../../data/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'


type AppProps = {
    menu: menuType
};

function Sidebar({ menu }: AppProps) {

    const router = useRouter()
    const splitLocation = router.pathname.split("/");
    console.log(splitLocation)
    console.log(router.pathname)
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <a href="../../index3.html" className="brand-link">
                <img src="/assets/images/logo/irdrmuti.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/assets/images/mock/profile.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item">
                            <Link href="/"><a className={`nav-link ${router.pathname === `/` ? 'active' : ''}`}>
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    Dashboard
                                </p>
                            </a>
                            </Link>
                        </li>

                        {menu ? menu.dataUser.map(({ id, name, icon, link, path }) => {
                            return (

                                <li key={id} className="nav-item">
                                    <Link href={`${link}`}>
                                        <a className={`nav-link ${router.pathname === path ? 'active' : ''}`}>
                                            <i className={`nav-icon ${icon}`} />
                                            <p>
                                                {name}
                                            </p>
                                        </a>
                                    </Link>
                                </li>

                            )
                        }) : ''}

                        <li className="nav-header">{menu.dataAdmin.length !== 0 ? `ADMIN` : ``}</li>

                        {
                            menu ? menu.dataAdmin.map(({ id, name, icon, link , path}) => {
                                return (
                                    <li key={id} className="nav-item">
                                        <Link href={`${link}`}>
                                            <a className={`nav-link ${router.pathname === path ? 'active' : ''}`}>
                                                <i className={`nav-icon ${icon}`} />
                                                <p>
                                                    {name}
                                                </p>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })
                                : ''}

                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar