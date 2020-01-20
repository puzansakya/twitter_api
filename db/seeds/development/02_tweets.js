exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tbl_tweets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tbl_tweets').insert([
        { tweet: `My heart goes out to the Malaysian people. This is such a tragedy. Words can't express how sad it is. I wish we could just have peace`, user_id: 1 },
        { tweet: `My name is in WIRED so that’s sort of cool .`, user_id: 2 },
        { tweet: 'PurgeCSS is such a crucial tool for unlocking really powerful ideas and workflows with Tailwind', user_id: 3 },
        { tweet: 'Been casually taking notes for my talk for a couple of months now, will be on building your own component library with Tailwind CSS ', user_id: 3 },
        { tweet: 'This tool is super useful and has helped me catch when my email newsletter software switches what mail service they are using twice now ', user_id: 3 },
        { tweet: '🔥 By far the most exciting thing about CSS custom properties is how they enable composition within a single CSS property.', user_id: 3 },
        { tweet: ' Do you support IE11 on your Tailwind projects?', user_id: 3 },
        { tweet: `With CSS Grid, is it possible for auto rows to match the height of their children when you have an element that spans multiple rows? I can achieve this in Chrome/Safari but in Firefox doesn't seem to work.`, user_id: 3 },
        { tweet: `I talk to @calebporzio about Alpine.js and why it might just be exactly what you're looking for if you're not interested in building a single-page app 🧐`, user_id: 3 },
        { tweet: `👋 Happy Monday!

        Ryan and I have some consulting availability, and we'd love to help you out with your next React project!
        
        If you know anyone looking for help, I'd love to chat 👉 DM or ✉️ sam@samselikoff.com`, user_id: 3 },
        { tweet: `Going to live stream building some of @steveschoger's Tailwind UI designs this afternoon, which one do you want to see, left or right? 🤔`, user_id: 3 },
      ]);
    });
};