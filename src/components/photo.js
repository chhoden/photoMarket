import React from 'react';
import './photo.css';

const Photo = (props) => {
    const { imageUrl, imageAlt, imageDescription, imageOwner, fileType, dimensions, category, uploadDate, price } = props.photo;

    // const onClickHandler = () => {
    //     this.props.history.push('/photo');
    // }

    return (
        <picture className="column">
            <img src={imageUrl} alt={imageAlt} />
            {/* <div className="descriptionBox">
                    < h6>{imageDescription}</h6>
                    <span className="imageBy">By {imageOwner}</span>
                    <table>
                        <tr>
                            <th>File Type</th>
                            <th>Dimensions</th>
                            <th>Category</th>
                            <th>Upload Date</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>{fileType} </td>
                            <td>{dimensions}</td>
                            <td>{category}</td>
                            <td>{uploadDate}</td>
                            <td>${price}</td>
                        </tr>
                    </table>
                </div> */}
        </picture>
    )
}

export { Photo }