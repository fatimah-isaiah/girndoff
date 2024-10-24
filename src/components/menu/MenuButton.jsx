export default function MenuButton({children,toggle}){
    return(
        <div onClick={toggle}>{children}</div>
    )
}