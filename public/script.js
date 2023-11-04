const gun = Gun('http://localhost:3000/gun');

// Render posts 
const renderPosts = posts => {
  const postElements = Object.values(posts).map(post => {
    return `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>  
      </div>
    `;
  });

  document.getElementById('posts').innerHTML = postElements.join('');
}

gun.get('posts').map().once(posts => {
  renderPosts(posts);
});

// Submitting new posts...

// Logo
document.getElementById('logo').innerHTML = `
  <svg>
    <!-- Roygbiv colored CalmVerse logo --> 
  </svg>
`;