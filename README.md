# 🚀 Akhilesh's Portfolio

Welcome to my personal portfolio site — built with **Next.js 15**, **Tailwind CSS**, and a focus on clean design, smooth interactions, and accessibility. It showcases my work, skills, and ways to connect for collaborations.

---

## 🛠️ Stack

- **Framework:** [Next.js 15+](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** [Geist](https://vercel.com/font)
- **Theme Handling:** CSS Variables with localStorage
- **Deployment:** [Vercel](https://vercel.com)

---

## 🌙 Features

- Dark/light theme toggle with **localStorage sync**
- **Section scroll with offset** to prevent navbar overlap
- Responsive layout with consistent spacing and typography
- Accessible links with hover states and screen reader labels
- Connect section with branded hover colors (GitHub, LinkedIn, Resume)
- Clean, reusable component structure (`<Section />`, icons, etc.)
- Optimized for SEO and fast loading

---

## 🧩 Folder Structure

```
app/
├── layout.tsx           # Root layout, sets global styles
├── page.tsx             # Homepage
components/
├── section-title.tsx    # Section wrapper with icon and title
├── sectionIcons.ts      # Icon mapping per section
├── navbar.tsx           # Fixed top navbar with active section tracking
public/
├── cv.pdf               # Resume download
styles/
├── globals.css          # Tailwind and theme variables
```

---

## 📦 Getting Started

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run dev
```

---

## 🌐 Deployment

[Vercel](https://vercel.com)

---

## 📝 Customization

- **Update sections**: Edit `components/` for each section's content.
- **Change theme colors**: Modify CSS variables in `globals.css`.
- **Replace resume**: Update `public/cv.pdf`.

---

## 📬 Contact

I'm based in **Hyderabad, India** — always open to remote opportunities and collaborations.

Let’s connect: [GitHub](https://github.com/...), [LinkedIn](https://linkedin.com/in/...), [Resume](./public/cv.pdf)

---

## License

MIT — Feel free to use and remix!

---

Let me know:
- Do you want this to support multiple themes?
- Should I include screenshots or deployment instructions?

I'll adjust the README accordingly.