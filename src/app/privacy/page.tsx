import type { Metadata } from "next";
import { Entities, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How LexConv collects, uses and protects personal data, under UK data protection law and India's Digital Personal Data Protection Act.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      path="/privacy"
      intro="This policy explains what personal data we collect, why we collect it, who we share it with and what your rights are. It covers lexconv.com and LexConv products such as ColdChain OS."
    >
      <h2>1. Who is responsible for your data</h2>
      <p>Your personal data is handled by:</p>
      <Entities />
      <p>
        If you are in India, LexConv India is responsible for your data (the &ldquo;data
        fiduciary&rdquo;). Otherwise LexConv UK is responsible (the &ldquo;controller&rdquo;). For
        any privacy question, e-mail <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>2. What we collect</h2>
      <h3>When you use the contact form or e-mail us</h3>
      <p>
        Your name, e-mail address, company name (if you give it), the topic you choose and your
        message.
      </p>
      <h3>When you visit lexconv.com</h3>
      <p>
        Our hosting provider records basic technical data, such as your IP address, browser type and
        the pages you request, to keep the site running and secure. We use your IP address for a short
        time to stop the contact form being flooded with spam. This website does not use cookies or
        analytics trackers.
      </p>
      <h3>When you use one of our products</h3>
      <p>
        Account details (name, work e-mail, phone number if given, company and role), and the data
        you put into the product. For ColdChain OS that includes sensor readings, incident records and
        photos, maintenance records and audit logs.
      </p>
      <h3>When you pay</h3>
      <p>
        Billing details such as your company name, billing address and payment reference. Card, UPI
        and bank details are collected by Razorpay, not by us.
      </p>

      <h2>3. Why we use it, and our legal basis</h2>
      <ul>
        <li>
          <strong>To reply to you</strong> when you contact us. In the UK our basis is our legitimate
          interest in answering enquiries. In India it is the consent you give by sending the message.
        </li>
        <li>
          <strong>To provide the product you signed up for</strong>, including support. Our basis is
          the contract with you, or in India your consent and the purpose you gave the data for.
        </li>
        <li>
          <strong>To bill you and keep accounts</strong>, because the law requires us to keep
          financial records.
        </li>
        <li>
          <strong>To keep our systems secure</strong> and prevent fraud and abuse, which is our
          legitimate interest and, where it applies, a legal duty.
        </li>
      </ul>
      <p>
        We do not sell your personal data. We do not use it for advertising, and we do not make
        decisions about you using only automated means.
      </p>

      <h2>4. Who we share it with</h2>
      <p>We use trusted providers who process data for us, only to run our services:</p>
      <ul>
        <li>
          <strong>Vercel</strong>: hosts this website and our product websites.
        </li>
        <li>
          <strong>Supabase</strong>: stores product data such as accounts and sensor readings.
        </li>
        <li>
          <strong>Resend</strong>: sends e-mails, including contact form messages and product alerts.
        </li>
        <li>
          <strong>Zoho</strong>: hosts our business e-mail inbox.
        </li>
        <li>
          <strong>Razorpay</strong>: processes payments.
        </li>
      </ul>
      <p>
        We may also share data if the law requires it, or with professional advisers such as our
        accountants and lawyers.
      </p>

      <h2>5. International transfers</h2>
      <p>
        Our providers may store or process data outside your country, for example in the European
        Union, the United Kingdom, the United States or India. When personal data leaves the UK, we
        rely on legal safeguards such as adequacy decisions or standard contractual clauses. We only
        transfer data from India where Indian law allows it.
      </p>

      <h2>6. How long we keep it</h2>
      <ul>
        <li>Contact form messages and e-mails: up to 24 months after our last contact with you.</li>
        <li>IP addresses used to limit spam on the contact form: up to 10 minutes.</li>
        <li>
          Product data: while your account is active, and up to 30 days after your plan ends so you
          can ask for an export. Then we delete it.
        </li>
        <li>Billing records: as long as tax law requires, usually 6 to 8 years.</li>
      </ul>

      <h2>7. How we protect it</h2>
      <p>
        We use encrypted connections (HTTPS), access controls, and providers with strong security
        practices. Only people who need the data to do their work can see it. If a breach affects
        your data, we will tell you and the authorities where the law requires it.
      </p>

      <h2>8. Your rights</h2>
      <p>Depending on where you are, you can ask us to:</p>
      <ul>
        <li>give you a copy of your personal data;</li>
        <li>correct data that is wrong or incomplete;</li>
        <li>delete your data;</li>
        <li>stop or limit how we use it, or object to our use of it;</li>
        <li>withdraw consent you have given (this does not affect anything we did before);</li>
        <li>send your data to another provider in a common format.</li>
      </ul>
      <p>
        E-mail <a href={`mailto:${company.email}`}>{company.email}</a>. We will reply within one month.
        If you are not happy with our answer, you can complain to the Information Commissioner&apos;s
        Office in the UK (<a href="https://ico.org.uk">ico.org.uk</a>) or, in India, to the Data
        Protection Board of India.
      </p>

      <h2>9. Children</h2>
      <p>Our website and products are for businesses and are not meant for anyone under 18.</p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy. The date at the top shows when it last changed. If a change
        matters to customers, we will tell you by e-mail.
      </p>
    </LegalPage>
  );
}
