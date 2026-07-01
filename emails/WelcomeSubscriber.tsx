import { mydetails } from "@/constants/my-basic-details";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const WelcomeSubscriberEmail = ({ base_url }: { base_url: string }) => {
  const blogUrl = `${base_url}/blog`;

  return (
    <Html>
      <Tailwind>
        <Head>
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="rgb(60, 161, 137)"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="rgb(122, 84, 121)"
          />
          <meta name="color-scheme" content="light dark" />
          <title>frérot ntwali&apos;s blog</title>
        </Head>
        <Body className="bg-[#f6f9fc] dark:bg-[#1a1a1a] font-sans">
          <Preview>you&apos;re subscribed — new posts will land in your inbox</Preview>
          <Container className="bg-white dark:bg-[#2a2a2a] mx-auto p-[20px_0_48px] mb-16 rounded-lg">
            <Section className="px-12">
              <Img
                src={`${base_url}/email/logo-dark.png`}
                width="49"
                height="41"
                alt="logo"
                className="hidden dark:block"
              />
              <Img
                src={`${base_url}/email/logo-light.png`}
                width="49"
                height="41"
                alt="logo"
                className="dark:hidden"
              />
              <Hr className="border-[#3ca189] dark:border-[#7a5479] my-5 border-dotted" />
              <Text className="text-[#394258] dark:text-[#d1d5db] text-xl leading-6 text-left font-bold">
                hey — you&apos;re in
              </Text>
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left">
                thanks for subscribing. the blog is live now, and you&apos;ll get new posts in
                your inbox when they go up. no spam, unsubscribe anytime.
              </Text>
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left">
                if you want to catch up on what&apos;s already there:
              </Text>
              <Button
                href={blogUrl}
                className="bg-[#3ca189] dark:bg-[#7a5479] text-white text-sm font-medium rounded-md px-5 py-2.5"
              >
                read the blog
              </Button>
              <Hr className="border-[#3ca189] dark:border-[#7a5479] my-5 border-wavy" />
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left">
                got a topic in mind, or just want to say hi?{" "}
                <Link
                  className="text-[#3ca189] dark:text-[#7a5479] font-bold hover:underline"
                  href={`mailto:${mydetails.contact_details.email}`}
                >
                  drop me a line
                </Link>
              </Text>
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left font-bold">
                — frérot ntwali
              </Text>
              <Hr className="border-[#3ca189] dark:border-[#7a5479] my-5 border-dashed" />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeSubscriberEmail;
