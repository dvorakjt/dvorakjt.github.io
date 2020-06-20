$(document).ready(function () {
    let a = 0; const b = [`Hi, I'm Joe. <i class="fas fa-mug-hot"></i> It's nice to meet you!`, "About me", "Coding and Music"], c = ["I'm a full-stack web developer, a classical clarinetist and educator, and a forward-thinking, problem-solving creative.", `I am currently studying full-stack web development through the Penn LPS Full-stack Coding Bootcamp. Prior to this I earned several degrees in
    clarinet performance, and have been teaching and freelancing on the clarinet in and around Philadelphia for the past 6 years. Both music and technology
    have been lifelong passions. I started playing the clarinet when I was 9, and when I was in high school I taught myself how to program simple computer games.
    `, `Computer programming and music are both pattern-based, and there is a certain satisfaction that one achieves by attaining refinement in each of these pursuits.
    I believe that pristine, simple webpage designs and smooth, seamless functionality are some of the most important things when it comes to building a website, and 
    I aim to achieve these in each project I undertake.`], d = ["Tell me more!", "Coding and music", "Who are you again ..?"]; $("#aboutMeBtn").on("click", function () { a++, 2 < a && (a = 0), $("#aboutMeH5").animate({ opacity: 0 }, 500, function () { $("#aboutMeH5").html(b[a]), $("#aboutMeH5").animate({ opacity: 1 }, 500, function () { }) }), $("#aboutMeP").animate({ opacity: 0 }, 500, function () { $("#aboutMeP").text(c[a]), $("#aboutMeP").animate({ opacity: 1 }, 500, function () { }) }), $("#aboutMeBtn").animate({ opacity: 0 }, 500, function () { $("#aboutMeBtn").text(d[a]), $("#aboutMeBtn").animate({ opacity: 1 }, 500, function () { }) }) }), $("#contactBtn").on("click", function () {
        $("#contactH5").animate({ opacity: 0 }, 500, function () {
            $("#contactCol").css("opacity", 0), $("#contactCol").html(`<ul>
        <li><b>Email: </b>dvorakjt@gmail.com</li>
        <li><b>Phone: </b>(610) 809-9473</li>
        <li><b>Github: </b><a
        href="https://github.com/dvorakjt" target="_blank">github.com/dvorakjt</a></li>
        <li><b>LinkedIn: </b><a
        href="https://www.linkedin.com/in/joseph-dvorak-16b565157/" target="_blank">linkedin.com/in/joseph-dvorak-16b565157/</a></li>
        <li><b>Resume: </b>
    <a href="https://drive.google.com/file/d/12cAmR5VR1pDYRFfqEgL_CxUzrXI914us/view?usp=sharing" target="_blank">Resume.pdf</a></li>
        </ul>`), $("#contactCol").animate({ opacity: 1 }, 500, function () { })
        }), $("#contactBtn").animate({ opacity: 0 }, 500, function () { })
    })
});