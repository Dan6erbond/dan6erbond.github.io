import React from "react";

export default function Tags() {
    return (
        <React.Fragment>
            <div style={{textAlign: 'center'}}>
                <hr/>
                <h2>Tags</h2>

                <a href="search.html?q=c#" className="tag">C#</a>
                <a href="search.html?q=java" className="tag">Java</a>
                <a href="search.html?q=discord" className="tag">Discord</a>
                <a href="search.html?q=reddit" className="tag">Reddit</a>
                <a href="search.html?q=fuzzle" className="tag">Fuzzle</a>
                <a href="search.html?q=projects" className="tag">Projects</a>
                <a href="search.html?q=python" className="tag">Python</a>
                <a href="search.html?q=javascript" className="tag">JavaScript</a>
                <a href="search.html?q=Staxel" className="tag">Staxel</a>
                <a href="search.html?q=Substarters" className="tag">Substarters</a>
            </div>

            <br/>
            <br/>
            <br/>
        </React.Fragment>
    );
}