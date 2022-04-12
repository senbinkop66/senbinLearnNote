function UserGreeting(props){
    return "欢迎回来!";
}
function GuestGreeting(props){
    return "请先注册。";
}
function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById("example")
);