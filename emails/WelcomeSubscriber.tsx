import {
  Body,
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
          <title>frérot ntwali's newsletter</title>
        </Head>
        <Body className="bg-[#f6f9fc] dark:bg-[#1a1a1a] font-sans">
          <Preview>
            Woohoo! You're in! 🎉 Get ready for some awesome content!
          </Preview>
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
                className=" dark:hidden"
              />
              <Hr className="border-[#3ca189] dark:border-[#7a5479] my-5 border-dotted" />
              <Text className="text-[#394258] dark:text-[#d1d5db] text-xl leading-6 text-left font-bold">
                Hey there! 👋 You made it!
              </Text>
              <Text className="text-[#394258] dark:text-[#d1d5db] text-base leading-6 text-left">
                *Virtual high-five* for joining the coolest waitlist around! I'm
                super excited you're here! 🎉
              </Text>
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left">
                I'm cooking up some mind-blowing blog posts right now ✨ and
                guess what? You'll be among the first to dive into this treasure
                trove of digital goodies!
              </Text>
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left">
                Sit back, relax, maybe grab a snack 🍪 - I'll buzz your inbox as
                soon as the first juicy articles drop!
              </Text>
              <Hr className="border-[#3ca189] dark:border-[#7a5479] my-5 border-wavy" />
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left">
                Got a brilliant idea for a topic? Or just want to say hi? Don't
                be shy!{" "}
                <Link
                  className="text-[#3ca189] dark:text-[#7a5479] font-bold hover:underline"
                  href="mailto:me@frerot.dev"
                >
                  Ping me anytime! ✉️
                </Link>
              </Text>
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left">
                Thanks a million for joining this adventure - we're going to
                have so much fun together!
              </Text>
              <Text className="text-[#525f7f] dark:text-[#9ca3af] text-base leading-6 text-left font-bold">
                — frérot ntwali 😎
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
