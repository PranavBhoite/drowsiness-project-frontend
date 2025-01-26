export default function Features() {
  return (
    <section className="relative">
      {/* Background Elements */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        {/* Removed Image */}
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        {/* Removed Image */}
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Drowsiness Prevention Tips
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Tips for Preventing Driver Drowsiness
            </h2>
            <p className="text-lg text-indigo-200/65">
              Driving while drowsy is dangerous. Here are some tips to stay
              alert on the road and prevent accidents caused by drowsiness.
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">1</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Take Regular Breaks
              </h3>
              <p className="text-indigo-200/65">
                Stop every 2 hours for a break, stretch your legs, and refresh
                yourself. A quick stop can prevent you from becoming too tired.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">2</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Avoid Driving at Night
              </h3>
              <p className="text-indigo-200/65">
                The body's natural circadian rhythm makes us more prone to
                drowsiness at night. Avoid long drives during the nighttime to
                stay alert.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">3</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Drink Caffeine in Moderation
              </h3>
              <p className="text-indigo-200/65">
                A moderate amount of caffeine can help you stay awake, but avoid
                overconsumption, as it may lead to dehydration or crashes.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">4</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Get Adequate Sleep Before Driving
              </h3>
              <p className="text-indigo-200/65">
                Ensure you are well-rested before taking the wheel. Fatigue
                reduces reaction times and alertness.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">5</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Share the Driving Responsibilities
              </h3>
              <p className="text-indigo-200/65">
                If possible, share the driving with another person to reduce
                the risk of drowsiness, especially on long trips.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">6</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Avoid Heavy Meals
              </h3>
              <p className="text-indigo-200/65">
                Eating large or heavy meals can make you feel sleepy. Opt for
                light snacks to maintain your energy.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">7</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Stay Engaged
              </h3>
              <p className="text-indigo-200/65">
                Keep your mind alert by listening to music, a podcast, or
                talking with a passenger.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">8</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Recognize Signs of Drowsiness
              </h3>
              <p className="text-indigo-200/65">
                If you experience yawning, heavy eyelids, or difficulty
                focusing, it's time to pull over and rest.
              </p>
            </article>
            <article>
              <div className="mb-3 text-indigo-500 font-bold text-3xl">9</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Get Fresh Air
              </h3>
              <p className="text-indigo-200/65">
                Fresh air can help you stay awake and alert. Roll down the
                windows or take a short walk outside if you start feeling tired.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
