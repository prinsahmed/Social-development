import React from 'react';
import NavBar from '../common/NavBar.jsx';
import Banner from '../../pages/home/Banner.jsx';
import Feature from '../../pages/home/Feature.jsx';
import Gallery from '../../pages/home/Gallery.jsx';
import NewsLetter from '../../pages/home/NewsLetter.jsx';
import Footer from '../common/Footer.jsx';



const HomeLayout = () => {
    return (

        <>

            <NavBar />
            <Banner />
            <main className='min-h-screen'>
                <title>Home</title>
                <div className='max-w-10/12 mx-auto'>
                    <Feature />
                    <Gallery />
                    <NewsLetter />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>


    );
};

export default HomeLayout;