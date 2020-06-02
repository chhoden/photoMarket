import React, { Component } from 'react';
import './photo.css';

class Photo extends Component {

    render() {
        const { imageUrl, imageAlt, imageDescription, imageOwner, fileType, dimensions, category, uploadDate, price } = this.props.photo;
        return (
            <div className="column">
                <img src={imageUrl} style={{ width: "500px", height: "300px" }} alt={imageAlt} />
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
            </div>
        )
    }
}

export { Photo }