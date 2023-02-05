import Head from 'next/head';
import React from 'react'
// import ReactStars from 'react-stars'
import CardQuery from '../components/cardDetail';

const dev = () => {
    // const ratingChanged = (newRating) => {
    //     console.log(newRating)
    // }
    return (
        <div>
            <Head>
                <title>Coursurf</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CardQuery />
            <CardQuery />
            <CardQuery />
            {/* <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} /> */}
        </div>
    )
}

export default dev;
