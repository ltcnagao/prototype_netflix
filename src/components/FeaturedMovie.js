/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    return(
       <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.original_name}</div>
                    </div>
                </div>
            </div>
       </section>
    );
}