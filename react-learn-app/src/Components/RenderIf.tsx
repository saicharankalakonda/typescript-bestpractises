import React,{FC,ReactElement} from "react";



interface RenderIfProps {
    children: ReactElement | string 
    isTrue?:Boolean
    isFalse?:Boolean
}


// order not required while sending props 

 const RenderIf:FC<RenderIfProps> = ({children,isFalse,isTrue}) =>{
    if(isTrue){
        return <>{children}</>
    }

    if(isFalse){
        return <>{children}</>
    }

    return null;
}

export default RenderIf;