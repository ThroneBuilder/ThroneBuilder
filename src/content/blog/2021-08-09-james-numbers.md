---
title: "James Numbers"
pubDate: 2021-08-09
description: "A quick summary of my unconventional master's thesis"
tags: ["career"]
coverImage: "/images/Thesis.JPEG"
---

*Written August 9, 2021. Minor edits December 13, 2023. Reposted April 1, 2026.*

I invented a system of numbers.

How cool is that? Not a lot of people can say that. I've always been good at math but ultimately chose software engineering over higher level mathematics. Still, I had this one foray into mathematical obscurity. While this work seems to illuminate something fundamental about numbers, I have no clue whether it is genuinely useful or has any place in intellectual history.

*James Numbers* build from an obscure representation of logic. Let's begin by reviewing that system, invented by [G. Spencer Brown](https://www.amazon.com/Laws-Form-G-Spencer-Brown/dp/0963989901) and [Charles S. Pierce](https://www.amazon.com/Philosophical-Writings-Peirce-Charles-S/dp/0486202178/ref=sr_1_3?dchild=1&keywords=charles+pierce&qid=1628483207&s=books&sr=1-3). The former has a [cult](https://groups.io/g/lawsofform) [following](https://lof50.com/). In this alternative symbolic universe, there are no values, only empty space and distinctions. Distinctions are drawn as non-overlapping boundaries in space. By convention, in text form we use parentheses and similar paired delimiters. In spatial logic, there is a single distinction, with logical arithmetic and algebra defined thus:

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!8TKF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F38c69df3-14eb-49d6-8bbe-67d4e7a43f87_923x211.png" class="image-link image2" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/38c69df3-14eb-49d6-8bbe-67d4e7a43f87_923x211.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/38c69df3-14eb-49d6-8bbe-67d4e7a43f87_923x211.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:211,&quot;width&quot;:923,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:false,&quot;topImage&quot;:true,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!8TKF!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F38c69df3-14eb-49d6-8bbe-67d4e7a43f87_923x211.png 424w, https://substackcdn.com/image/fetch/$s_!8TKF!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F38c69df3-14eb-49d6-8bbe-67d4e7a43f87_923x211.png 848w, https://substackcdn.com/image/fetch/$s_!8TKF!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F38c69df3-14eb-49d6-8bbe-67d4e7a43f87_923x211.png 1272w, https://substackcdn.com/image/fetch/$s_!8TKF!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F38c69df3-14eb-49d6-8bbe-67d4e7a43f87_923x211.png 1456w" sizes="100vw" fetchpriority="high" width="923" height="211" />
<div>

</div>
</div>
</figure>
:::

### Axioms of Spatial Logic

What about commutativity and associativity? That's where the space comes in. Space is inherently unordered. Traditional operations like "a and b" are ordered because of the linear representation and binary operator. Space is neither linear, nor binary. The spatial approach breaks from those constraints at a fundamental level. In this work, read "()()()" as an unordered non-binary collection of three distinctions and "((()))" as three nested distinctions.

You might object to the blurring between operations and values. That blurring is actually quite common in numerical representation. The number 23 is short for "2 \* 10 + 3", just as 2/3 is, well, two divided by three. It keeps going, including sqrt(2), 2+3i, and 3.0\*10⁸. Operators are everywhere in numerical representation once you look for them. In our alternative symbolic universe, distinction operations against empty space create the values, including "not()" in the spatial logic.

These spatial forms have multiple interpretations back in traditional mathematics. In the case of logic, space can be *true* or *false*. When space is *false*, a distinction creates *true* and aggregation in that space is *disjunction*. When space is *true*, distinction creates *false* and aggregation is *conjunction*. I won't go into further detail of the logic here, as that work was my starting place. I covered it only to set context for the numbers.

Now that you've digested distinctions and logic, let's switch to *James Numbers*. While spatial logic has a single distinction, *James Numbers* has three, which we will represent with parentheses (), square brackets \[\], and angle brackets \<\>. It turns out a great deal of numbers and algebra can be derived from these simple substitution rules:

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!QnhR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7dc31545-9359-4459-9db9-24e95f67c40a_549x123.png" class="image-link image2" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/7dc31545-9359-4459-9db9-24e95f67c40a_549x123.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/7dc31545-9359-4459-9db9-24e95f67c40a_549x123.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:123,&quot;width&quot;:549,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!QnhR!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7dc31545-9359-4459-9db9-24e95f67c40a_549x123.png 424w, https://substackcdn.com/image/fetch/$s_!QnhR!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7dc31545-9359-4459-9db9-24e95f67c40a_549x123.png 848w, https://substackcdn.com/image/fetch/$s_!QnhR!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7dc31545-9359-4459-9db9-24e95f67c40a_549x123.png 1272w, https://substackcdn.com/image/fetch/$s_!QnhR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7dc31545-9359-4459-9db9-24e95f67c40a_549x123.png 1456w" sizes="100vw" loading="lazy" width="549" height="123" />
<div>

</div>
</div>
</figure>
:::

### Axioms of James Numbers

Here's a sampling. When space is addition, the *void* is zero and () is one, so counting 1, 2, 3... looks like this in *James Numbers*:

`(), ()(), ()()(), …`

You might argue these aren't numbers *per se* but tallies, and that "true" numbers must be more recognizable at scale, like "MMXXI" or "2021". Welcome to the vagaries of representation. *James Numbers* makes different choices here. Multiplication looks like this:

`a * b -> ([a][b])`\
`2 * 3 -> ([()()][()()()])`\
`= ([()][()()()])([()][()()()]) Arrangement`\
`= ([()()()])([()()()]) Inversion`\
`= ()()()()()() Inversion`

Division looks like this:

`a / b -> ([a]<[b]>)`\
`4 / 2 -> ([()()()()]<[()()]>)`\
`= ([()()]<[()()]>)([()()]<[()()]>) Arrangement`\
`= ()() Reflection`

Exponent looks like this:

`a^b -> (([[a]][b]))`\
`2 ^ 3 -> (([[()()]][()()()]))`\
`= (([[()()]][()]) ([[()()]][()]) ([[()()]][()])) Arrangement`\
`= (([[()()]])([[()()]])([[()()]])) Inversion`\
`= ([()()][()()][()()]) Inversion`\
`= ([()()])([()()])([()()])([()()]) Arrangement`\
`= ()()()()()()()() Inversion`

Square root look like this:

`root(a,b) -> (([[a]]<[b]>))`\
`sqrt(3) * sqrt(3) -> ([(([[()()()]]<[()()]>))][(([[()()()]]<[()()]>))])`\
`= (([[()()()]]<[()()]>)([[()()()]]<[()()]>)) Inversion`\
`= (([[()()()]]<[()()]>[()()])) Theorem: (A) (A) = (A [()()])`\
`= (([[()()()]])) Reflection`\
`= ()()() Inversion`

*James Numbers* can represent and manipulate complex numbers as well.

`i = sqrt(-1) -> (([[<()>]]<[()()]>))`

Here's a mapping between select traditional numbers and *James Numbers*. We work in addition space most of the time but some forms that are non-trivial in addition space are trivial elsewhere, such as "\[\<()\>\]". We have not identified any useful interpretation of *above space* or *below space* but include them here to show the continuum. There is likely some version of [Conway's infinity operations](https://en.wikipedia.org/wiki/Surreal_number) embedded in here somewhere.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!250x!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8708e76a-90a2-4bd1-aaff-79393713c29e_1400x1153.png" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/8708e76a-90a2-4bd1-aaff-79393713c29e_1400x1153.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/8708e76a-90a2-4bd1-aaff-79393713c29e_1400x1153.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1153,&quot;width&quot;:1400,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!250x!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8708e76a-90a2-4bd1-aaff-79393713c29e_1400x1153.png 424w, https://substackcdn.com/image/fetch/$s_!250x!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8708e76a-90a2-4bd1-aaff-79393713c29e_1400x1153.png 848w, https://substackcdn.com/image/fetch/$s_!250x!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8708e76a-90a2-4bd1-aaff-79393713c29e_1400x1153.png 1272w, https://substackcdn.com/image/fetch/$s_!250x!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8708e76a-90a2-4bd1-aaff-79393713c29e_1400x1153.png 1456w" sizes="100vw" loading="lazy" width="1400" height="1153" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

While the logical distinction is negation, you may have already deduced the numerical distinctions to be exponent, logarithm, and numerical inverse. When the exponent and logarithm are collapsed, (A)=\[A\], *James Numbers* reduces to spatial logic presented earlier. Nobody uses slide-rules anymore, but *James Numbers* could serve as a procedural instructions for slide-rule computation of real-numbers. The notation and rules do not specify the base of that exponent and logarithm, and thus introduces the novel concept of baseless versions of those operations.

Euler's identity of "e\^(*i*\**pi*)=-1" can be represented in James Numbers by defining a logical *pi* to satisfy that equation. Thus we've generalized *pi* to pair with our baseless exponent in more general version of his formula. In this way, James Numbers captures numerical concepts at a more fundamental level, distinct from their historical baggage.

*(Note: this proof needs correction)\*
`e^(2i*pi)=1 -> ( (([[<()>]]<[()()]>)) ) = ()`\
`(([[<()>]]<[()()]>)) pi = void`\
`pi = <(([[<()>]]<[()()]>))>`

Why do we care? Why bother writing numbers this way? We've already discussed two foundational aspects: the *spatial representation* rather than linear one and the *convergence of objects and operations*. Removing those constraints changes the nature of the number system dramatically. Just as spatial logic allows interpretation as true/conjunction or false/disjunction, so spatial numbers have *multiple interpretations*, including zero/addition and one/multiplication. *James Numbers* captures the mechanics of addition and multiplication but are independent of both of them. It captures the mechanics of Euler's natural exponent and radians without defining the base *e* or real value of *pi*. I claim that to be a *significant mathematical accomplishment*, though I lack the academic credentials to be authoritative about that.

Here is a further observation from William Bricken that I find fascinating. The three *James Number* distinctions exhibit fundamental complementary behaviors that have reductionist implications. Those are shown here with \<inverse\> replaced by *Bricken's Variant* where {A}=\[\<(A)\>\].

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!noYy!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa68a8de8-a30f-4de1-9367-52d48752fc1f_379x123.png" class="image-link image2" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/a68a8de8-a30f-4de1-9367-52d48752fc1f_379x123.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/a68a8de8-a30f-4de1-9367-52d48752fc1f_379x123.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:123,&quot;width&quot;:379,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!noYy!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa68a8de8-a30f-4de1-9367-52d48752fc1f_379x123.png 424w, https://substackcdn.com/image/fetch/$s_!noYy!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa68a8de8-a30f-4de1-9367-52d48752fc1f_379x123.png 848w, https://substackcdn.com/image/fetch/$s_!noYy!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa68a8de8-a30f-4de1-9367-52d48752fc1f_379x123.png 1272w, https://substackcdn.com/image/fetch/$s_!noYy!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa68a8de8-a30f-4de1-9367-52d48752fc1f_379x123.png 1456w" sizes="100vw" loading="lazy" width="379" height="123" />
<div>

</div>
</div>
</figure>
:::

### Basic Behavior of the Numerical Distinctions

I developed *James Numbers* for my [Master's thesis](https://onedrive.live.com/?cid=18A2CBECFAA8B6BC&id=18A2CBECFAA8B6BC%211176121&parId=18A2CBECFAA8B6BC%211176120&o=OneUp) at the University of Washington under the guidance of William Bricken. I left the work behind decades ago, while he continued on. He prompted this reflection by sending me his three books on [Iconic Arithmetic](http://iconicmath.com/), which go way deeper than my thesis or this essay. He continues to champion and extend this work, drawing heavily on mathematical history and philosophy. I am also indebted to [Dick Shoup](https://en.wikipedia.org/wiki/Richard_Shoup_%28programmer%29), who funded William and I after our work at UW's Human Interface Technology Lab (HITL).

This work compels me back into it (as a hobby) but I'm unclear where to take it. William's books tie it back to the history of mathematics and extend it forward in many ways. His writings and our work with Shoup postulate new computational models. Another possibility is to build a spatial version of [MetaMath](http://us.metamath.org/) and compare the resulting axioms, which would force a formality and completeness we haven't quite achieved. I could also see diving into philosophy, perhaps tying to Wolfram's work in [physics](https://www.wolframphysics.org/) and [numbers](https://writings.stephenwolfram.com/2021/05/how-inevitable-is-the-concept-of-numbers/). Great things await with my next burst of mathematical creativity!

---

*August 17, 2021 --- Updated axiom names from original to preferred ones\
April 1, 2026 --- Minor reformatting when reposting*
