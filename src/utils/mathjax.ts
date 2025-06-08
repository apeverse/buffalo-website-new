// let mathjaxPromise: Promise<void> | null = null

// export function loadMathJax(): Promise<void> {
//   if (mathjaxPromise) {
//     return mathjaxPromise
//   }

//   mathjaxPromise = new Promise((resolve, reject) => {
//     const script = document.createElement('script')
//     script.id = 'MathJax-script'
//     script.async = true
//     script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
//     script.onload = () => resolve()
//     script.onerror = () => {
//       mathjaxPromise = null
//       reject(new Error('Failed to load MathJax'))
//     }
//     document.head.appendChild(script)
//   })

//   return mathjaxPromise
// }

// export function renderMathJax(element: HTMLElement): void {
//   if (window.MathJax) {
//     window.MathJax.typesetPromise([element]).catch((err: Error) => {
//       console.error('MathJax typesetting failed:', err)
//     })
//   }
// }
