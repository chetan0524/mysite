document.getElementById('save').onclick = () => {
  localStorage.setItem('postTitle', document.getElementById('title').value.trim());
  localStorage.setItem('postContent', document.getElementById('content').value.trim());
  localStorage.setItem('postStatus', 'draft');
  alert('Draft saved!');
};

document.getElementById('publish').onclick = () => {
  const t = document.getElementById('title').value.trim();
  const c = document.getElementById('content').value.trim();
  if(!t || !c){ alert('Title aur Content dono required hai.'); return; }
  localStorage.setItem('postTitle', t);
  localStorage.setItem('postContent', c);
  localStorage.setItem('postStatus', 'published');
  localStorage.setItem('postPublishedAt', new Date().toISOString());
  // View page par redirect
  location.href = 'view.html';
};