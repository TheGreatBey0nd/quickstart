---
title: "Gallery"
description: "Eine Auswahl meiner Bilder mit Filteroptionen"

date: 2024-02-18T14:12:44+0100
---

# Meine Galerie

Hier kannst du meine Fotos durchsuchen. Nutze die Filter-Buttons, um nach Kategorien zu filtern.

{{< gallery 
  match="images/*" 
  sortOrder="desc" 
  rowHeight="200" 
  margins="5" 
  thumbnailResizeOptions="600x600 q90 Lanczos" 
  showExif=true 
  previewType="blur" 
  embedPreview=true 
  loadJQuery=true
  filterOptions="[{label: 'Alle', tags: '.*'}, {label: 'Katzen', tags: 'cat'}, {label: 'Natur', tags: 'nature'}, {label: 'Architektur', tags: 'architecture'}]"
  storeSelectedFilterInUrl=true
>}}
