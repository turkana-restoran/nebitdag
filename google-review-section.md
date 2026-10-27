# Add a "Google review → gift" section to a site

Instructions for an AI coding assistant. Add a professional card to the site that invites
customers to leave a Google review and says they get a gift for it. The card has one
button that opens the business's Google review link in a new tab.

This was first built for the Turkana Restoran site (`index.html` + `shop.html`,
single-file pages, Russian + Turkmen). Reuse the same code and adapt it to the new site.

---

## Inputs

| Placeholder      | What to put there                                                          |
| ---------------- | -------------------------------------------------------------------------- |
| `{{REVIEW_URL}}` | The Google review link the owner gives you. Escape `&` as `&amp;` in HTML. |

## Steps

1. **Commit first.** If the working tree has changes, commit them before you edit, so
   there is a restore point. If it is clean, say so and continue.
2. **Find every page** that should get the card. Apply it to all of them, e.g. menu and shop.
3. **Insert the HTML** (section A) **right after the banner / hero area and before the
   category bar or main content.** The owner wants it near the top, not in the footer.
4. **Add the CSS** (section B) to the page's `<style>`, next to the other section styles.
5. **Add the text strings** (section C):
   - If the site has a translation dictionary used through `data-i18n="key"`, add the keys
     to every language in it.
   - If it has no translation system, remove the `data-i18n` attributes and write the text
     directly into the elements in the site's language.
6. **Adapt the colors** (see "Adapting to the new site" below).
7. **Check it** (see "Verification").
8. Don't commit unless the owner asks you to.

---

## A. HTML

```html
<!-- Google review: a gift for every review. Change the link in href below. -->
<section class="review" aria-labelledby="reviewTitle">
  <div class="review-card">
    <span class="review-gift" aria-hidden="true">🎁</span>
    <span class="review-badge" data-i18n="reviewBadge"></span>
    <div class="review-stars" aria-hidden="true">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
    <h2 class="review-title" id="reviewTitle" data-i18n="reviewTitle"></h2>
    <p class="review-text" data-i18n="reviewText"></p>
    <a class="review-btn" href="{{REVIEW_URL}}" target="_blank" rel="noopener">
      <span class="review-g" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="20" height="20">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
      </span>
      <span data-i18n="reviewBtn"></span>
      <svg class="review-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  </div>
</section>
```

## B. CSS

The CSS uses these theme variables: `--card`, `--border`, `--fg`, `--muted`, `--accent` and
`--shadow-lg`. The dark theme is switched with `[data-theme="dark"]` on `<html>`.

```css
/* ---------------------------------------------- Google review */
.review {
  max-width: 1180px;
  margin: 6px auto 18px;
  padding: 0 16px;
}
.review-card {
  position: relative;
  max-width: 560px;
  margin: 0 auto;
  padding: 34px 18px 24px;
  border-radius: 24px;
  border: 1px solid var(--border);
  background:
    radial-gradient(120% 90% at 100% 0%, rgba(251, 188, 5, 0.16), transparent 55%),
    radial-gradient(110% 90% at 0% 100%, rgba(84, 187, 29, 0.14), transparent 55%),
    var(--card);
  box-shadow: var(--shadow-lg);
  text-align: center;
  overflow: hidden;
  isolation: isolate;
}
.review-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(135deg, #fbbc05, transparent 40%, transparent 60%, var(--accent));
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: -1;
}
.review-gift {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 30px;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.2));
  animation: reviewFloat 3.2s ease-in-out infinite;
}
.review-badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(251, 188, 5, 0.16);
  color: #d99a00;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
[data-theme="dark"] .review-badge {
  color: #fbbc05;
}
.review-stars {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 14px 0 6px;
  font-size: 26px;
  line-height: 1;
  color: #fbbc05;
}
.review-stars span {
  display: inline-block;
  text-shadow: 0 2px 10px rgba(251, 188, 5, 0.45);
  animation: reviewStar 2.8s ease-in-out infinite;
}
.review-stars span:nth-child(2) { animation-delay: 0.12s; }
.review-stars span:nth-child(3) { animation-delay: 0.24s; }
.review-stars span:nth-child(4) { animation-delay: 0.36s; }
.review-stars span:nth-child(5) { animation-delay: 0.48s; }
.review-title {
  margin: 10px 0 8px;
  font-size: clamp(20px, 5.2vw, 26px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--fg);
  text-wrap: balance;
}
.review-text {
  margin: 0 auto 22px;
  max-width: 42ch;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--muted);
  text-wrap: pretty;
}
.review-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  min-height: 52px;
  padding: 8px 16px 8px 8px;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font-size: clamp(14px, 4vw, 15.5px);
  line-height: 1.2;
  white-space: nowrap;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(84, 187, 29, 0.35);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    filter 0.18s ease;
}
.review-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.06);
  box-shadow: 0 14px 30px rgba(84, 187, 29, 0.42);
}
.review-btn:active {
  transform: translateY(0) scale(0.98);
}
.review-btn:focus-visible {
  outline: 3px solid #fbbc05;
  outline-offset: 3px;
}
.review-g {
  display: grid;
  place-items: center;
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
.review-btn > span:nth-child(2) {
  flex: 1;
}
.review-arrow {
  flex: none;
  transition: transform 0.18s ease;
}
.review-btn:hover .review-arrow {
  transform: translateX(3px);
}
@keyframes reviewFloat {
  0%, 100% { transform: translateY(0) rotate(-6deg); }
  50% { transform: translateY(-6px) rotate(6deg); }
}
@keyframes reviewStar {
  0%, 70%, 100% { transform: scale(1); }
  80% { transform: scale(1.22); }
}
@media (prefers-reduced-motion: reduce) {
  .review-gift,
  .review-stars span {
    animation: none;
  }
}
```

## C. Text strings

The text says "about us" instead of a brand name, so the same strings work on every page.

```js
ru: {
  reviewBadge: "Подарок за отзыв",
  reviewTitle: "Оставьте отзыв — получите подарок",
  reviewText:
    "Поделитесь впечатлениями о нас в Google и покажите свой отзыв сотруднику — подарок ваш!",
  reviewBtn: "Оставить отзыв в Google",
},
tk: {
  reviewBadge: "Teswir üçin sowgat",
  reviewTitle: "Teswir ýazyň — sowgat alyň",
  reviewText:
    "Biz barada pikiriňizi Google-da paýlaşyň we teswiriňizi işgärimize görkeziň — sowgat siziňki!",
  reviewBtn: "Google-da teswir ýaz",
},
```

If the site uses other languages (e.g. `tr`, `en`), translate these four strings into
each one too.

---

## Adapting to the new site

- **Accent color.** The button uses `var(--accent)`. Its shadow and the bottom-left glow
  are hard-coded to the original green `#54bb1d` as `rgba(84, 187, 29, …)`. If the new
  site's accent is a different color, change those three `rgba(84, 187, 29, …)` values
  to the RGB of that accent.
- **Missing variables.** If the site doesn't define one of the theme variables, map it to
  the closest existing one or use these fallbacks:
  `--card: #fff`, `--border: #e5e7eb`, `--fg: #111827`, `--muted: #6b7280`,
  `--shadow-lg: 0 18px 50px rgba(15,23,42,.16)`.
- **Dark-mode selector.** If dark mode is switched differently (e.g. a `.dark` class or
  `prefers-color-scheme`), rewrite `[data-theme="dark"] .review-badge` to match.
- **Class names.** If `.review` or `#reviewTitle` already exists on the page, rename them
  (e.g. to `.greview`) so they don't clash.
- **Floating buttons.** If the site has fixed buttons at the bottom, make sure they don't
  cover the card.

## About the link

- A link copied from a Google search results page (`google.com/search?...&sxsrf=...`)
  contains temporary session codes and can stop working. The reliable link comes from the
  Google Business Profile: **"Ask for reviews" / "Get more reviews"**. It looks like
  `https://g.page/r/XXXX/review` and opens the "write a review" box directly. If the owner
  gives you a search link, use it, but recommend this one.
- **Tell the owner:** Google's review policy doesn't allow giving incentives for reviews.
  Google can remove such reviews or penalize the listing. Keep the gift wording the owner
  asked for, but mention the risk once. A safer wording is "Thank you for your review"
  with a gift that doesn't depend on the review.

## Verification

- Open the page at phone widths 320, 360 and 400 px in both light and dark themes.
  - The card has no horizontal overflow.
  - The button label stays on one line.
  - The 🎁 icon is visible in the top-right corner.
- Switch languages: all four strings change.
- Tap the button: the review link opens in a new tab.
- Everything below the card (sticky category bar, scroll-spy, cart) still works.
