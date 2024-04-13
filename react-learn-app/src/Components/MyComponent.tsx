import RenderIf from "./RenderIf";



 const MyComponent = ({dataIsReady,isAdmin,userHasPermissions}) =>{
    return (
        <div>
            <RenderIf isTrue={dataIsReady && (isAdmin || userHasPermissions)}>
                <SecretData />
            </RenderIf>
        </div>
    )
}

export default MyComponent ;