# Vrushubh Gandhi — .NET Developer Portfolio

A responsive Next.js App Router portfolio built with TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

1. Update `lib/data.ts` with verified GitHub and LinkedIn profile URLs. The current links are intentionally left blank rather than fabricated.
2. Replace the illustrative project previews with real screenshots if available.
3. Add `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM` from `.env.example` to your deployment environment to enable email delivery through Resend. Without these variables the form validates input and returns a clear configuration message; it does not pretend an email was sent.
4. Replace `https://example.com` in `app/layout.tsx` with the deployed canonical domain.
5. Review the content and confirm all role details before publishing.

## Resume

The supplied resume is included at `public/resume.pdf`; the navigation and hero buttons download it.

## Editing content

- Personal details, skills, experience, project copy, and social URLs: `lib/data.ts`
- Layout and sections: `components/portfolio.tsx`
- Theme and responsive styling: `app/globals.css`
- Contact delivery: `app/api/contact/route.ts`

## Deployment

Deploy to Vercel (or another Next.js-compatible host). Set the environment variables above in the hosting dashboard before enabling the contact form.
