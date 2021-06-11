import { useEffect, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';

function getThumbnail(id) {
    useEffect(
        fetch(`https://moderato-backend.herokuapp.com/api/v1/photos/${id}`)
            .then(response => response.json())
            .then(data => console.log(data)), [])
}

function listingDrag(listings) {
    return (
        listings.map(data => {
            return (
                <Link className="drag-listing">

                </Link>
            )
        })
    )
}

export default function categoryScroll(id) {
    const [listings, setListings] = useState([]);
    useEffect(
        fetch(`https://moderato-backend.herokuapp.com/api/v1/listings/category${id}`)
            .then(response => response.json())
            .then(data => setListings(data.listings)), [])


    return (
        <div className="drag-list">
            <div className="drag-title">Electronics</div>
            <ScrollContainer className="drag-container">
                {listingDrag(listings)}
            </ScrollContainer>
        </div>
    )
}