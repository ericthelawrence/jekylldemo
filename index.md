---
layout: home
description: "Jekyll demo settings"
tags: [Jekyll, theme, responsive, blog, template]
image:
  feature: texture-feature-01.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---

<div class="row">
	<div class="col-md-8" markdown="1" >

# A Jekyll Demo site

You're viewing example site developed and maintained using the [Jekyll Static site generator](http://jekyllrb.com/).

<div class="bullet-points" markdown="1" >
* [Why](/why.html "Reasons to use Jekyll")
* [How](/how.html "Build and maintain with Jekyll")
* [More](/more.html "Learn more about Jekyll")
</div>

---

### Recent Posts
Jekyll is "blog-aware" which means it can handle most blogging tasks. Here are some
recent posts:

{% for post in site.posts %}  
<article itemscope itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
  <h4 itemprop="headline"><a href="{{ post.url }}" rel="bookmark" title="{{ post.title }}"><i class="icon-chevron-right"></i> {{ post.title }}</a></h4>
  <p itemprop="text">{% if post.description %}{{ post.description }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 120 }}{% endif %}</p>
</article>
{% endfor %}

</div>
<div class="col-md-4 centered" markdown="1" >
<div class="inner-well well" markdown="1">



<div class="love">
	<i class="icon-jekyll"></i>
	<i class="icon-heart"></i>
	<i class="icon-github"></i>
</div>

Jekyll by itself is powerful enough, but when combined with other services such as <a href="http://github.com/pages">Github Pages</a> _free_  hosting and integrated with <a href="http://prose.io">Prose</a> content editor, it approaches a critcle mass of&nbsp;awesomeness.

<h4 class="integration">
	<a href="/integration.html">
		<i class="icon-gears"></i>
		Learn More About Integration
	</a>
</h4>

</div>
</div>
</div><!--/row -->