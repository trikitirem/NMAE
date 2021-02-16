import React, { useState } from 'react'
import { connect } from 'react-redux';
import Navbar from '../../navbar/navbar';
import ComponentOptions from '../../postComponents/options/options';
import './createPost.css';

function CreatePost() {
    const [article, setArticle] = useState({
        title: "",
        subtitle: "",
        article: [
            { id: 1, content: "Non aliqua sunt consectetur reprehenderit nostrud ullamco esse eiusmod do in sint ea. Dolor nulla et excepteur ullamco veniam ea laborum cillum quis. Duis tempor minim incididunt cupidatat enim ut commodo amet amet culpa cillum dolore ex sunt. Exercitation tempor dolor officia occaecat anim excepteur laboris laboris et aute cupidatat. In culpa incididunt laborum aliqua irure fugiat tempor." },
            { id: 2, content: "Non aliqua sunt consectetur reprehenderit nostrud ullamco esse eiusmod do in sint ea. Dolor nulla et excepteur ullamco veniam ea laborum cillum quis. Duis tempor minim incididunt cupidatat enim ut commodo amet amet culpa cillum dolore ex sunt. Exercitation tempor dolor officia occaecat anim excepteur laboris laboris et aute cupidatat. In culpa incididunt laborum aliqua irure fugiat tempor." },
        ],
    });

    return (<div>
        <Navbar />
        <div className="article">
            <div><span>Create new Post</span></div>
            <div className="main-img"></div>
            <div><input type="text" placeholder="Title" id="title" /></div>
            <div><input type="text" placeholder="Subtitle" id="subtitle" /></div>
            <div className="topics-choose"></div>
            <div className="article-elements">
                {article.article.map(item => {
                    return (<div key={item.id}>
                        <div style={{display: 'flex', justifyContent: 'center'}}><ComponentOptions /></div>
                        <p>{item.content}</p>
                    </div>);
                })}
            </div>
        </div>
    </div>);
}




export default connect()(CreatePost);