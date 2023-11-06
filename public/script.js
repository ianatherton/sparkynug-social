const gun = Gun('http://localhost:3000/gun');

document.getElementById("submitPost").addEventListener('click', () => {
  const content = document.getElementById("postContent").value;
  
  gun.get('posts').set({content});
}); 

const renderPosts = posts => {

  let postElements = '';

  Object.values(posts).forEach(post => {
    const postElement = `
      <div class="post">
        <p>${post.content}</p>
      </div>
    `;
    
    postElements += postElement;
  });

  document.getElementById('posts').innerHTML = postElements;

};

gun.get('posts').map().once(posts => {
  renderPosts(posts);
});