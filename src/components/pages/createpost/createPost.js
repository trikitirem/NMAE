import React, { useState } from 'react'
import { connect } from 'react-redux';
import Navbar from '../../navbar/navbar';
import ComponentOptions from '../../postComponents/options/options';
import ImageElement from '../../postComponents/image/image';
import './style.css';

//icons
import { ReactComponent as Add } from './../../../assets/icons/plus-circle.svg';
import { ReactComponent as Paragraph } from './../../../assets/icons/paragraph.svg';
import { ReactComponent as Subtitle } from './../../../assets/icons/subtitle.svg';
import { ReactComponent as Image } from './../../../assets/icons/image.svg';
import { ReactComponent as Dots } from './../../../assets/icons/dots.svg';
import { addArticle } from '../../../store/actions/articleActions';

function CreatePost({ addArticle }) {
    const [article, setArticle] = useState({
        title: "",
        description: "",
        elements: [],
    });

    const handleChange = (e) => {
        let newState = article;
        if (e.target.id === "title")
            newState.title = e.target.value;
        else if (e.target.id === "description")
            newState.description = e.target.value;

        setArticle({ ...newState });
    }

    const removeElement = (id) => {
        let newState = article;
        newState.elements = newState.elements.filter(item => item.id != id);
        setArticle({ ...newState });
    }

    const goUp = (id) => {
        if (id > 0) {
            let newState = article;
            const element1 = newState.elements[id];
            const element2 = newState.elements[id - 1];
            newState.elements.splice(id - 1, 2, element1, element2);
            moveElements(newState);
        }
    }

    const goDown = (id) => {
        if (id < article.elements.length - 1) {
            let newState = article;
            const element1 = newState.elements[id + 1];
            const element2 = newState.elements[id];
            newState.elements.splice(id, 2, element1, element2);
            moveElements(newState);
        }
    }

    const moveElements = (newState) => {
        for (let i = 0; i <= newState.elements.length - 1; i++) {
            newState.elements[i].id = i;
        }

        setArticle({ ...newState });
    }

    const renderArticleElement = (type, id) => {
        switch (type) {
            case "paragraph":
                return <div className="element-paragraph"
                    onChange={e => textElsementsStateChange(e, id)}>
                    <textarea placeholder="type something here..." ></textarea>
                </div>;
            case "subtitle":
                return <div className="element-subtitle">
                    <textarea id="subtitle-textarea" placeholder="type something here..."
                        onChange={e => textElsementsStateChange(e, id)}></textarea>
                </div>
            case "dots":
                return <div className="element-dots">
                    <div>
                        <span>...</span>
                    </div>
                </div>
            case "image":
                return <div className="element-img">
                    <ImageElement id={id} uploaded={article.elements[id].source === "" ? false : true}
                        save={uploadImage} image={article.elements[id].source} />
                </div>
            default:
                break;
        }
    }

    const textElsementsStateChange = (e, id) => {
        let newState = article;
        newState.elements[id].content = e.target.value;
        setArticle({ ...newState });
    }

    const uploadImage = (id, src) => {
        let newState = article;
        newState.elements[id].source = src;
        setArticle({ ...newState });
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

        let newState = article;
        newState.elements = [...newState.elements, element]
        setArticle({ ...newState });
    }

    return (<div>
        <Navbar />
        <div className="article">
            <div className="top-bar">
                <div><span>create new post</span></div>
                <div className="btn" onClick={()=> addArticle(article)}>share</div>
            </div>
            <div className="main-img"></div>
            <div><input type="text" placeholder="title" id="title" autoComplete="off" onChange={handleChange} value={article.title} /></div>
            <div><input type="text" placeholder="description" id="description" autoComplete="off" onChange={handleChange} value={article.description} /></div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (data) => dispatch(addArticle(data)),
    };
}

export default connect(null, mapDispatchToProps)(CreatePost);