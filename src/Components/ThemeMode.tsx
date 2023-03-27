import React, {useState} from 'react';
import data from '../data.json';

function ThemeMode (props:{
    theme: string;
}){
    const [theme, setTheme] = useState(props.theme);
    const [svg, setSVG] = useState(data.theme.moon);

    const clickHandler = () =>{
        console.log("clicked")

        if(theme == "dark"){
            document.body.style.background = "#fff";
            document.body.style.color = "#333";
            setTheme("light")
            setSVG(data.theme.moon)
        }else{
            document.body.style.background = "#333";
            document.body.style.color = "#fff";
            setTheme("dark")
            setSVG(data.theme.sun)
        }
    }
    return(
        
        <div>
            <button onClick={clickHandler} className='button'>
                <span style={{visibility: 'hidden'}}>{theme}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d={svg}/></svg>
            </button>
        </div>
    )
}export default ThemeMode;