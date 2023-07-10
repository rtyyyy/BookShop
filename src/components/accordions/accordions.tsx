import React from "react";

import { useRef, useState } from "react";
import "./accordions.css";

const faqs = [
  {
    id: 1,
    header: "Why did we decide to change the customer loyalty program? How is the new loyalty program better than the old one?",
    text: `The new loyalty program is fair! The old loyalty program was tied to the number of purchased goods, the new one – to the amount of purchases.
    Generous! Cashback works from the first purchase. The client receives it immediately – for the first and all subsequent orders. In the old loyalty program, the customer did not receive anything before buying 6 products.
    Double benefit: valid for all products! Even those that are on promotions, sales and other discounts. Thus, the benefits of the new loyalty program are added to the benefits of the promotion and sale.
    Simple! The rules are exactly the same as those of most retail companies in the world .`,
  },
  {
    id: 2,
    header: "How quickly are points awarded after purchase?",
    text: `Points are awarded automatically after the order is delivered. The only caveat is that you can use them only the next day, after checking and in the absence of a return of the goods. In this case, bonus points become active.`,
  },
  {
    id: 3,
    header: "If I make a return of the product, will you return the bonus points spent on it to me?",
    text: `Yes, we will refund the bonus points spent on this product to your account.`,
  },
  {
    id: 4,
    header: "Under what conditions do bonus points burn out?",
    text: `If you haven't made a purchase in the last 99 days.

    If the product is returned, the bonus points for it are also reset. And in such a situation, the account may become negative if you have already used bonus points for the returned product. There is nothing to worry about: with subsequent purchases, you will return the account to the positive zone.`,
  },
];

const AccordionItem = (props: any) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">V</span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight! }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <article>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
    </article>
  );
};

export default Accordion