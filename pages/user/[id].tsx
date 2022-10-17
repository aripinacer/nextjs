import type { GetServerSideProps } from 'next'
import React from 'react'
import { menuDataAdmin, menuDataUser, menuType } from '../../data/menu'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

function UserView(props : menuType) {


    return (
        <div className="wrapper">
          <Header />
    
          <Sidebar menu={props} />
    
          <div className="content-wrapper">
            <Breadcrumb />
            <section className="content">
    
            </section>
          </div>
          <Footer />
        </div>
      )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
      props: {
        dataUser: menuDataUser ,
        dataAdmin: menuDataAdmin
      }
    }
  }

export default UserView
