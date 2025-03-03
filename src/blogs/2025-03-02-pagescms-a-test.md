---
draft: false
permalink: "/blog/{{ title | slugify }}/"
date: 2025-03-02
title: "PagesCMS - A Test"
tags: "blogs"
---
This is a brief test of PagesCMS a Git based online CMS I'm giving a shot. I'm currently engaged in an effort to make my blogging a bit more high speed, low drag so I'm more likely to actually... y'know. Blog.
<!-- excerpt -->

First you login with Github and then tell PagesCMS which project you want it to read, all good so far.

Then, you set up the mother of all YAML files to create the interface with which you'll interact with the CMS:

```
media:
  input: src/assets/shortform/blog
  output: assets/shortform/blog
content:
 - name: blogs
   label: Blogs
   type: collection
   path: src/blogs
   view:
     fields: [ date, title ]
   fields:
     - name: draft
       label: Draft
       type: boolean
       default: true
     - name: permalink
       label: Permalink
       type: string
       default: "/blog/{{ title | slugify }}/"
     - name: date
       label: Date
       type: date
     - name: title
       label: Title
       type: string
     - name: body
       label: Body
       type: rich-text
```

That all creates a view like this for blog entry:

![](assets/shortform/blog/03-02-25/PagesCMS-MakingAPost.PNG)

And this for the list of blog entries:

![](assets/shortform/blog/03-02-25/PagesCMS-CMS-yStuff.PNG)

Speaking of which: You can use it to manage your media:

![](assets/shortform/blog/03-02-25/PagesCMS-AddingMedia.PNG)

Which is super neat. So far I'm a fan but only time will tell if I keep liking it. Also this is the first post and it might go tits up immediately which has been my experience with Webmentions so far (also recently added to this site... sort of).