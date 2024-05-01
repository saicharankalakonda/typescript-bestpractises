import RenderIf from "./RenderIf";


export const removeKey = (key:any,obj:any) =>{
    const{[key]:omitted,...res} = obj;
    return res;
}

 const MyComponent = ({dataIsReady,isAdmin,userHasPermissions}:any) =>{

    console.log(removeKey("bar",{foo:1,bar:2}));

    return (
        <div>
            <RenderIf isTrue={dataIsReady && (isAdmin || userHasPermissions)}>
                <SecretData />
            </RenderIf>
        </div>
    )
}

export default MyComponent ;