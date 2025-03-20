import { useRef, useState } from "react";
import Tooltip from "./tooltip";

function TooltipText(props) {
    let [tooltipDomRect, setTooltipDomRect] = useState(null);
    let [showTooltip, setShowTooltip] = useState(false);
    let spanElement = useRef();

    function handleMouseOver() {
        if (spanElement.current) {
            let domData = spanElement.current.getBoundingClientRect();
            setTooltipDomRect(domData);
            setShowTooltip(true);
        }
    }

    return (
        <>
            <span 
                className="tooltip_text" 
                ref={spanElement}
                onMouseLeave={() => setShowTooltip(false)}
                onMouseOver={handleMouseOver}
            >
                {props.children}
            </span>
            {
                showTooltip && tooltipDomRect && (
                    <Tooltip domRect={tooltipDomRect} text={props.tooltip} />
                )
            }
        </>
    );
}

export default TooltipText;

