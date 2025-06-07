export default function TabButton( { children } ) {
    function clickHandleClick() {
        console.log('Hello World');
    }

    return (
    <li>
       < button onClick={handleClick()}>{children}</button>
       </li> 
    );
}