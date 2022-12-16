import { Component, useState } from "react";


let GalleryData = [
    {
        id: 1,
        image: 'https://ultron-official.netlify.app/assets/images/gallery/1.jpg',
        title: '',
        desc: 'Playstation',
        catagory: 'steam',
    },
    {
        id: 2,
        image: 'https://ultron-official.netlify.app/assets/images/gallery/2.jpg',
        title: '',
        desc: 'Playstation',
        catagory: 'origin',
    },
    {
        id: 3,
        image: 'https://ultron-official.netlify.app/assets/images/gallery/3.jpg',
        title: '',
        desc: 'Playstation',
        catagory: 'origin',
    },
    {
        id:4,
        image: 'https://ultron-official.netlify.app/assets/images/gallery/4.jpg',
        title: '',
        desc: 'Playstation',
        catagory: 'origin',
    },
]



const GallerySection = () => {

    const [items, setItems] = useState(GalleryData);
    const filterItem = (categItem) => {
        const updateItems = GalleryData.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }

    return (
        <div className="gallery-section padding-top padding-bottom">
            <div className="container">
                <ul className="gallery-filter">
                    <li onClick={() => setItems(GalleryData) }><span className="category">Show All</span> <span className="itemcount">04</span></li>
                    <li onClick={() => filterItem('origin') } ><span className="category">origin</span> <span className="itemcount">03</span></li>
                    <li onClick={() => filterItem('steam') } ><span className="category">steam</span> <span className="itemcount">01</span></li>
                </ul>
                <div className="row g-4 masonary-gallery">
                    {
                        items.map((elem) => {
                        const { id, image, title, desc, catagory } = elem;
                            return (
                                <div className="col-lg-4 col-sm-6 col-12 masonary-item" key={id}>
                                    <div className="gallery-item">
                                        <div className="gallery-thumb">
                                            <img src={image} alt="gallery" />
                                        </div>
                                        <div className="gallery-content">
                                            {/* <a href="assets/images/gallery/01.jpg" className="img-pop" target="_blank"><i className="icofont-eye"></i></a> */}
                                            {/* <h3 className="title">{title}</h3> */}
                                            {/* <span>{desc}</span> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
 
export default GallerySection;

