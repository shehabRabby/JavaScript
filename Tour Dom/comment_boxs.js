// step-1 : set an event handler to the button
document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    // step-2: get the text writen in the comment
    const textBox = document.getElementById("comment-text-box");
    const newComment = textBox.value;
    // console.log(newComment);

    // step-3: get the parent node where to punblish comment
    const commentContainer = document.getElementById("comment-container");
    console.log(commentContainer);

    // step-4: create a comment paragraph and set the innerText
    const commentElement = document.createElement("p");
    commentElement.classList.add("comment");
    commentElement.innerText = newComment;

    //step-5: append the new p tag to the parent node
    commentContainer.appendChild(commentElement);

    // step-6: clean the text area
    textBox.value = "";
  });
