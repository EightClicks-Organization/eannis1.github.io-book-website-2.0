import noVideo from "../assets/pexels-alleksana-4271927.jpg"
import { BackToTop } from "../components/BackToTop"

function VideoEmbed({videoId, title}) {
    return (
        <iframe 
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
        />
    )

}

export function SplitView({ instructions, src, title, direction = 'row' }) {
  return (
    <div className={`split split-${direction}`}>
      <section className="split-instructions">{instructions}</section>
      <iframe className="split-frame" src={src} title={title} />
    </div>
  );
}

export function Step_Bible() {
    return (
        <>
            <h1>Instructional Videos: Step Bible</h1>

            <div className="video_container">

                <div className="card2">
                    <h2>Introduction to Step Bible</h2>
                    <VideoEmbed videoId={"Y3Z9xHXo_7w"} title={"StepBible Introduction"} />
                </div>

                <div className="card2">
                    <h2>Greek Concordance - LSJ</h2>
                    <VideoEmbed videoId={"xk7ZtcMNJQo"} title={"Step Bible Greek Concordance"} />
                </div>

                <div className="card2">
                    <h2>Greek Dictionary (abbreviated) - LSJ</h2>
                    <VideoEmbed videoId={"hacf3As6SBc"} title={"Step Bible Greek Dictionary"} />
                </div>

                {/* <!-- Move Hebrew Concordance above Greek concordance and dictionary when all videos are done. Check this! --> */}
                <div className="card2">
                    <h2>Hebrew Concordance - LSJ</h2>
                        <img src={noVideo}/>
                </div>

                <div className="card2">
                    <h2>Searching LXX: Connecting the OT and NT</h2>
                        <img src={noVideo}/>
                </div>

                <div className="card2">
                    <h2>Parsing Grammar: Hebrew</h2>
                        <img src={noVideo}/>
                </div>

                <div className="card2">
                    <h2>Parsing Grammar: Greek</h2>
                    <img src={noVideo}/>
                </div>
                
            </div>
            <iframe
                src="https://www.stepbible.org"

            />

        </>

    );
}
