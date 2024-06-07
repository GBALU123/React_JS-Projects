
const parent = React.createElement("div",{id:"parent"},

React.createElement("div",{id:"child"},

    [React.createElement("h1",{},"i am a h1 tag"),React.createElement("h2",{},"i am a h2 tag")]

));

console.log(parent);// return the object
const container = ReactDOM.createRoot(document.getElementById("container"));

container.render(parent);

// const heading = React.createElement("h1",
// {id:"heading",xyz:"abc"},// These are the props
// "Hello world from React");// These are the children



// console.log(heading);// return the object
// const container = ReactDOM.createRoot(document.getElementById("container"));

// container.render(heading);
