// Задание 3: Теги для заметок. Уровень сложности: выше среднего
// При создании заметки пользователь может указать список тегов для нее. 
// Затем, при нажатии на тег, должны отфильтровываться заметки с данным тегом.
import React from 'react'
//import React, {Component} from 'react';
import './Textarea.css'

class Textarea extends React.Component{
    constructor(props){
        super(props);        
        this.linkTextarea = React.createRef();
        this.textColor = React.createRef();
        this.tags = React.createRef();        
    }
    
    render(){
        return(
            <div className="textarea">
                <textarea id="txtarea" placeholder="Введите вашу заметку" 
                    cols="110" 
                    rows="4" 
                    ref={this.linkTextarea}></textarea><br />
                Select color 
                <input type="color" ref={this.textColor} /> <br />
                Добавьте теги к вашей заметке:
                <input type="text" ref={this.tags}/><br />
                <button className="bttn" onClick={
                    () => {this.props.handlerClick(
                        this.linkTextarea.current.value, 
                        this.textColor.current.value,
                        this.tags.current.value)
                    }}>Добавить
                </button>
                
            </div>
        )        
    }

    

}

export default Textarea