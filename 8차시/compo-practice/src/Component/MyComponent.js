const MyComponent = (props) => {
    return <div>Hello {props.name}</div>;
}

MyComponent.defaultProps ={
    name: '기본'
}

export default MyComponent;