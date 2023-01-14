"use strict";

function Project(props) {
  return React.createElement("figure", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, React.createElement("img", {
    src: props.img
  })), React.createElement("figcaption", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.caption)));
}

function ProjectList() {
  return React.createElement("div", {
    id: "img-container"
  }, React.createElement(Project, {
    img: "../image/Youtube.png",
    caption: "Youtube",
    url: "https://www.youtube.com/@businessgame/featured"
  }), React.createElement(Project, {
    img: "../image/Avatar Builder.png",
    caption: "Unseen World",
    url: "https://unseenworld.substack.com/"
  }));
}

var el = React.createElement(ProjectList, null);
ReactDOM.render(el, document.getElementById("img-container"));
