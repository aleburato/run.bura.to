---
layout: base.liquid
---

# Welcome to my site!

Not to brag, but it's pretty great. Weeee 👋

{% for post in collections.posts reversed %}

## [{{ post.data.title }}]({{ post.url }})

<time>{{ post.data.date | date: "%B %d, %Y" }}</time>
{% endfor %}
