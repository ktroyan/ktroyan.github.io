# General blog post
<!-- Due to a plugin called `jekyll-titles-from-headings` which is supported by GitHub Pages by default. The above header (in the markdown file) will be automatically used as the pages title. -->
Here is the content following the main title.

<!-- dark theme using DarkReader -->
<script src="//unpkg.com/darkreader@4.9.40/darkreader.js"></script>
<script type="text/javascript">
  DarkReader.setFetchMethod(window.fetch); // Fix to remedy CORS errors in chrome console
  //DarkReader.enable();
  DarkReader.auto( {brightness: 100, contrast: 90, sepia: 10} );
</script>

layout: post
excerpt: "What's interesting here"
tags: [introduction, GitHub pages, test]
# comments: false
category: blog
date: 2022-08-21 -0800

## Section
Here is the content of a section.

### Subsection
Here is the content of a subsection.

#### Subsubsection
Here is the content of a subsubsection.

##### Subsubsubsection
Here is the content of a subsubsubsection.


## Sharing an internet link
This site was built using [GitHub Pages](https://pages.github.com/).


## Sharing a link relative to the repository
[This is a relative link to the index.md file in this repository](/index.md)


## Inserting an image
![This is an image description](https://myoctocat.com/assets/images/base-octocat.svg)

This is another image, but using HTML to eventually handle placement and proportions.
<img src="https://octodex.github.com/images/jetpacktocat.png"
height="250">

<!-- ### Inserting an image depending on the color scheme
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light color mode and a moon with stars in dark color mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture> -->



## Writing some Python code
```python
n = 100
W = np.zeros(n)
```


## Listing items
### Simple lists
- Item 1
- Item 2
- Item 3

1. Item 1
2. Item 2
3. Item 3

### Nested lists
1. First list of items
   - First nested list of items
   - Something something
     - Second nested list of items
     - Something something

2. Second list of items
   * First nested list of items
   * Something something
     * Second nested list of items
     * Something something

### Task lists
- [x] #739
- [ ] Watch the video: [Karpathy explains NNs and Backpropagation](https://www.youtube.com/watch?v=VMj-3S1tku0&t=85s)
- [ ] Add delight to the experience when all tasks are complete :tada:

## Footnotes
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit the writing style more closely[^note].

[^1]: My reference.

[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
    


## Referencing a previous section
[This is a link to a section of this personal blog. In this case, to the top.](https://github.com/ktroyan/ktroyan.github.io/blob/main/_posts/2021-03-08-blog-post-title-from-file-name.md#main-title)


---
<!-- 
## Using emojis
:smiling_face_with_tear:
:shushing_face:
:neutral_face:
:raised_eyebrow:
:unamused:
:face_exhaling:
:expressionless:
:relieved:
:sleeping:
:pensive:
:face_with_head_bandage:
:face_with_spiral_eyes:
:sneezing_face:
:dizzy_face:
:confused:
:pleading_face:
:cry:
:sweat:
:tired_face:
:frowning_face:
:flushed:
:disappointed_relieved:
:sob:
:confounded:
:yawning_face:
:weary:
:skull:
:skull_and_crossbones:
:ghost:
:robot:
:broken_heart:
:thought_balloon:
:zzz:
:thumbsup:
:thumbsdown:
:point_up:
:clap:
:handshake:
:writing_hand:
:brain:
:deaf_man:
:man_shrugging:
:bowing_man:
:no_good:
:no_good_man:
:man_facepalming:
:octocat:

--- -->


## Quoting text
> This is a quoted text.
> This too...

---
---

## References



