import { useState } from "react";
import "./Step_Bible.css"

function VideoEmbed({videoId, title}) {
    return (
        <iframe
            className="youtube-frame"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
        />
    )

}

export function SplitView({ steps, src, title, direction = 'row' }) {
    const [index, setIndex] = useState(0);
    const step = steps[index];
    const isFirst = index === 0;
    const isLast = index === steps.length - 1;

    return (
        <div className={`split split-${direction}`}>
            <section className="split-instructions">
                <p className="step-count">
                    Step {index + 1} of {steps.length}
                </p>

                <div className="step-body">
                    <h2>{step.title}</h2>
                    {step.content}
                </div>

                <div className={"step-nav"}>
                    <button onClick={() => setIndex(index - 1)} disabled={isFirst}>
                        Back
                    </button>
                    <button onClick={() => setIndex(index + 1)} disabled={isLast}>
                        Next
                    </button>
                </div>
            </section>

            <iframe className="split-frame" src={src} title={title} />
        </div>
    );
}

const steps = [
    {
        title: "Introduction to Step Bible",
        content: (
            <VideoEmbed videoId={"Y3Z9xHXo_7w"} title={"StepBible Introduction"} />
        )
    },
    {
        title: "Greek Concordance - LSJ",
        content: (
            <VideoEmbed videoId={"xk7ZtcMNJQo"} title={"Step Bible Greek Concordance"} />
        )
    },
    {
        title: "Greek Dictionary (abbreviated) - LSJ",
        content: (
            <VideoEmbed videoId={"hacf3As6SBc"} title={"Step Bible Greek Dictionary"} />
        )
    }
]

// {/* <!-- Move Hebrew Concordance above Greek concordance and dictionary when all videos are done. Check this! --> */}
// <div className="card2">
// <h2>Hebrew Concordance - LSJ</h2>
// <img src={noVideo}/>
// </div>
//
// <div className="card2">
// <h2>Searching LXX: Connecting the OT and NT</h2>
// <img src={noVideo}/>
// </div>
//
// <div className="card2">
// <h2>Parsing Grammar: Hebrew</h2>
// <img src={noVideo}/>
// </div>
//
// <div className="card2">
// <h2>Parsing Grammar: Greek</h2>
// <img src={noVideo}/>
// </div>
// </div>
// </>

export function Step_Bible() {
    return (
            <SplitView
                src={"https://www.stepbible.org/?q=version=ESV&skipwelcome"}
                title={"STEP BIBLE"}
                direction="row"
                steps={steps}
            />
    );
}
