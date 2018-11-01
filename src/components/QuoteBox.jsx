import React from 'react';


const QuoteBox = ({quote}) => {
    return (
    <div className="pic-bubble">
        <span className="pics">{quote.author === "Mark" ? 
            <img src="https://memegenerator.net/img/images/300x300/15212529.jpg" alt="mark-peep-show"></img> : 
            quote.author === 'Jez' ?
            <img src="https://vignette.wikia.nocookie.net/peepshow/images/f/f4/6a00e553cf4fe68834012876bddd17970c-320wi.png/revision/latest?cb=20110827001238" alt="jez-peep-show"></img> :
            <img src="https://vignette.wikia.nocookie.net/peepshow/images/f/f6/Superhans.jpg/revision/latest/scale-to-width-down/220?cb=20090619222643" alt="super-hans-peep-show"></img>}
        </span>
        
        {quote.text && <span className="bubble"><p className="quote">"{quote.text}"</p></span>} 
    </div>
    );
};

export default QuoteBox;

