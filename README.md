[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# 19 November 2026 — One Day in Pictures

A front-page image summing up the world news of Thursday, 19 November 2026 — every story in it happened, or was first reported, on that day, re-checked against the day's full reporting once the day had ended everywhere: Trump, Xi and Putin hold the first-ever trilateral talks in Shenzhen at the APEC summit, ending in a four-point declaration — UN reform, more oil output and talks to cut nuclear risk, pledging that nuclear war "must never be fought" — but no breakthrough on Ukraine or Iran; the International Court of Justice delivers its first-ever genocide verdict against a state, finding Myanmar responsible 9–6 and ordering reparations; GTA VI arrives after a 13-year wait and scores 99 on Metacritic, tied for the best-rated game ever; Cyclone Akvan bears down on India as 80,000+ people are evacuated ahead of Friday's landfall; and Neptune missiles strike the Crimean Bridge's rail line a third time in a week, halting trains. The footer ticker adds the Van Gogh record sale, COP31's still-elusive deal on its penultimate day and turmoil in Bangladesh, where Yunus's home was torched and two people were killed.

## The image

`entry.png` (1024×1024, PNG) is a newspaper front page drawn for this day: a masthead naming the date, a lead photo of the Shenzhen summit handshake, a two-line standfirst carrying the summit's four-point declaration, and four panels covering law, culture, weather and war, each with a short headline and a one-line summary so the day reads at a glance. The type is sized so the page stays legible at about 300 pixels across.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` in the grader). It checks the file is a whole PNG of at most 1 MiB first, and both runs write byte-identical output. The image is drawn by `draw.py` (outside this repository) with Pillow from a generated summit photo; running it twice produces byte-identical output.

## Entry

Built for the [make.fun bounty "Sum up 19 November's world news in one image"](https://make.fun/bounty/news-image-20261119).
