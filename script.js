let posts = [
{title:"Welcome to My Blog",content:"This is my first blog post. I created this website to share my thoughts, ideas and things I learn. More posts coming soon!"},
{title:"How I Built This Website",content:"I created this simple blog using only HTML, CSS and JavaScript. The posts are stored inside the browser so they stay even after refreshing."},
{title:"My Goals",content:"I want to improve my skills, learn more about technology and create useful projects. Step by step I will grow."},
{title:"Thank You for Visiting",content:"I really appreciate that you visited my blog. Feel free to come back anytime to see new updates."}
];

if(localStorage.blogPosts){
  posts = JSON.parse(localStorage.blogPosts);
}

function showForm(){
  document.getElementById("formBox").style.display="block";
}

function hideForm(){
  document.getElementById("formBox").style.display="none";
}

function saveBlog(){
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  if(title=="" || content==""){
    alert("Please fill all fields");
    return;
  }

  posts.push({title,content});
  localStorage.blogPosts = JSON.stringify(posts);

  displayBlogs();
  hideForm();

  document.getElementById("title").value="";
  document.getElementById("content").value="";
}

function displayBlogs(){
  let html="";
  posts.forEach(post=>{
    html+=`
      <div class="blog">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </div>
    `;
  })
  document.getElementById("posts").innerHTML=html;
}

displayBlogs();