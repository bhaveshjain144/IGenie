import { useEffect, useState } from "react";

const RatingComponent = (props: any) => {
    useEffect(() => {
        onRating(props.rating)

    }, [props.rating])
    const onRating = (rating: any) => {
        const raterParent = document.querySelector('#ratingParent')
        const stars = raterParent?.children
        if (stars) {
            for (let index = 0; index < 5; index++) {
                if (index < rating) {
                    stars[index].classList.add("str-hi");
                } else {
                    stars[index].classList.remove("str-hi");
                }
            }
        }

        props.setRating(rating)
    }
    return (
        <ul id="ratingParent" >
            <i onClick={(event: any) => onRating(1)} className='bx bxs-star'></i>
            <i onClick={(event: any) => onRating(2)} className='bx bxs-star'></i>
            <i onClick={(event: any) => onRating(3)} className='bx bxs-star'></i>
            <i onClick={(event: any) => onRating(4)} className='bx bxs-star'></i>
            <i onClick={(event: any) => onRating(5)} className='bx bxs-star'></i>
        </ul>
    )
}
export default RatingComponent;