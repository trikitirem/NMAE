import React from 'react'
import './style.css';

export default function ImageElement({ id, uploaded, save, image }) {

    const displayImage = (e) => {
        if (e.target.files.length > 0) {
            var src = URL.createObjectURL(e.target.files[0]);
            save(id, src);
        }
    }

    //TODO: style ImageUploader
    return (<div>
        {uploaded ?
            <div className="image-display"><img src={image} alt="img" /></div> :
            <div className="img-input">
                <div>
                    <label htmlFor="img-input">Upload image</label>
                    <input id="img-input" type="file" accept="image/*" onChange={displayImage} />
                </div>
            </div>
        }
    </div>);
}