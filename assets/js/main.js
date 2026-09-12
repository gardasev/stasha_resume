/**
 * Stanislava (Stasha) Gardasevic - Interactive Academic Resume Controller
 * Handles theme toggling, interactive skill filtering, clipboard copying,
 * print export, and dynamic DOM rendering. Adapted from the shared family
 * template (psyunix.com) with additional academic sections.
 */

// Global State
const appState = {
  activeFilter: '',
  theme: 'light',
  cleanEmail: '',
};

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light Mode)
   -------------------------------------------------------------------------- */
const initTheme = () => {
  const savedTheme = localStorage.getItem('resume-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = appState.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('resume-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
};

const setTheme = (theme) => {
  appState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('resume-theme', theme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('.theme-icon');
    if (icon) {
      if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun theme-icon';
        themeToggle.title = 'Switch to Light Mode';
      } else {
        icon.className = 'fa-solid fa-moon theme-icon';
        themeToggle.title = 'Switch to Dark Mode';
      }
    }
  }
};

/* --------------------------------------------------------------------------
   2. Toast Notifications & Clipboard
   -------------------------------------------------------------------------- */
let toastTimeout;
const showToast = (message) => {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
};

const copyToClipboard = async (text, successMessage) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    showToast(successMessage);
  } catch (err) {
    showToast('Failed to copy');
  }
};

/* --------------------------------------------------------------------------
   3. Profile & Contact Header Rendering
   -------------------------------------------------------------------------- */
const renderProfile = (data) => {
  document.title = `${data.name} | ${data.sub_title}`;

  const nameEl = document.getElementById('profileName');
  if (nameEl) nameEl.textContent = data.name;

  const subtitleEl = document.getElementById('profileSubTitle');
  if (subtitleEl) subtitleEl.textContent = data.sub_title;

  const statusEl = document.getElementById('profileStatus');
  const statusBadge = document.getElementById('statusBadge');
  if (data.status) {
    if (statusEl) statusEl.textContent = data.status;
  } else if (statusBadge) {
    statusBadge.style.display = 'none';
  }

  const locationEl = document.getElementById('profileLocation');
  if (locationEl && data.location) locationEl.textContent = data.location;

  const tagEl = document.getElementById('profileTagline');
  if (tagEl && data.tagline) tagEl.textContent = data.tagline;

  const avatarEl = document.getElementById('profileAvatar');
  if (avatarEl && data.logoURL) {
    avatarEl.src = data.logoURL;
    avatarEl.alt = `${data.name} Profile Photo`;
  }

  const introEl = document.getElementById('aboutIntro');
  if (introEl && data.about?.intro) {
    introEl.textContent = data.about.intro;
  }

  // Normalize Email
  const emailLink = document.getElementById('contactEmail');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (data.about?.contact?.email) {
    const rawEmail = String(data.about.contact.email);
    const clean = rawEmail
      .replace(/\s+at\s+/gi, '@')
      .replace(/\s*\[at\]\s*/gi, '@')
      .replace(/\s+dot\s+/gi, '.')
      .replace(/\s*\[dot\]\s*/gi, '.')
      .replace(/\s+/g, '')
      .trim();

    appState.cleanEmail = clean;
    if (emailLink) {
      emailLink.href = `mailto:${clean}`;
      const textEl = emailLink.querySelector('.contact-text');
      if (textEl) textEl.textContent = clean;
    }
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        copyToClipboard(clean, 'Email address copied to clipboard!');
      });
    }
  }

  // Optional phone
  const phoneGroup = document.getElementById('phoneGroup');
  if (data.about?.contact?.phone) {
    const readablePhone = data.about.contact.phone;
    const digits = readablePhone.replace(/[^\d+]/g, '');
    const phoneLink = document.getElementById('contactPhone');
    const copyPhoneBtn = document.getElementById('copyPhoneBtn');
    if (phoneLink) {
      phoneLink.href = `tel:${digits}`;
      const textEl = phoneLink.querySelector('.contact-text');
      if (textEl) textEl.textContent = readablePhone;
    }
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        copyToClipboard(readablePhone, 'Phone number copied to clipboard!');
      });
    }
  } else if (phoneGroup) {
    phoneGroup.style.display = 'none';
  }

  // Social Links
  const socialContainer = document.getElementById('socialLinks');
  if (socialContainer && Array.isArray(data.links)) {
    socialContainer.innerHTML = '';
    data.links.forEach((link) => {
      const a = document.createElement('a');
      a.className = 'social-btn';
      a.href = link.src;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.title = link.title;

      const icon = document.createElement('i');
      icon.className = link.iconClass;
      icon.setAttribute('aria-hidden', 'true');

      const span = document.createElement('span');
      span.textContent = link.title;

      a.appendChild(icon);
      a.appendChild(span);
      socialContainer.appendChild(a);
    });
  }

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

/* --------------------------------------------------------------------------
   4. Career Metrics Rendering
   -------------------------------------------------------------------------- */
const renderMetrics = (metrics) => {
  const container = document.getElementById('metricsBar');
  if (!container || !Array.isArray(metrics)) return;

  container.innerHTML = '';
  metrics.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'metric-card';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'metric-icon-wrap';
    const icon = document.createElement('i');
    icon.className = item.icon;
    iconWrap.appendChild(icon);

    const info = document.createElement('div');
    const val = document.createElement('div');
    val.className = 'metric-value';
    val.textContent = item.value;

    const lbl = document.createElement('div');
    lbl.className = 'metric-label';
    lbl.textContent = item.label;

    info.appendChild(val);
    info.appendChild(lbl);

    card.appendChild(iconWrap);
    card.appendChild(info);
    container.appendChild(card);
  });
};

/* --------------------------------------------------------------------------
   5. Skills Rendering & Interactive Filtering
   -------------------------------------------------------------------------- */
const renderSkills = (skills) => {
  const container = document.getElementById('skillsGrid');
  if (!container || !Array.isArray(skills)) return;

  container.innerHTML = '';
  skills.forEach((cat) => {
    const card = document.createElement('div');
    card.className = 'skill-category-card';

    const header = document.createElement('div');
    header.className = 'skill-category-header';

    if (cat.icon) {
      const icon = document.createElement('i');
      icon.className = `${cat.icon} skill-category-icon`;
      header.appendChild(icon);
    }

    const titleSpan = document.createElement('span');
    titleSpan.textContent = cat.title;
    header.appendChild(titleSpan);

    card.appendChild(header);

    const pillsWrap = document.createElement('div');
    pillsWrap.className = 'skill-pills-wrap';

    const tags = cat.tags || (cat.value ? cat.value.split(',').map((s) => s.trim()) : []);
    tags.forEach((tagText) => {
      const pill = document.createElement('button');
      pill.className = 'skill-pill';
      pill.textContent = tagText;
      pill.setAttribute('data-skill', tagText.toLowerCase());

      pill.addEventListener('click', () => {
        applySkillFilter(tagText);
      });

      pillsWrap.appendChild(pill);
    });

    card.appendChild(pillsWrap);
    container.appendChild(card);
  });
};

/* --------------------------------------------------------------------------
   6. Work Experience Timeline Rendering
   -------------------------------------------------------------------------- */
const renderExperience = (experiences) => {
  const container = document.getElementById('experienceTimeline');
  if (!container || !Array.isArray(experiences)) return;

  container.innerHTML = '';
  experiences.forEach((exp) => {
    const item = document.createElement('article');
    item.className = 'timeline-item';
    if (exp.date && exp.date.toLowerCase().includes('present')) {
      item.classList.add('current');
    }

    const dot = document.createElement('div');
    dot.className = 'timeline-dot';
    item.appendChild(dot);

    const card = document.createElement('div');
    card.className = 'timeline-card';

    const header = document.createElement('div');
    header.className = 'timeline-header';

    const org = document.createElement('h3');
    org.className = 'timeline-org';
    org.textContent = exp.organization;

    const dateChip = document.createElement('span');
    dateChip.className = 'timeline-date-chip';
    dateChip.innerHTML = `<i class="fa-regular fa-calendar" aria-hidden="true"></i> ${exp.date}`;

    header.appendChild(org);
    header.appendChild(dateChip);
    card.appendChild(header);

    const subHeader = document.createElement('div');
    subHeader.className = 'timeline-sub-header';

    const title = document.createElement('div');
    title.className = 'timeline-title';
    title.textContent = exp.title;
    subHeader.appendChild(title);

    if (exp.location) {
      const loc = document.createElement('div');
      loc.className = 'timeline-location';
      loc.innerHTML = `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${exp.location}`;
      subHeader.appendChild(loc);
    }

    card.appendChild(subHeader);

    if (exp.skills && Array.isArray(exp.skills)) {
      const tagsWrap = document.createElement('div');
      tagsWrap.className = 'timeline-tags';
      exp.skills.forEach((skill) => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = skill;
        tagsWrap.appendChild(tag);
      });
      card.appendChild(tagsWrap);
    }

    if (exp.details && Array.isArray(exp.details)) {
      const ul = document.createElement('ul');
      ul.className = 'timeline-bullets';

      exp.details.forEach((bullet) => {
        const li = document.createElement('li');
        li.className = 'timeline-bullet-item';
        li.textContent = bullet;
        ul.appendChild(li);
      });

      card.appendChild(ul);
    }

    item.appendChild(card);
    container.appendChild(item);
  });
};

/* --------------------------------------------------------------------------
   7. Projects Rendering
   -------------------------------------------------------------------------- */
const renderProjects = (projects) => {
  const container = document.getElementById('projectsGrid');
  if (!container || !Array.isArray(projects)) return;

  container.innerHTML = '';
  projects.forEach((proj) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const header = document.createElement('div');
    header.className = 'project-header';

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = proj.title;

    const duration = document.createElement('span');
    duration.className = 'project-duration';
    duration.textContent = proj.duration;

    header.appendChild(title);
    header.appendChild(duration);
    card.appendChild(header);

    const desc = document.createElement('p');
    desc.className = 'project-desc';
    desc.textContent = proj.desc.replace(/<[^>]*>/g, '');
    card.appendChild(desc);

    const footer = document.createElement('div');
    footer.className = 'project-footer';

    if (proj.technologies && Array.isArray(proj.technologies)) {
      const tags = document.createElement('div');
      tags.className = 'timeline-tags';
      proj.technologies.forEach((tech) => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        tags.appendChild(span);
      });
      footer.appendChild(tags);
    }

    if (proj.link) {
      const a = document.createElement('a');
      a.className = 'project-link-btn';
      a.href = proj.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> ${proj.linkLabel || 'Learn more'}`;
      footer.appendChild(a);
    }

    card.appendChild(footer);
    container.appendChild(card);
  });
};

/* --------------------------------------------------------------------------
   8. Publications Rendering (academic)
   -------------------------------------------------------------------------- */
const renderPublications = (pubs) => {
  const container = document.getElementById('publicationsList');
  if (!container || !Array.isArray(pubs)) return;

  container.innerHTML = '';
  pubs.forEach((pub) => {
    const item = document.createElement('article');
    item.className = 'pub-item';

    const year = document.createElement('div');
    year.className = 'pub-year';
    year.textContent = pub.year;
    item.appendChild(year);

    const body = document.createElement('div');
    body.className = 'pub-body';

    const title = document.createElement('div');
    title.className = 'pub-title';
    title.textContent = pub.title;
    body.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'pub-meta';
    let metaHTML = '';
    if (pub.authors) metaHTML += `${pub.authors} `;
    if (pub.venue) metaHTML += `<span class="pub-venue">${pub.venue}</span>`;
    meta.innerHTML = metaHTML;
    body.appendChild(meta);

    const tags = document.createElement('div');
    tags.className = 'pub-tags';
    if (pub.type) {
      const badge = document.createElement('span');
      badge.className = 'pub-type-badge';
      badge.textContent = pub.type;
      tags.appendChild(badge);
    }
    if (pub.link) {
      const a = document.createElement('a');
      a.className = 'pub-link';
      a.href = pub.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `${pub.linkLabel || 'View'} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>`;
      tags.appendChild(a);
    }
    if (tags.children.length) body.appendChild(tags);

    item.appendChild(body);
    container.appendChild(item);
  });
};

/* --------------------------------------------------------------------------
   9. Grouped card lists (Talks / Service) — reuses skill-category styling
   -------------------------------------------------------------------------- */
const renderGroupedCards = (groups, containerId) => {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(groups)) return;

  container.innerHTML = '';
  if (groups.length <= 1) container.classList.add('single');

  groups.forEach((group) => {
    const card = document.createElement('div');
    card.className = 'skill-category-card';

    const header = document.createElement('div');
    header.className = 'skill-category-header';
    if (group.icon) {
      const icon = document.createElement('i');
      icon.className = `${group.icon} skill-category-icon`;
      header.appendChild(icon);
    }
    const titleSpan = document.createElement('span');
    titleSpan.textContent = group.title;
    header.appendChild(titleSpan);
    card.appendChild(header);

    const ul = document.createElement('ul');
    ul.className = 'timeline-bullets';
    (group.items || []).forEach((it) => {
      const li = document.createElement('li');
      li.className = 'timeline-bullet-item';
      if (typeof it === 'string') {
        li.textContent = it;
      } else if (it && it.text) {
        if (it.link) {
          li.innerHTML = `${it.text} <a href="${it.link}" target="_blank" rel="noopener noreferrer" class="pub-link"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`;
        } else {
          li.textContent = it.text;
        }
      }
      ul.appendChild(li);
    });
    card.appendChild(ul);

    container.appendChild(card);
  });
};

/* --------------------------------------------------------------------------
   10. Certifications / Awards Rendering
   -------------------------------------------------------------------------- */
const renderCertifications = (certs) => {
  const container = document.getElementById('certsGrid');
  if (!container || !Array.isArray(certs)) return;

  container.innerHTML = '';
  certs.forEach((cert) => {
    const card = document.createElement('article');
    card.className = 'cert-card';

    const header = document.createElement('div');
    header.className = 'cert-header';

    const title = document.createElement('h3');
    title.className = 'cert-title';
    title.textContent = cert.title || cert.desc.replace(/<[^>]*>/g, '');

    const date = document.createElement('span');
    date.className = 'cert-date';
    date.textContent = cert.date;

    header.appendChild(title);
    header.appendChild(date);
    card.appendChild(header);

    if (cert.issuer) {
      const issuer = document.createElement('div');
      issuer.className = 'cert-issuer';
      issuer.textContent = cert.issuer;
      card.appendChild(issuer);
    }

    const footer = document.createElement('div');
    footer.className = 'cert-footer';

    if (cert.badge) {
      const badge = document.createElement('span');
      badge.className = 'cert-badge';
      badge.textContent = cert.badge;
      footer.appendChild(badge);
    }

    if (cert.pdf || cert.link) {
      const a = document.createElement('a');
      a.className = 'cert-view-btn';
      a.href = cert.pdf || cert.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `Details <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>`;
      footer.appendChild(a);
    }

    if (footer.children.length) card.appendChild(footer);
    container.appendChild(card);
  });
};

/* --------------------------------------------------------------------------
   11. Education Rendering
   -------------------------------------------------------------------------- */
const renderEducation = (education) => {
  const container = document.getElementById('educationGrid');
  if (!container || !Array.isArray(education)) return;

  container.innerHTML = '';
  education.forEach((edu) => {
    const card = document.createElement('article');
    card.className = 'edu-card';

    const header = document.createElement('div');
    header.className = 'edu-header';

    const alma = document.createElement('h3');
    alma.className = 'edu-alma';
    if (edu.link) {
      const a = document.createElement('a');
      a.href = edu.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = edu.alma;
      alma.appendChild(a);
    } else {
      alma.textContent = edu.alma;
    }

    const duration = document.createElement('span');
    duration.className = 'edu-duration';
    duration.textContent = edu.duration;

    header.appendChild(alma);
    header.appendChild(duration);
    card.appendChild(header);

    const degree = document.createElement('div');
    degree.className = 'edu-degree';
    degree.textContent = edu.std;
    card.appendChild(degree);

    if (edu.detail) {
      const det = document.createElement('div');
      det.className = 'project-desc';
      det.style.marginBottom = '0.6rem';
      det.textContent = edu.detail;
      card.appendChild(det);
    }

    if (edu.score) {
      const score = document.createElement('div');
      score.className = 'edu-score-badge';
      score.textContent = edu.score;
      card.appendChild(score);
    }

    container.appendChild(card);
  });
};

/* --------------------------------------------------------------------------
   12. Interactive Search & Skill Filtering
   -------------------------------------------------------------------------- */
const initSearchAndFilter = () => {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const activeBadge = document.getElementById('activeFilterBadge');
  const filterKeyword = document.getElementById('filterKeyword');
  const resetBtn = document.getElementById('resetFilterBtn');

  if (!searchInput) return;

  const handleFilter = (query) => {
    appState.activeFilter = query.trim().toLowerCase();

    if (appState.activeFilter) {
      clearBtn.style.display = 'flex';
      activeBadge.style.display = 'inline-flex';
      filterKeyword.textContent = query.trim();
    } else {
      clearBtn.style.display = 'none';
      activeBadge.style.display = 'none';
    }

    document.querySelectorAll('.skill-pill').forEach((pill) => {
      const skillAttr = pill.getAttribute('data-skill');
      if (appState.activeFilter && skillAttr && (skillAttr === appState.activeFilter || skillAttr.includes(appState.activeFilter))) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    filterDOMContent(appState.activeFilter);
  };

  searchInput.addEventListener('input', (e) => {
    handleFilter(e.target.value);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    handleFilter('');
  });

  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    handleFilter('');
  });
};

const applySkillFilter = (skillText) => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = skillText;
    searchInput.dispatchEvent(new Event('input'));
  }

  const expSection = document.getElementById('experience');
  if (expSection) {
    expSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const filterDOMContent = (filterText) => {
  // Experience items
  document.querySelectorAll('.timeline-item').forEach((item) => {
    if (!filterText) {
      item.style.display = '';
      clearHighlights(item);
      return;
    }
    const text = item.textContent.toLowerCase();
    if (text.includes(filterText)) {
      item.style.display = '';
      highlightMatches(item, filterText);
    } else {
      item.style.display = 'none';
    }
  });

  // Project cards
  document.querySelectorAll('.project-card').forEach((card) => {
    if (!filterText) { card.style.display = ''; return; }
    card.style.display = card.textContent.toLowerCase().includes(filterText) ? '' : 'none';
  });

  // Publication items
  document.querySelectorAll('.pub-item').forEach((item) => {
    if (!filterText) { item.style.display = ''; return; }
    item.style.display = item.textContent.toLowerCase().includes(filterText) ? '' : 'none';
  });
};

const highlightMatches = (element, query) => {
  const bullets = element.querySelectorAll('.timeline-bullet-item');
  bullets.forEach((bullet) => {
    const original = bullet.getAttribute('data-original-text') || bullet.textContent;
    if (!bullet.getAttribute('data-original-text')) {
      bullet.setAttribute('data-original-text', original);
    }
    const lower = original.toLowerCase();
    const idx = lower.indexOf(query);
    if (idx !== -1) {
      const before = original.substring(0, idx);
      const match = original.substring(idx, idx + query.length);
      const after = original.substring(idx + query.length);
      bullet.innerHTML = `${before}<mark class="match-highlight">${match}</mark>${after}`;
    } else {
      bullet.textContent = original;
    }
  });
};

const clearHighlights = (element) => {
  const bullets = element.querySelectorAll('.timeline-bullet-item');
  bullets.forEach((bullet) => {
    const orig = bullet.getAttribute('data-original-text');
    if (orig) bullet.textContent = orig;
  });
};

/* --------------------------------------------------------------------------
   13. Print & PDF Export
   -------------------------------------------------------------------------- */
const initPrintExport = () => {
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
};

/* --------------------------------------------------------------------------
   14. Application Lifecycle Entry
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  if (typeof profileData !== 'undefined') {
    renderProfile(profileData);
    if (profileData.metrics) renderMetrics(profileData.metrics);
    if (profileData.skills) renderSkills(profileData.skills);
    if (profileData.experiences) renderExperience(profileData.experiences);
    if (profileData.projects) renderProjects(profileData.projects);
    if (profileData.publications) renderPublications(profileData.publications);
    if (profileData.presentations) renderGroupedCards(profileData.presentations, 'presentationsGrid');
    if (profileData.awards) renderCertifications(profileData.awards);
    if (profileData.service) renderGroupedCards(profileData.service, 'serviceGrid');
    if (profileData.education) renderEducation(profileData.education);
  }

  initSearchAndFilter();
  initPrintExport();
});
