import React, { useState } from 'react'
import { connect } from 'react-redux';
import Navbar from '../../navbar/navbar';
import ComponentOptions from '../../postComponents/options/options';
import './createPost.css';

//icons
import { ReactComponent as Add } from './../../../assets/icons/plus-circle.svg';
import { ReactComponent as Paragraph } from './../../../assets/icons/paragraph.svg';
import { ReactComponent as Subtitle } from './../../../assets/icons/subtitle.svg';
import { ReactComponent as Image } from './../../../assets/icons/image.svg';
import { ReactComponent as Dots } from './../../../assets/icons/dots.svg';

function CreatePost() {
    const [article, setArticle] = useState({
        title: "",
        description: "",
        elements: [
            { id: 1, type: "paragraph", content: "Non aliqua sunt consectetur reprehenderit nostrud ullamco esse eiusmod do in sint ea. Dolor nulla et excepteur ullamco veniam ea laborum cillum quis. Duis tempor minim incididunt cupidatat enim ut commodo amet amet culpa cillum dolore ex sunt. Exercitation tempor dolor officia occaecat anim excepteur laboris laboris et aute cupidatat. In culpa incididunt laborum aliqua irure fugiat tempor." },
            { id: 2, type: "paragraph", content: "Non aliqua sunt consectetur reprehenderit nostrud ullamco esse eiusmod do in sint ea. Dolor nulla et excepteur ullamco veniam ea laborum cillum quis. Duis tempor minim incididunt cupidatat enim ut commodo amet amet culpa cillum dolore ex sunt. Exercitation tempor dolor officia occaecat anim excepteur laboris laboris et aute cupidatat. In culpa incididunt laborum aliqua irure fugiat tempor." },
            { id: 3, type: "dots" },
        ],
    });

    const removeElement = (id) => {
        let elements = article.elements.filter(item => item.id != id);
        setArticle({ elements });
    }

    return (<div>
        <Navbar />
        <div className="article">
            <div className="top-bar">
                <div><span>Create new Post</span></div>
                <div className="btn">Share</div>
            </div>
            <div className="main-img"></div>
            <div><input type="text" placeholder="Title" id="title" autoComplete="off" /></div>
            <div><input type="text" placeholder="Subtitle" id="subtitle" autoComplete="off" /></div>
            <div className="topics-choose"></div>
            <div className="article-elements">
                {article.elements.map(item => {
                    return (<div key={item.id}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}><ComponentOptions id={item.id} remove={removeElement} /></div>
                        {item.type === "paragraph" ?
                            <p>{item.content}</p>
                            : <div style={{ letterSpacing: "2px", textAlign: 'center' }}><span>...</span></div>}
                    </div>);
                })}

            </div>
        </div>
        <div className="add-controls">
            <Add width="30" height="30" />
            <div className="add-controlls-item"><Paragraph width="24" height="24" /></div>
            <div className="add-controlls-item"><Subtitle width="24" height="24" /></div>
            <div className="add-controlls-item"><Image width="24" height="24" /></div>
            <div className="add-controlls-item"><Dots width="24" height="24" /></div>
        </div>
    </div>);
}




export default connect()(CreatePost);