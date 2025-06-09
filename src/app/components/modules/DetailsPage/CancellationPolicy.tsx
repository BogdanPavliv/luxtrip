import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const CancellationPolicy = () => {
  return (
    <section className="cancellation-policy">
      <div className="container">
        <div
          id="cancellation-policy"
          className="section cancellation-policy__inner"
        >
          <h2>Cancellation policy</h2>
          <div className="section-wrapper">
            <p>
              You can cancel your purchase of a subscription service and request
              a refund within 14 days from the initial transaction date.
            </p>
            <p className={`${manrope400.className}`}>
              The refund may be reduced pro-rata to reflect the use you have had
              of the service. This may show as two transactions in your account
              transaction history: a refund to your wallet of the full amount
              originally paid and then a debit of a charge for the period of the
              service you received.
              <br />
              <br />
              If you take advantage of a free trial when you sign up to a
              service, the 14-day cancellation period will commence on the day
              we accept your order of the free trial and the duration of the
              free trial will be included in the 14-day period. For example, you
              sign up for a free trial which lasts 7 days and your wallet is
              debited for the subscription at the end of the trial, you will
              have 7 days after your wallet was debited to cancel.
              <br />
              <br />
              Note: When you purchase a subscription service such as
              PlayStation®Plus, you agree to a rolling subscription with
              periodic billing &#40;e.g. annual billing&#41; . You can stop
              making payments at any time by turning off [Auto-renewal]
              &#40;click here for more information&#41; but, beyond the initial
              14-day cancellation period, you will not receive a refund for
              payments already made. When you turn off [Auto-renewal], your
              subscription will continue until the next payment is due, at which
              point it will end.
            </p>
            <h3>Further Information</h3>
            <p className={`${manrope400.className}`}>
              We recommend that you take care when you top up your wallet or
              make a purchase on PlayStation™Store. A number of account features
              are available so you can keep track of your account activity.
              <br />
              <br />
              To control the purchases made from the PlayStation™Store, via your
              account and console ensure you &#40;i&#41; use our password and
              passcode tools to control unauthorised log-in to and purchases via
              your account and &#40;ii&#41; if you have children, set up a
              separate account for each child and use our parental controls to
              limit their expenditure or prevent them shopping at all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancellationPolicy;
