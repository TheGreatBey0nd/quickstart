---
title: "Bilder"
description: "Eine Auswahl meiner Bilder mit Filteroptionen"


---

{{< gallery 
  match="*" 
  sortOrder="desc" 
  rowHeight="200" 
  margins="5" 
  thumbnailResizeOptions="600x600 q90 Lanczos" 
  showExif=false 
  previewType="blur" 
  embedPreview=true 
  loadJQuery=true
  filterOptions="[{label: 'ALLE', tags: '.*'}, {label: 'AKTUELL', tags: 'new'}, {label: 'DAMALS', tags: 'old'} ]"
  storeSelectedFilterInUrl=false
>}}
