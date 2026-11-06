
export function Header() {
  return (
    <header>
        <nav>
            <a id="top"></a>
            <div class="topnav" id="myTopnav">
                <div class="logo">
                    <img src="images/Logo_V1.png"/>
                </div>

                <a href="index.html" class="active" src="images/Logo_V1.png">Home</a>
                <a href="podcast.html">Podcast</a>
                <div class="dropdown">
                    <button class="dropbtn">Instructional Videos
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="study_topics_hebrew.html">Hebrew</a>
                        <a href="study_topics_greek.html">Greek</a>
                        <a href="study_topics_latin.html">Latin</a>
                        <a href="step_bible.html">Step Bible</a>
                        <a href="bible_hub.html">Bible Hub</a>
                        <a href="tlg.html">TLG</a>
                        <a href="perseus_digital_library">Perseus Digital Library</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">About
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="about_authors.html">Authors</a>
                        <a href="about_book.html">Book</a>
                    </div>
                </div>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
            <script src="JavaScript/myJavaScript.js"></script>
        </nav>
    </header>

  )
}



