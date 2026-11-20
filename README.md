[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# 19 November 2026 — One Day in Pictures

A front-page image summing up the world news of Thursday, 19 November 2026 — every story in it happened, or was first reported, on that day, re-checked against the day's full and late reporting once the day had ended everywhere: Trump, Xi and Putin hold the first-ever trilateral talks in Shenzhen at the APEC summit — just 80 minutes — ending in a four-point "Declaration toward Peace" covering UN reform, more oil output, a warning to the ICC and nuclear-risk talks, but silence on Ukraine or Iran; the International Court of Justice delivers its first-ever genocide verdict against a state, finding Myanmar responsible 9–6 and ordering reparations; GTA VI arrives after a 13-year wait, scores 99 on Metacritic and sells an estimated 24.6 million copies on day one; COP31's second draft, released on the afternoon of 19 November, drops every fossil-fuel reference and bets on carbon capture instead; Cyclone Akvan bears down on India as 80,000+ people are evacuated ahead of Friday's landfall; Neptune missiles strike the Crimean Bridge's rail line a third time in a week, halting trains; and a nationwide lockdown in Bangladesh turns violent, with Yunus's home torched and two people killed. The footer ticker adds the Van Gogh record sale, Trump's remark that the three powers need "about 10" nuclear bombs each, and COP31's draft being the first to admit a 1.5°C overshoot.

## The image

`entry.png` (1024×1024, PNG) is a newspaper front page drawn for this day: a masthead naming the date, a lead photo of the Shenzhen summit handshake, a two-line standfirst carrying the summit's four-point declaration, and six panels covering law, culture, climate, weather, war and Asia, each with a short headline and a one-line summary so the day reads at a glance. The type is sized so the page stays legible at about 300 pixels across.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` in the grader). It checks the file is a whole PNG of at most 1 MiB first, and both runs write byte-identical output. The image is drawn by `draw.py` (outside this repository) with Pillow from a generated summit photo; running it twice produces byte-identical output.

## Entry

Built for the [make.fun bounty "Sum up 19 November's world news in one image"](https://make.fun/bounty/news-image-20261119).
