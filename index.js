marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();

const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

function App() {
    const [text, setText] = React.useState(initialState)


    return (
        <div id="wrapper" className="p-2">
            <div className="text-center" id="header">
                <h1>Markdown Previewer</h1>
            </div>
            <div className="d-flex p-4 justify-content-evenly">
                <div id="editorWrapper">
                    <div className="toolbar">
                        <h5>Editor</h5>
                    </div>
                    <textarea 
                        id="editor" 
                        name="text" 
                        cols="40" 
                        rows="20"
                        value={text}
                        onChange={e => setText(e.target.value)}>
                    </textarea>
                </div>
                <div id="previewWrapper">
                    <div className="toolbar">
                        <h5>Preview</h5>
                    </div>
                    <Preview markdown={text} />
                </div>
            </div>
        </div>
    )
};

function Preview({markdown}) {
    return(
        <div 
            dangerouslySetInnerHTML={{
                __html: marked(markdown, {renderer: renderer})
            }} id="preview"/>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))