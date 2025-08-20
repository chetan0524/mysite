const title = localStorage.getItem('postTitle') || 'Untitled Post';
const content = localStorage.getItem('postContent') || 'No content.';
const status = localStorage.getItem('postStatus') || 'draft';
const when = localStorage.getItem('postPublishedAt');

document.getElementById('v-title').textContent = title;
document.getElementById('v-content').textContent = content;

const meta = document.getElementById('v-meta');
if(status === 'published' && when){
  const d = new Date(when);
  meta.textContent = Published on ${d.toDateString()};
} else {
  meta.textContent = 'Draft (not published yet)';
}