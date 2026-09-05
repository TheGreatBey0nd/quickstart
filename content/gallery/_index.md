---
title: "Musik"
description: "Eine Auswahl meiner Bilder mit Filteroptionen"

date: 2024-02-18T14:12:44+0100
resources:
  - src: image-01.jpg
    title: Brown tabby cat on white stairs
    params:
      date: 2024-02-18T13:04:30+0100
  - src: image-02.jpg
    title: A closeup of a gray cat's face
---

{{< gallery 
  match="*" 
  sortOrder="desc" 
  rowHeight="200" 
  margins="5" 
  thumbnailResizeOptions="600x600 q90 Lanczos" 
  showExif=true 
  previewType="blur" 
  embedPreview=true 
  loadJQuery=true
  filterOptions="[{label: 'ALLE', tags: '.*'}, {label: 'AKTUELL', tags: 'new'}, {label: 'DAMALS', tags: 'old'} ]"
  storeSelectedFilterInUrl=true
>}}
