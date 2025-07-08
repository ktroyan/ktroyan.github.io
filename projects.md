---
layout: page
title: Projects
permalink: /projects/
---

{% for project in site.projects %}
  <div class="project-card">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.excerpt }}</p>
  </div>
{% endfor %}
