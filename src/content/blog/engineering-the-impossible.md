---
title: "Engineering the Impossible"
pubDate: 2026-04-27
description: "Lessons in persistence and structural engineering"
tags: ["legos"]
---

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!AXJA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1491,&quot;width&quot;:1456,&quot;resizeWidth&quot;:340,&quot;bytes&quot;:867669,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:false,&quot;topImage&quot;:true,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!AXJA!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg 424w, https://substackcdn.com/image/fetch/$s_!AXJA!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg 848w, https://substackcdn.com/image/fetch/$s_!AXJA!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!AXJA!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F43b4e49a-c008-4ba3-87af-49bc82139428_2319x2375.jpeg 1456w" sizes="100vw" fetchpriority="high" width="340" height="348" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

*May 27, 2026 - My 20 minute talk based on this content can be found [here](https://youtu.be/EX9XRk4l9MQ?si=UcL_m4jzVmqdg95q).*

I built a life-sized Iron Throne out of Lego. The hard part wasn't building it---it was making it survive being moved.

**Timeline**

In 2020, I set out to build a life-sized replica of the Iron Throne from *Game of Thrones* entirely out of Lego. I completed it during COVID, took a few photos sitting on it, and then left it alone for quite a while.

That changed when I moved into a new place. Transporting the throne was anything but trivial. Then, with time between jobs in 2024, I decided to exhibit it at BrickCon, our local Lego "My Own Creation" convention. The fragility of the work reasserted itself when the blade fan collapsed because I forgot to reinforce the mounting structure. It took four hours to disassemble and another four to reassemble---painful, but absolutely worth it.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!wkZO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1256,&quot;width&quot;:917,&quot;resizeWidth&quot;:274,&quot;bytes&quot;:1250278,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/png&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:false,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!wkZO!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png 424w, https://substackcdn.com/image/fetch/$s_!wkZO!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png 848w, https://substackcdn.com/image/fetch/$s_!wkZO!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png 1272w, https://substackcdn.com/image/fetch/$s_!wkZO!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58384d5c-6d67-4fdc-84ba-eb10375fc828_917x1256.png 1456w" sizes="100vw" width="274" height="375" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

The joy in the BrickCon feedback compelled me to jump into a new project: the "Faith of the Seven" stained glass window that sits behind the throne. I traced a five-foot circular design with seven panes around a central star and began building the frame. Months later, I gave up in frustration. The structure was complete but I could not close the top arc. After many failed attempts, I felt like Captain Ahab chasing the elusive white whale: trying over and over, never quite succeeding but taking damage along the way.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!jf4C!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1941,&quot;width&quot;:1456,&quot;resizeWidth&quot;:276,&quot;bytes&quot;:986561,&quot;alt&quot;:&quot;&quot;,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:false,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!jf4C!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg 424w, https://substackcdn.com/image/fetch/$s_!jf4C!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg 848w, https://substackcdn.com/image/fetch/$s_!jf4C!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!jf4C!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31ab1665-2cec-4697-826b-1bb7d7f20218_1536x2048.jpeg 1456w" sizes="100vw" width="276" height="367" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

A few weeks before BrickCon 2025, I revisited the design, desperate to finish it in time for the exhibition. I was working under a time crunch, blocked by slow parts shipments, to execute a timely rebuild, on a new untested design, to meet a (self-imposed) event deadline. After achieving confidence across several prototypes, I recalculated my part needs, waited for their delivery, and completed the window rebuild just one week before the exhibition. Transporting a fragile five-foot structure proved difficult---it broke in transit---but we repaired it on site and successfully displayed both the throne and the window. The white whale, captured momentarily, ultimately got away again.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!0i7o!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1941,&quot;width&quot;:1456,&quot;resizeWidth&quot;:324,&quot;bytes&quot;:1506125,&quot;alt&quot;:&quot;&quot;,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!0i7o!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg 424w, https://substackcdn.com/image/fetch/$s_!0i7o!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg 848w, https://substackcdn.com/image/fetch/$s_!0i7o!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!0i7o!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b472b58-c3f1-4d38-a56c-0eac62208d36_1536x2048.jpeg 1456w" sizes="100vw" loading="lazy" width="324" height="431" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

After BrickCon, the pieces sat in crates into 2026 while I explored other projects. I completed a "Hall of Faces" piece featuring custom mosaics of my household, and began a fourth, far more ambitious project: the Skull of Balerion, which I eventually plan to build in its full scale 20-foot length.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!4Quq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1092,&quot;width&quot;:1456,&quot;resizeWidth&quot;:400,&quot;bytes&quot;:933298,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!4Quq!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg 424w, https://substackcdn.com/image/fetch/$s_!4Quq!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg 848w, https://substackcdn.com/image/fetch/$s_!4Quq!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!4Quq!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15e1eb4c-ad24-4ec6-880e-b03b8e0f461f_2048x1536.jpeg 1456w" sizes="100vw" loading="lazy" width="400" height="300" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

**Challenge**

Throughout all of this, one core engineering challenge has persisted:

- How do I build these works not just to look right, but to be strong and portable?

To address that, I undertook a complete redesign of the Lego Throne. I re-engineered the seat so the arms and back could detach cleanly, preserving fragile blade details during transport. I developed new construction methods---captured in my [Cube Techniques](https://youtu.be/NVlFqUumJ40?si=Xg6n2FtoKbK3Fsm2), [Wall Angles](https://youtu.be/WMuSqa5YPNo?si=ZB2KJFbI5AETVUDf) and [Blade Techniques](https://youtu.be/Xe2cyo7Enrs?si=NK4A17J0zTCilgX3) videos---and rebuilt the throne with portability in mind. The final result remains complex and somewhat overbuilt, but it represents a major step forward.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!DFiH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/adab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/adab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1781,&quot;width&quot;:1145,&quot;resizeWidth&quot;:306,&quot;bytes&quot;:615986,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!DFiH!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg 424w, https://substackcdn.com/image/fetch/$s_!DFiH!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg 848w, https://substackcdn.com/image/fetch/$s_!DFiH!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!DFiH!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fadab38a9-8ab0-406e-8c91-8a16e1462ada_1145x1781.jpeg 1456w" sizes="100vw" loading="lazy" width="306" height="475" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

I then returned to the stained glass window and raised the stakes---literally---by extending the mounting posts from five feet to eight feet, widening the base and reinforcing the structure. But during reinstallation, the top failed, which cascaded into a larger structural break. The window now sits broken in its crate between the posts. The white whale escaped yet again.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!LsMd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1941,&quot;width&quot;:1456,&quot;resizeWidth&quot;:266,&quot;bytes&quot;:987166,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!LsMd!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg 424w, https://substackcdn.com/image/fetch/$s_!LsMd!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg 848w, https://substackcdn.com/image/fetch/$s_!LsMd!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!LsMd!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72a7a070-a66d-49dd-b831-3891977fb7c2_1536x2048.jpeg 1456w" sizes="100vw" loading="lazy" width="266" height="354" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::

To recap that journey, my first attempt was a simple two-brick-deep frame---visually accurate but structurally weak. It failed every time I tried to move it.

My second attempt increased the depth to four bricks and added angled liftarms for reinforcement. This version could be lifted into place, but I still couldn't complete the arc. Over 160 layers of bricks---including transparent elements---introduced enough cumulative tolerance error and internal stress to make closure impossible. I needed to truly innovate.

**Innovation**

The breakthrough for the third design came from an unexpected source: someone who built a working Lego door with floating panels.

That insight changed everything.

By allowing the window panes to float within the frame, I could reduce internal stress and break free from strict grid constraints. I developed a brick--plate--plate (BPP) stacking pattern that enabled vertical reinforcement using orthogonal liftarms. This design held together through BrickCon, though it still felt fragile---and ultimately proved to be.

Now I am working on a fourth design. It retains the floating panes but abandons the standard Lego grid entirely. Each arm of the frame is built from bridged Technic elements oriented independently, and the seven outer panes are detachable for transport. The remaining challenges are clear: reinforce the frame joints beyond simple 3L pins, be able to strongly bind the star and seven panes during any reassembly, hide the Technic structure behind a surface facade, and---most critically---be able to assemble the entire structure in place without encountering the stresses and failures of past designs.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!24WT!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg" class="image-link image2" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/ccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/ccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1092,&quot;width&quot;:1456,&quot;resizeWidth&quot;:231,&quot;bytes&quot;:672031,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!24WT!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg 424w, https://substackcdn.com/image/fetch/$s_!24WT!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg 848w, https://substackcdn.com/image/fetch/$s_!24WT!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!24WT!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fccfea047-78c5-41fe-92b7-13b9321c76fe_2048x1536.jpeg 1456w" sizes="100vw" loading="lazy" width="231" height="173" />
<div>

</div>
</div>
</figure>
:::

My past failures compel me to pursue additional protections against the risk of another [rapid unplanned disassembly](https://en.wiktionary.org/wiki/rapid_unplanned_disassembly). Previous attempts to glue transparent bricks failed, but I believe that carefully applied tape along the pane edges may provide cheap reinforcement without adding weight or compromising appearance. Consider it another insurance policy. There will need to be more to finally capture this while whale.

**Process**

Now that you know the history and patterns, allow me to share some of my process.

Each redesign requires new parts and forces tradeoffs.

I prototype small sections, estimate part counts, and extrapolate across the full build. Orders take time to arrive, and there is always a tipping point where I must cannibalize the previous version to continue. For the throne, that meant reclaiming thousands of structural bricks. For the window, it will mean reusing roughly 5,000 transparent elements sourced from large overseas lots.

In parallel, I continue exploring other creations.

The Hall of Faces came together relatively easily---no structural challenges, just the problem of translating photographs into mosaics. A future version will expand to a 4×3 layout with detachable cubbies.

The Skull of Balerion is a different kind of challenge entirely. My current prototype is a 2.5-foot, 1/8-scale version derived from a 3D model imported into BrickLink Studio. I'm building it layer by layer to understand both the geometry and the software. Future iterations at 1/4 and 1/2 scale will move away from grid-based construction toward a spine-and-branch structural system supporting a surface "skin." At full scale, cost and logistics become major constraints.

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!JUlh!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg" class="image-link image2" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:1092,&quot;width&quot;:1456,&quot;resizeWidth&quot;:310,&quot;bytes&quot;:1089063,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!JUlh!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg 424w, https://substackcdn.com/image/fetch/$s_!JUlh!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg 848w, https://substackcdn.com/image/fetch/$s_!JUlh!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!JUlh!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e60f673-c2af-40c6-a798-93df545e7b62_2048x1536.jpeg 1456w" sizes="100vw" loading="lazy" width="310" height="232" />
<div>

</div>
</div>
</figure>
:::

**Lessons**

This is not a hobby for the lighthearted (or broke) builder. Here are some truisms to hold dear.

**1. Keep moving, but be willing to move on**

Some projects stall. Others evolve. Progress comes from continuing forward and returning later with new insight.

**2. Maintain an eclectic parts library**

Unused parts from abandoned ideas often become critical when prototyping future designs without the wait and uncertainty of a new order.

**3. Master the supply chain**

BrickLink is as important as any design tool. At scale, sourcing becomes a strategic problem.

**4. Expect failure---often and suddenly**

At large scale, failure modes are hard to predict. Designs that seem strong can collapse under movement or accumulated tolerance error.

**5. Develop and reuse structural patterns**

Techniques like BPP layering and orthogonal reinforcement have emerged through iteration and now apply across multiple builds.

**6. Understand your motivation**

What began as an aesthetic challenge has become an engineering pursuit---and increasingly, a logistical and creative one. Portability is now as important as form.

**Future**

As I write this, my part orders for the fourth window design are arriving, and the skull prototype sits half finished.

My next steps are clear:

- Complete the window redesign and validate its strength and portability, then rebuild the mounting posts and hang it again.

- Test the modular throne through full disassembly and transport.

Achieving portability for the throne and window will open the door to broader exhibitions beyond the Lego community---into fantasy, cosplay, and other spaces.

The Hall of Faces will expand in scale and variety. The Skull of Balerion remains an open question. At five feet, it won't fit through doors. At ten feet, it dominates a room. At twenty feet, it becomes something else entirely---a project that may require collaboration, new resources, and a different kind of thinking.

What started as a hobby has become a vehicle for learning, problem-solving, and personal growth. And the challenges ahead suggest that process is far from over.

*Written April 27, 2026, with editing advice from ChatGPT.*

::: captioned-image-container
<figure>
<a href="https://substackcdn.com/image/fetch/$s_!0kdb!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg" class="image-link image2 is-viewable-img" target="_blank" data-component-name="Image2ToDOM"></a>
<div class="image2-inset">
<img src="https://substack-post-media.s3.amazonaws.com/public/images/319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:2035,&quot;width&quot;:1456,&quot;resizeWidth&quot;:387,&quot;bytes&quot;:1402445,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:&quot;image/jpeg&quot;,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:&quot;https://thronebuilder.substack.com/i/195684514?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg&quot;,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" srcset="https://substackcdn.com/image/fetch/$s_!0kdb!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg 424w, https://substackcdn.com/image/fetch/$s_!0kdb!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg 848w, https://substackcdn.com/image/fetch/$s_!0kdb!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg 1272w, https://substackcdn.com/image/fetch/$s_!0kdb!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F319d7078-71e8-45cb-a578-8c769b599aff_1500x2096.jpeg 1456w" sizes="100vw" loading="lazy" width="387" height="540" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJ2YXIoLS1jb2xvci1mZy1wcmltYXJ5KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIiAvPjwvZz48L3N2Zz4=" />
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld2JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1heGltaXplMiBsdWNpZGUtbWF4aW1pemUtMiI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
</figure>
:::
