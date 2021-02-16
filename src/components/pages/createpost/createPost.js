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

    //TODO: track changes in article elements !!!!!!!

    const [article, setArticle] = useState({
        title: "",
        description: "",
        elements: [],
    });

    const handleChange = (e) => {
        //TODO: check why that doesn't work:
        //setArticle({[e.target.id]: e.target.value});

        let old = article;
        if (e.target.id === "title") {
            setArticle({ title: e.target.value, description: old.description, elements: old.elements });
               
        } else if (e.target.id === "description") {
            setArticle({ title: old.title, description: e.target.value, elements: old.elements });
        }
    }

    const removeElement = (id) => {
        let elements = article.elements.filter(item => item.id != id);
        setArticle({ elements });
    }

    const goUp = (id) => {
        console.log("up!");
    }

    const goDown = (id) => {
        console.log("down!");
    }

    const renderArticleElement = (type, id) => {
        switch (type) {
            case "paragraph":
                return <div className="element-paragraph">
                    <textarea placeholder="type something here..."></textarea>
                </div>;
            case "subtitle":
                return <div className="element-subtitle">
                    <textarea id="subtitle-textarea" placeholder="type something here..."></textarea>
                </div>
            case "dots":
                return <div className="element-dots">
                    <span>...</span>
                </div>
            case "image":
                return <div className="element-img">
                    {article.elements[id].source === "" ? <div>
                        upload
                    </div> : <div>uploaded</div>}
                </div>
            default:
                break;
        }
    }

    const addAticleElement = (type) => {
        let element = { id: article.elements.length }

        switch (type) {
            case "paragraph":
                element = { ...element, type: "paragraph", content: "" };
                break;
            case "subtitle":
                element = { ...element, type: "subtitle", content: "" };
                break;
            case "dots":
                element = { ...element, type: "dots" };
                break;
            case "image":
                element = { ...element, type: "image", source: "" };
                break;
            default:
                break;
        }

        let old = article;
        setArticle({ elements: [...old.elements, element], title: old.title, description: old.description });
    }

    return (<div>
        <Navbar />
        <div className="article">
            <div className="top-bar">
                <div><span>Create new Post</span></div>
                <div className="btn">Share</div>
            </div>
            <div className="main-img"></div>
            <div><input type="text" placeholder="Title" id="title" autoComplete="off" onChange={handleChange} value={article.title} /></div>
            <div><input type="text" placeholder="Description" id="description" autoComplete="off" onChange={handleChange} value={article.description} /></div>
            <div className="topics-choose"> Choose tags </div>
            <div className="article-elements">
                {article.elements.map(item => {
                    return (<div key={item.id}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ComponentOptions id={item.id} remove={removeElement} up={goUp} down={goDown} /></div>
                        {renderArticleElement(item.type, item.id)}
                    </div>);
                })}

            </div>
        </div>
        <div className="add-controls">
            <Add width="30" height="30" />
            <div className="add-controlls-item" onClick={() => addAticleElement("paragraph")}><Paragraph width="24" height="24" /></div>
            <div className="add-controlls-item" onClick={() => addAticleElement("subtitle")} > <Subtitle width="24" height="24" /></div>
            <div className="add-controlls-item" onClick={() => addAticleElement("image")} > <Image width="24" height="24" /></div>
            <div className="add-controlls-item" onClick={() => addAticleElement("dots")} > <Dots width="24" height="24" /></div>
        </div>
    </div>);
}




export default connect()(CreatePost);