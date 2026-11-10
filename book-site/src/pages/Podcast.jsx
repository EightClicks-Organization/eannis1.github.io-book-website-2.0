import noVideo from "../assets/pexels-alleksana-4271927.jpg"

export function Podcast() {
    return (
        <>
        <h1>Podcast Name</h1>

            <div className="podcast-episode">

                <div className="card2">
                    <h2>Episode 1: Introduction to the Podcast</h2>
                    <h4>Date of Episode</h4>
                    <div className="video_container">
                        <img src={noVideo} />
                        {/* Add audio element here when episode is ready */}
                        {/* // <audio controls> */}
                        {/* //     <source src={noVideo} type="audio/mpeg"> */}
                        {/* //     Your browser does not support the audio element. */}
                        {/* // </audio> */}
                    </div>
                    <p>Episode 1 covers the basics of what to expect from the podcast.</p>
                </div>

                <div className="card2">
                    <h2>Episode 2: The Book</h2>
                    <h4>Date of Episode</h4>
                    <div className="video_container">
                        <img src={noVideo} />
                    </div>
                    <p>Description of Episode 2 goes here.</p>
                </div>

            </div>
        </>

    );

}
