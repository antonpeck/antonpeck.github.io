---
layout: layout.html
title: Anton Peck
---

Hello there.

In case you are seeing this and wondering what I'm up to, this is my first attempt (public, even) at learning to use 11ty, and publish to Github Pages. In time, once I've worked out the way it parses everything, there will be much more content, and a bit of style. ♥

### Blog Posts (test)

{% for post in collections.post %}

[{{ post.data.title }}]({{ post.url }})

{% endfor %}

Huzzah!!!
