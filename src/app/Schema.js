import Script from "next/script";

export default function Schema() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What are third-party trackers in this best ad blocker chrome?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trackers are like tiny pieces of code that gather details about how you use the internet. They can be added by the website you're currently on or by a completely different website you've never visited before. The ones from other websites are known as third-party trackers. These trackers collect information to create a profile of your interests and show you specific advertisements. For example: after looking at a website that sells coffee makers, you start seeing ads for coffee makers everywhere you go online. That is why this extension protects you from these third party trackers. By installing this tool in your browser will give you privacy on your search habits. Enjoy unstoppable streaming in this extension.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can i prevent malware in chrome youtube ad blocker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To protect your browser from malware, the only solution is to install the extension now. The adblock for youtube chrome is free of cost. It gives you power to block the unwanted content.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What type of ads can adblocker for youtube block?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "adblock for youtube firefox blocks all kinds of ads, including banner ads, pop ups and video ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is youtube blocks ads on chrome free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is free adblock for chrome. By simply installing the extension you can block all unwanted ads from your browser.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to block ads on Youtube?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you dont know how to block ads on Youtube, we will help you, all you have to do is download the youtube adblocker chrome and install it to your browser. Now, enjoy your favourite showtime as it will remove ads from Youtube. You can also block ads to enjoy unlimited videos without having annoying ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is adblock plus chrome extension safe to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes this is perfectly safe to use. As by downloading this best free adblocker it will automatically block all the malware and gives the faster loadings. But it is advised to use this best free adblocker with other security measure such as antivirus software. This adblock google chrome is free to use. So, enjoy your favorite shows in adblock google chrome.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
}
