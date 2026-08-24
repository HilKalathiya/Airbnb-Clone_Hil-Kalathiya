# Photo Tour Runtime Specification (Static Forensics)

*Note: Extracted from photo_tour.html CSS because browser is frozen.*

## 1. Outer Container (Lightbox / Modal)
```css
._KpcKWX{position:fixed;inset:0;z-index:120;background:#fff;display:flex;flex-direction:column;opacity:0;visibility:hidden;transform:translateY(28px);transition:opacity .3s cubic-bezier(.2,0,0,1),transform .3s cubic-bezier(.2,0,0,1),visibility 0s linear .3s}
._KpcKWX._PjnNJs{opacity:1;visibility:visible;transform:translateY(0);transition:opacity .3s cubic-bezier(.2,0,0,1),transform .3s cubic-bezier(.2,0,0,1)}
```

## 2. Photo Tour Header
```css
._TCWfOg{flex-shrink:0;z-index:5;height:88px;display:flex;align-items:center;padding:0 32px;background:#fff}
._bNHEUf{width:40px;height:40px;border:none;background:transparent;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;transition:background .16s,transform .08s}
._bNHEUf span{width:18px;height:18px;display:inline-block}
._bNHEUf:hover{background:var(--grey200)}
._bNHEUf:active{transform:scale(.9)}
```

## 3. Two-Column Layout (Info + Gallery)
```css
._AWcqip{display:grid;grid-template-columns:1fr 1fr;gap:20px 60px;align-items:start;padding:16px 0 4px}
._AWcqip ._yZYwUW{position:sticky;top:20px}
._AWcqip ._AnkvRF{font-size:32px;font-weight:500;line-height:1.1;letter-spacing:-.02em}
._AWcqip ._hvJgUS{font-size:16px;color:var(--muted2);margin-top:8px;line-height:1.4}
._AWcqip{grid-template-columns:1fr}
._AWcqip ._yZYwUW{position:static}
```

## 4. Left Column (Sticky)
```css
._yZYwUW{position:sticky;top:20px}
._yZYwUW{position:static}
._AnkvRF{font-size:32px;font-weight:500;line-height:1.1;letter-spacing:-.02em}
```

## 5. Right Column (Gallery Grid)
```css
._wdcjGJ{display:grid;gap:12px}
._wdcjGJ._vmCONz{grid-template-columns:1fr}
._wdcjGJ._DLVRjk{grid-template-columns:1fr 1fr}
._wdcjGJ._DLVRjk{grid-template-columns:1fr}
._GXrMIo{position:relative;display:block;width:100%;aspect-ratio:3/2;padding:0;border:none;background:#eee;border-radius:8px;overflow:hidden}
._GXrMIo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s cubic-bezier(.2,0,0,1)}
._GXrMIo:after{content:"";position:absolute;inset:0;background:#0000;transition:background .2s}
._GXrMIo:hover:after{background:#00000014}
._GXrMIo:hover img{transform:scale(1.04)}
._GXrMIo:active img{transform:scale(1)}
._GXrMIo:focus-visible,body.kbd ._gKVFNL:focus-visible{outline:2px solid #222;outline-offset:3px}
._gKVFNL{background:none;border:none;padding:0;text-align:left;display:flex;flex-direction:column;gap:8px}
._gKVFNL img{width:100%;aspect-ratio:106/100;object-fit:cover;border-radius:8px;display:block;transition:transform .25s cubic-bezier(.2,0,0,1),filter .2s}
._gKVFNL:hover img{transform:scale(1.04);filter:brightness(.94)}
._gKVFNL:active img{transform:scale(.99)}
._gKVFNL ._tAbhrW{font-size:14px;color:var(--muted2)}
._gKVFNL:focus-visible{outline:2px solid #222;outline-offset:3px}
```

