import {useState, useEffect} from 'react';
 
function Counterdown(){
    //targetSeconds, elapsetSeconds
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsetSeconds, setElapsetSeconds] = useState(0);
 
    useEffect(function(){
        if(targetSeconds == null)
            return;
        //targetSeconds tiene un valor
        setElapsetSeconds(0);
        let interval =setInterval(function(){
            setElapsetSeconds((elapsetSeconds) => elapsetSeconds + 1)
        }, 1000);
 
        return ()=>{
            clearInterval(interval);
        }
    }, [targetSeconds]);
 
    function parseForm(ev){
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }
    if(elapsetSeconds>= targetSeconds &&  targetSeconds !=null){
        return (
            <div>
                <p>Termino conteo </p>
                <button onClick={()=>setTargetSeconds(null)} >Reinciar</button>
            </div>
        )
        
    }
    if(targetSeconds!= null){
        return(
            <div>
                <p>Faltan {targetSeconds-elapsetSeconds} segundos</p>
            </div>
        )
    }
    return(
        <>
            <p>¿Cuántos segundos quiere contar?</p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input type="number" name="seconds"/>
                <button>Iniciar</button>
            </form>
        </>
    );
}
 
export default Counterdown;