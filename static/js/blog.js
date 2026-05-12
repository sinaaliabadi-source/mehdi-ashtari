/**
 * blog.js — WordPress REST API loader for content.html
 *
 * To connect to a real WordPress site, set WP_API to your site's REST base URL.
 * Example: const WP_API = 'https://your-wordpress-site.com/wp-json/wp/v2';
 *
 * When WP_API is left as the placeholder, the page falls back to STATIC_POSTS.
 * You can also wire this up to Formspree / EmailJS by editing contact.html.
 */

const WP_API = 'https://your-wordpress-site.com/wp-json/wp/v2';

const STATIC_POSTS = [
  {
    title: 'تحلیل ذی‌نفعان در پروژه‌های محصول',
    excerpt: 'روش‌هایی برای هم‌راستایی و مدیریت انتظار در پروژه‌های دیجیتال.',
    tag: 'ذی‌نفعان',
    link: null,
  },
  {
    title: 'طراحی سناریوی تصمیم',
    excerpt: 'چگونه مسیر تصمیم‌سازی را برای مدیران و تیم‌ها قابل لمس کنیم.',
    tag: 'تصمیم‌سازی',
    link: null,
  },
  {
    title: 'سفر نیازمندی تا تحویل',
    excerpt: 'استانداردسازی ارتباط میان تیم محصول و توسعه برای کاهش خطا.',
    tag: 'نیازمندی',
    link: null,
  },
  {
    title: 'مدل‌سازی فرایندهای کسب‌وکار',
    excerpt: 'ابزارها و ترفندهای کاربردی برای ترسیم فرایندهای قابل اندازه‌گیری.',
    tag: 'BPMN',
    link: null,
  },
  {
    title: 'برنامه‌ریزی داده‌محور',
    excerpt: 'بکارگیری داده‌های سبک برای تصمیم‌های سریع و کم‌ریسک.',
    tag: 'Data',
    link: null,
  },
  {
    title: 'یادگیری BABOK در عمل',
    excerpt: 'چطور BABOK را در پروژه‌های واقعی و محدودیت‌های ایرانی پیاده کنیم.',
    tag: 'BABOK',
    link: null,
  },
];

/* ── Helpers ─────────────────────────────────────────────── */

function stripHtml(html) {
  var tmp = document.createElement('div');
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || '').trim();
}

function toJalali(dateStr) {
  // Simple Gregorian → display; full Jalali conversion requires a library.
  // Returns a readable Persian-locale string without external deps.
  try {
    var d = new Date(dateStr);
    return d.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (_) {
    return dateStr;
  }
}

function isPlaceholder(url) {
  return !url || url.includes('your-wordpress-site.com');
}

/* ── Render ──────────────────────────────────────────────── */

function renderCard(post) {
  var imageHtml = '';
  try {
    var media = post._embedded && post._embedded['wp:featuredmedia'];
    if (media && media[0] && media[0].source_url) {
      imageHtml = '<img class="post-image" src="' + media[0].source_url + '" alt="" loading="lazy">';
    }
  } catch (_) {}

  var title = post.title ? stripHtml(post.title.rendered || post.title) : post.title || '';
  var excerpt = post.excerpt ? stripHtml(post.excerpt.rendered || post.excerpt) : post.excerpt || '';
  var date = post.date ? '<span class="content-date">' + toJalali(post.date) + '</span>' : '';
  var tag = post.tag ? '<span class="content-tag">' + post.tag + '</span>' : '';
  var linkOpen = post.link ? '<a href="' + post.link + '" target="_blank" rel="noopener noreferrer">' : '<div>';
  var linkClose = post.link ? '</a>' : '</div>';

  return linkOpen +
    '<article class="card" style="height:100%">' +
      '<div class="card-body">' +
        imageHtml +
        tag +
        date +
        '<h3 class="card-title">' + title + '</h3>' +
        '<p class="card-desc">' + excerpt + '</p>' +
        (post.link ? '<span class="card-link">بیشتر بخوانید <span aria-hidden>↗</span></span>' : '') +
      '</div>' +
    '</article>' +
  linkClose;
}

function showStatic(grid) {
  grid.innerHTML = STATIC_POSTS.map(renderCard).join('');
}

function showError(grid, msg) {
  grid.innerHTML = '<p class="api-error">' + (msg || 'در حال حاضر محتوا در دسترس نیست.') + '</p>';
}

function showSpinner(grid) {
  grid.innerHTML = '<div class="spinner-wrap"><div class="spinner"></div></div>';
}

/* ── Pagination state ────────────────────────────────────── */
var currentPage = 1;
var totalPages = 1;
var isLoading = false;
var postsGrid;
var loadMoreBtn;

function fetchPosts(page) {
  if (isLoading) return;
  isLoading = true;

  if (page === 1) showSpinner(postsGrid);
  if (loadMoreBtn) loadMoreBtn.disabled = true;

  fetch(WP_API + '/posts?per_page=9&page=' + page + '&_embed')
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
      return res.json();
    })
    .then(function (posts) {
      if (page === 1) postsGrid.innerHTML = '';

      if (posts.length === 0 && page === 1) {
        showError(postsGrid, 'هنوز محتوایی منتشر نشده است.');
        return;
      }

      posts.forEach(function (post) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = renderCard(post);
        postsGrid.appendChild(wrapper.firstChild);
      });

      currentPage = page;
      if (loadMoreBtn) {
        loadMoreBtn.style.display = (currentPage >= totalPages) ? 'none' : 'inline-flex';
        loadMoreBtn.disabled = false;
      }
    })
    .catch(function () {
      if (page === 1) showStatic(postsGrid);
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    })
    .finally(function () {
      isLoading = false;
    });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  postsGrid = document.getElementById('posts-grid');
  loadMoreBtn = document.getElementById('load-more-btn');

  if (!postsGrid) return;

  if (isPlaceholder(WP_API)) {
    showStatic(postsGrid);
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  fetchPosts(1);

  if (loadMoreBtn) {
    loadMoreBtn.style.display = 'none';
    loadMoreBtn.addEventListener('click', function () {
      fetchPosts(currentPage + 1);
    });
  }
});
