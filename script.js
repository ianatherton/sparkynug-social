const gun = Gun('http://localhost:3000/gun');

document.getElementById("submitPost").addEventListener('click', () => {
  const content = document.getElementById("postContent").value;
  
  // Save post to GunDB
  gun.get('posts').set({content}); 
});

// Display posts 
gun.get('posts').map().once(posts => {
  document.getElementById("posts").innerText = 
    JSON.stringify(posts); 
});