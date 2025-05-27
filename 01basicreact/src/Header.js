const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max) {
    return Math.floor(Math.random()*(max + 1));
}

function Header() {
return(
    <header>
        <img src="/logo512.png" alt="stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {reactDescriptions[genRandomInt(2)]} React concept you will need for almost any app you are going to build!
        </p>
    </header>
);
}
export default Header;

